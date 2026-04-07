// components/chat/MessagesList.tsx
"use client";

import { useChatContext } from "@/context/chatContext";
import Welcome from "@/components/chat/Welcome";
import Message from "@/components/chat/Message";
import { QuickRepliesType } from "@/types/socket";

export default function MessagesList() {
    const {messages, sendJokeCategory } = useChatContext();

    return messages.length === 0 ? (
        <Welcome sendJokeCategory={sendJokeCategory} />
    ) : (
        messages.map(({ id, role, content, options }) => (
            <Message
                key={id}
                data-test-id={`message-${id}`}
                role={role}
                content={content}
                options={options as unknown as QuickRepliesType}
                onOptionClick={sendJokeCategory}
            />
        ))
    )
}
