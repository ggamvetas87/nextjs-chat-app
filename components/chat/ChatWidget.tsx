// components/chat/ChatWidget.tsx

"use client";

import { useChatContext } from "@/context/chatContext";
import Bubble from "@/components/chat/Bubble";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatWidget() {
  const { chatStarted, chatMinimized, startChat } = useChatContext();

  return (
    <div className="animate-in slide-in-from-bottom fade-in duration-300">
      {(!chatStarted || chatMinimized) && (
        <Bubble onClick={startChat} />
      )}

      {chatStarted && !chatMinimized && (
        <ChatWindow />
      )}
    </div>
  );
}
