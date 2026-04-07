// components/chat/QuickReplies.tsx
"use client";

import Button from "@/components/interactions/Button";
import { QuickRepliesType } from "@/types/socket";

type QuickRepliesProps = {
    hideText?: boolean;
    options?: QuickRepliesType;
    onOptionClick?: (option: string) => void;
};

export default function QuickReplies({ 
    hideText = false,
    options,
    onOptionClick
}: QuickRepliesProps) {
    const { id, values } = options || {};

    return values && values.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
            {!hideText && (
                <div className="rounded-xl g-zinc-100 text-zinc-900 px-4 py-3">
                    Do you want to read another joke?
                    <br />Choose one of the categories:
                </div>
            )}
            <div data-test-id={`quick-replies-${id}`}>
            {values.map(opt => (
                <Button
                    key={opt}
                    importance="secondary"
                    onClick={() => onOptionClick?.(opt)}
                    className="px-3 py-1 text-sm border rounded-full"
                >
                {opt}
                </Button>
            ))}
            </div>
        </div>
    );
}
