// components/Chat.tsx
"use client";

import { useEffect, useRef } from "react";
import { useChatContext } from "@/context/chatContext";
import MessagesList from "@/components/chat/MessagesList";
import TextInput from "@/components/form/TextInput";
import TypingIndicator from "@/components/chat/TypingIndicator";

export default function Body() {
    const { messages, isTyping, sendMessage } = useChatContext();

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, isTyping]);

    return (
        <div className="flex flex-col h-full max-w-3xl">
            <div className="flex-1 overflow-y-auto p-4 bg-zinc-50 text-zinc-500">              
                <MessagesList />

                {/* Typing indicator */}
                {isTyping && <TypingIndicator />}

                {/* Reference used for scrolling to the bottom */}
                <div ref={bottomRef} />
            </div>
            <TextInput onSend={sendMessage} />
        </div>
    );
}