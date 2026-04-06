// components/chat/ChatWindow.tsx
"use client";

import { useState } from "react";
import { useChatContext } from "@/context/chatContext";
import Header from "@/components/chat/Header";
import Body from "@/components/chat/Body";
import Confirmation from "@/components/chat/Confirmation";

export default function ChatWindow() {
  const { chatMinimized, closeChat, minimizeChat, restoreChat } = useChatContext();

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  
  const showConfirmation = (value = false) => {
    setIsConfirmationVisible(value);
  };

  const handleConfirm = () => {
    showConfirmation(false);
    closeChat();
  };

  const handleCancel = () => {
    showConfirmation(false);
  };

  return (
    <div
      className="
      fixed bottom-0 right-0 w-full h-full  /* default mobile fullscreen */
      md:bottom-6 md:right-6 md:w-[380px] md:h-[600px]
      bg-white
      rounded-xl
      shadow-2xl
      border
      flex flex-col
      animate-in slide-in-from-bottom fade-in duration-300
      "
    >
      <Header
        onMinimize={() => chatMinimized ? restoreChat() : minimizeChat()}
        onClose={() => showConfirmation(true)}
      />
      <Body />
      {isConfirmationVisible && (
        <Confirmation 
          onConfirm={() => handleConfirm()}
          onCancel={() => handleCancel()}
        />
      )}
    </div>
  );
}
