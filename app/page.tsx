// app/page.tsx

import ChatWidget from "@/components/chat/ChatWidget";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl p-10">
          Converso - AI Mock Chatbot
        </h1>
        <p className="text-lg text-gray-600">
          Click the chat bubble to start a conversation with our AI Mock chatbot!
        </p>
      </div>
      <ChatWidget />
    </main>
  );
}
