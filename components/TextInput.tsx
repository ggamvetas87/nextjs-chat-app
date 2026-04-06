"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
};

export default function TextInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Type a message..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Send
      </button>
    </form>
  );
}
