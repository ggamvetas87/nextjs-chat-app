// components/chat/Welcome.tsx

"use client";

import Button from "@/components/interactions/Button";

type Props = {
  onSelectPrompt: (prompt: string) => void;
};

export default function Welcome({ onSelectPrompt }: Props) {
  const prompts = [
    {
        text: "🎬 Suggest a good movie",
        value: "Suggest a good movie"
    },
    {
        text: "🚀 Top sci-fi films",
        value: "Top sci-fi films"
    },
    {
        text: "📺 Best Netflix series",
        value: "Best Netflix series"
    },
    {
        text: "😂 Recommend a comedy movie",
        value: "Recommend a comedy movie"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center h-full text-zinc-600">

      <h2 className="text-2xl font-semibold mb-2">
        Welcome to Converso Chat 💬
      </h2>

      <p className="mb-6 text-sm">
        Ask me anything about movies and series.
      </p>

      <div className="grid gap-2 w-full max-w-md">
        {prompts.map((prompt) => (
          <Button
            key={prompt.value}
            importance="secondary"
            onClick={() => onSelectPrompt(prompt.value)}
            className="border rounded-lg px-4 py-2 hover:bg-zinc-100 text-left"
          >
            {prompt.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
