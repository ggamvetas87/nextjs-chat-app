// components/chat/ChatWindow.tsx
"use client";

import { useState } from "react";
import { useChatContext } from "@/context/chatContext";
import Header from "@/components/chat/Header";
import Body from "@/components/chat/Body";
import Confirmation from "./Confirmation";

type Props = {
  onClose?: () => void;
};

export default function ChatWindow({ onClose }: Props) {
  const { closeChat } = useChatContext();

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  
  const handleClose = () => {
    setIsConfirmationVisible(true);
  };

  const handleConfirm = () => {
    setIsConfirmationVisible(false);
    closeChat();
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false);
  };


  return (
    <div
      className="
      fixed bottom-24 right-6
      w-[380px]
      h-[600px]
      bg-white
      rounded-xl
      shadow-2xl
      border
      flex flex-col
      animate-in slide-in-from-bottom fade-in duration-300
      "
    >
      <Header onClose={handleClose} />
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
