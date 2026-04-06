// components/chat/Header.tsx
"use client";

import { useChatContext } from "@/context/chatContext";
import Button from "@/components/interactions/Button";

type HeaderProps = {
  onClose?: () => void;
};

export default function Header({ onClose }: HeaderProps) {
    const { closeChat } = useChatContext();

    const handleClose = () => {
        closeChat();
        onClose?.();
    };
        
    return (
        <div className="flex justify-between items-center p-3 border-b">
            <div className="font-medium text-lg text-zinc-700">
                Converso Chat 💬
            </div>

            <Button
                importance="tertiary"
                onClick={handleClose}
                className="text-zinc-500 hover:text-black"
            >
                ✕
            </Button>
        </div>
    );
}
