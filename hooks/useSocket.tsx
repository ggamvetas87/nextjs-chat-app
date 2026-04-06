// hooks/useSocket.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import {
  EV_CONNECT,
  EV_DISCONNECT,
  EV_TYPING,
  EV_INCOMING,
  EV_OUTGOING
} from "@/libs/constants";
import { MessageType, SocketIOProps, OutgoingPayload } from "@/types/socket";

export function useSocket({
  host,
  path,
  withCredentials
}: SocketIOProps) {

  const socketRef = useRef<Socket | null>(null);
  const mountedRef = useRef(true);

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [connected, setConnected] = useState(false);

  if (!path) {
    throw new Error("Please provide a path for the WebSocket connection");
  }

  /**
   * Initialize WebSocket connection
   */
  const initConnection = async () => {

    // prevent multiple connections
    if (socketRef.current) {
      return socketRef.current;
    }

    // fetch to ensure server is awake (for serverless deployments)
    await fetch(path);

    const socket = io(host ?? window.location.origin, {
      path,
      withCredentials,
      transports: ["websocket"]
    });

    socketRef.current = socket;

    socket.on(EV_CONNECT, () => {
    if (!mountedRef.current) return;

        console.log("Socket connected:", socket.id);
        setConnected(true);
    });

    socket.on(EV_DISCONNECT, () => {
        if (!mountedRef.current) return;

        setConnected(false);
    });

    socket.on(EV_TYPING, () => {
        if (!mountedRef.current) return;

        setIsTyping(true);
    });

    socket.on(EV_INCOMING, (msg: MessageType) => {
    if (!mountedRef.current) return;

    setMessages(prev => [...prev, msg]);
        setIsTyping(false);
    });

    return socket;
  };

  /**
   * Send normal user message
   */
  const sendMessage = (content: string) => {
    if (!socketRef.current) return;

    const userMsg: MessageType = {
      id: Date.now().toString(),
      role: "user",
      content
    };

    setMessages(prev => [...prev, userMsg]);

    socketRef.current.emit(EV_OUTGOING, content);

    setIsTyping(true);
  };

  /**
   * Reset chat state
   */
  const resetChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  /**
   * Send Chuck Norris category
   */
  const sendJokeCategory = (category: string) => {
    if (!socketRef.current) return;

    const userMsg: MessageType = {
      id: Date.now().toString(),
      role: "user",
      content: `Tell me a "${category}" Chuck Norris joke`
    };

    setMessages(prev => [...prev, userMsg]);

    const payload: OutgoingPayload = {
      type: "joke_category",
      category
    };

    socketRef.current.emit(EV_OUTGOING, payload);

    setIsTyping(true);
  };

  /**
   * Disconnect socket
   */
  const disconnect = () => {
    socketRef.current?.disconnect();
    socketRef.current = null;

    setConnected(false);
  };

  useEffect(() => {
    return () => {
        mountedRef.current = false;
    };
    }, []);

  return {
    messages,
    isTyping,
    connected,

    initConnection,
    sendMessage,
    sendJokeCategory,
    resetChat,
    disconnect
  };
}
