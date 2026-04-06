// components/TextInput.tsx

"use client";

import { useState } from "react";

type Props = {
  onSend: (msg: string) => void;
};

export default function TextInput({ onSend }: Props) {
  const [value, setValue] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) return;

    onSend(value);
    setValue("");
  };

  return (
    <form
      id="chat-form"
      onSubmit={submit}
      className="border-t p-3 flex gap-2 bg-white"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask something..."
        className="flex-1 border rounded-lg text-gray-700 px-3 py-2"
      />

      <button
        className="bg-blue-500 text-white px-4 rounded-lg"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}