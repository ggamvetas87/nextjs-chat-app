// components/chat/QuickReplies.tsx
"use client";

import { useChatContext } from "@/context/chatContext";
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
    const { disabledQuickReplies, disableQuickReply } = useChatContext();
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
            {/* Hide quick replies if the id is disabled */}
            {id && !disabledQuickReplies.includes(id) && values.map(opt => (
                <Button
                    key={opt}
                    importance="secondary"
                    onClick={() => {
                        onOptionClick?.(opt);
                        disableQuickReply(id); // disable all options of this quick reply set after one is clicked
                    }}
                    className="px-3 py-1 text-sm border rounded-full"
                >
                {opt}
                </Button>
            ))}
            </div>
        </div>
    );
}
