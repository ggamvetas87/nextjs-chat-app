// context/chatContext.tsx
"use client";

import { 
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback
} from "react";
import { useSocket } from "@/hooks/useSocket";
import { SOCKET_PATH } from "@/libs/constants";
import { MessageType } from "@/types/socket";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface ChatContextType {
  messages: MessageType[];
  isTyping: boolean;
  connected: boolean;
  chatStarted: boolean;
  chatMinimized: boolean;
  startChat: () => Promise<void>;
  newChat: () => void;
  closeChat: () => void;
  minimizeChat: () => void;
  restoreChat: () => void;
  initConnection: () => Promise<Socket<DefaultEventsMap, DefaultEventsMap>>;
  sendMessage: (content: string) => void;
  resetChat: () => void;
  disconnect: () => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({
  children
}: {
  children: React.ReactNode
}) {
  const socket = useSocket({
    path: SOCKET_PATH,
    withCredentials: true
  });

  const [chatStarted, setChatStarted] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);

  const startChat = useCallback(async () => {
    await socket.initConnection();
    setChatStarted(true);
    setChatMinimized(false);
  }, [socket]);

  const newChat = useCallback(() => {
    socket.resetChat();
  }, [socket]);

  const minimizeChat = useCallback(() => {
    setChatMinimized(true);
  }, []);

  const restoreChat = useCallback(() => {
    setChatMinimized(false);
  }, []);

  const closeChat = useCallback(() => {
    socket.disconnect();
    socket.resetChat();
    setChatStarted(false);
    setChatMinimized(false);
  }, [socket]);

  return (
    <ChatContext.Provider
      value={useMemo(() => ({
        chatStarted,
        chatMinimized,
        startChat,
        newChat,
        minimizeChat,
        restoreChat,
        closeChat,
        ...socket
      }), [
        chatStarted,
        chatMinimized,
        socket,
        startChat,
        newChat,
        minimizeChat,
        restoreChat,
        closeChat
      ])}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => {
  const ctx = useContext(ChatContext);

  if (!ctx) {
    throw new Error("useChatContext must be used inside ChatProvider");
  }

  return ctx;
};
