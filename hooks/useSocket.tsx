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
import { MessageType, SocketIOProps } from "@/types/socket";

export function useSocket(
  {
    host,
    path,
    withCredentials
}: SocketIOProps
) {
  const socketRef = useRef<Socket | null>(null);

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [connected, setConnected] = useState(false);

  if (!path) {
    throw new Error("Please provide a path for the WebSocket connection");
  }

  useEffect(() => {
    let mounted = true;

    async function initSocket() {
      // Initialize socket server (important!)
      await fetch(path);

      const socket = io(host ?? window.location.origin, {
        path,
        withCredentials,
        transports: ["websocket"]
      });

      socketRef.current = socket;

      socket.on(EV_CONNECT, () => {
        if (!mounted) return;
        console.log("Socket connected:", socket.id);
        setConnected(true);
      });

      socket.on(EV_DISCONNECT, () => {
        if (!mounted) return;
        setConnected(false);
      });

      socket.on(EV_TYPING, () => {
        if (!mounted) return;
        setIsTyping(true);
      });

      socket.on(EV_INCOMING, (msg: MessageType) => {
        if (!mounted) return;

        setMessages(prev => [...prev, msg]);
        setIsTyping(false);
      });
    }

    initSocket();

    return () => {
      mounted = false;
      socketRef.current?.disconnect();
    };
  }, [host, path, withCredentials]);

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

  return {
    messages,
    isTyping,
    connected,
    sendMessage
  };
}
