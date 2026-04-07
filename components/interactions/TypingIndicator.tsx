// components/chat/TypingIndicator.tsx
"use client";

import { useState } from "react";

export default function TypingIndicator() {
    const [text] = useState(() => 
        Math.random() < 0.5 ? "Bot is typing..." : "Bot is thinking..."
    );

    return (
        <div className="text-zinc-500 text-sm">
            {text}
        </div>
    );
}
