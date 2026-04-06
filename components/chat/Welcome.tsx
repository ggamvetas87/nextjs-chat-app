// components/chat/Welcome.tsx
"use client";

import Button from "@/components/interactions/Button";

type Prompt =
  | { type: "text"; value: string }
  | { type: "joke_category"; category: string };

type Props = {
  sendMessage: (content: string) => void;
  sendJokeCategory: (category: string) => void;
};

export default function Welcome({ sendMessage, sendJokeCategory }: Props) {
  const jokeCategories = [
    "animal",
    "career",
    "dev",
    "food",
    "movie",
    "science",
    "sport"
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center h-full text-zinc-600">

      <h2 className="text-2xl font-semibold mb-2">
        Welcome to Converso Chat 💬
      </h2>

      <p className="mb-6 text-sm">
        Ask me anything ... and I might respond 😂
      </p>

      <p className="text-xs text-zinc-500 mb-2">
        Or try a Chuck Norris joke category:
      </p>

      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {jokeCategories.map((cat) => (
          <Button
            key={cat}
            importance="secondary"
            onClick={() => sendJokeCategory(cat)}
            className="px-3 py-1 text-sm rounded-full border hover:bg-zinc-100"
          >
            {cat}
          </Button>
        ))}
      </div>

    </div>
  );
}
