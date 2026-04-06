// components/chat/ChatWindow.tsx
"use client";

import Body from "@/components/chat/Body";
import Header from "@/components/chat/Header";

type Props = {
  onClose?: () => void;
};

export default function ChatWindow({ onClose }: Props) {
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
      <Header onClose={onClose} />
      <Body />
    </div>
  );
}
