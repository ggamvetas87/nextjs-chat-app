// components/Chat.tsx

"use client";

import { useEffect, useRef } from "react";
import TextInput from "@/components/TextInput";
import Message from "@/components/Message";
import { useSocket } from "@/hooks/useSocket";
import { SOCKET_PATH } from "@/libs/constants";

export default function Chat() {
    const {
        messages,
        isTyping,
        sendMessage
    } = useSocket({
        path: SOCKET_PATH,
        withCredentials: true
    });

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
        behavior: "smooth"
        });
    }, [messages, isTyping]);

    return (
        <div className="flex flex-col h-screen max-w-3xl mx-auto">

            <div className="flex-1 overflow-y-auto p-4 bg-zinc-50">
                {messages.map((msg) => (
                    <Message
                        key={msg.id}
                        role={msg.role}
                        content={msg.content}
                    />
                ))}

                {isTyping && (
                    <div className="text-zinc-500 text-sm">
                        Converso is typing...
                    </div>
                )}

                <div ref={bottomRef} />
            </div>

            <TextInput onSend={sendMessage} />
        </div>
    );
}