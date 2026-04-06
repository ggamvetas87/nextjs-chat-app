// components/chat/MessagesList.tsx
"use client";

import { useChatContext } from "@/context/chatContext";
import Welcome from "@/components/chat/Welcome";
import Message from "@/components/chat/Message";

export default function MessagesList() {
    const {messages, sendMessage, sendJokeCategory } = useChatContext();

    return messages.length === 0 ? (
        <Welcome 
            sendMessage={sendMessage}
            sendJokeCategory={sendJokeCategory}
        />
    ) : (
        messages.map((msg) => (
            <Message
                key={msg.id}
                role={msg.role}
                content={msg.content}
                options={msg.options}
                onOptionClick={sendJokeCategory}
            />
        ))
    )
}
