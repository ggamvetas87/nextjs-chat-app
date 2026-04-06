// components/Chat.tsx

"use client";

import { useEffect, useRef } from "react";
import { useChatContext } from "@/context/chatContext";
import Welcome from "@/components/chat/Welcome";
import TextInput from "@/components/form/TextInput";
import Message from "@/components/chat/Message";

export default function Body() {
    const {
        chatStarted,
        messages,
        isTyping,
        sendMessage,
        startChat
    } = useChatContext();

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, isTyping]);

    if (!chatStarted) {
        return (
        <div className="flex h-full items-center justify-center">
            <button
                onClick={startChat}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            >
            Start Chat
            </button>
        </div>
        );
    }

    return (
        <div className="flex flex-col h-full max-w-3xl">
            <div className="flex-1 overflow-y-auto p-4 bg-zinc-50 text-zinc-500">              
                {messages.length === 0 ? (
                    <Welcome onSelectPrompt={sendMessage} />
                ) : (
                    messages.map((msg) => (
                        <Message
                            key={msg.id}
                            role={msg.role}
                            content={msg.content}
                        />
                    ))
                )}

                {isTyping && (
                    <div className="text-zinc-500 text-sm">
                        Bot is typing...
                    </div>
                )}
                <div ref={bottomRef} />
            </div>
            <TextInput onSend={sendMessage} />
        </div>
    );
}