// components/chat/ChatWidget.tsx

"use client";

import { useChatContext } from "@/context/chatContext";
import Bubble from "@/components/chat/Bubble";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatWidget() {
  const { chatStarted, startChat, closeChat } = useChatContext();

  return (
    <>
      {!chatStarted && (
        <Bubble onClick={startChat} />
      )}

      {chatStarted && (
        <ChatWindow onClose={closeChat} />
      )}
    </>
  );
}
