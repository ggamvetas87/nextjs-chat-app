// components/chat/ChatBubble.tsx
"use client";

import Button from "@/components/interactions/Button";

type Props = {
  onClick: () => void;
};

export default function Bubble({ onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="
      fixed bottom-6 right-6
      w-14 h-14
      rounded-full
      bg-blue-500
      text-white
      text-2xl
      shadow-lg
      flex items-center justify-center
      hover:scale-105
      transition
      "
    >
      💬
    </Button>
  );
}
