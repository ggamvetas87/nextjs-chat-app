// components/Chat.tsx

"use client";

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

  return (
    <div className="flex flex-col h-[80vh] w-full max-w-md mx-auto border rounded p-4">
      <div className="flex-1 flex flex-col overflow-y-auto mb-2">
        {messages.map((msg) => (
          <Message key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {isTyping && <div className="text-gray-500 italic">Converso is typing...</div>}
      </div>
      <TextInput onSend={sendMessage} />
    </div>
  );
}