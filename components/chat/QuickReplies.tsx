// components/chat/QuickReplies.tsx
"use client";

import Button from "@/components/interactions/Button";

type QuickRepliesProps = {
    options: string[];
    onOptionClick?: (option: string) => void;
};

export default function QuickReplies({ options, onOptionClick }: QuickRepliesProps) {
    return options && options.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
            <div className="rounded-xl g-zinc-100 text-zinc-900 px-4 py-3">
                Do you want to read another joke?
                <br />Choose one of the categories:
            </div>
            {options.map((opt) => (
                <Button
                key={opt}
                importance="primary"
                onClick={() => onOptionClick?.(opt)}
                className="px-3 py-1 text-sm border rounded-full"
                >
                {opt}
                </Button>
            ))}
            </div>
    );
}
