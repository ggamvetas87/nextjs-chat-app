// components/chat/Header.tsx
"use client";

import Button from "@/components/interactions/Button";

type HeaderProps = {
  onMinimize?: () => void;
  onClose: () => void;
};

export default function Header({ onMinimize, onClose }: HeaderProps) {
    return (
        <div className="flex justify-between items-center p-3 border-b">
            <div className="font-medium text-lg text-zinc-700">
                Converso Chat 💬
            </div>

            <div>
                {onMinimize && (
                    <Button
                        importance="tertiary"
                        onClick={onMinimize}
                        className="text-zinc-500 hover:text-black"
                    >
                        —
                    </Button>
                )}
                <Button
                    importance="tertiary"
                    onClick={onClose}
                    className="text-zinc-500 hover:text-black"
                >
                    ✕
                </Button>
            </div>
        </div>
    );
}
