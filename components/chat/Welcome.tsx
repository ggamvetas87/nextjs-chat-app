// components/chat/Welcome.tsx
"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "@/components/interactions/LoadingAnimation";
import QuickReplies from "@/components/interactions/QuickReplies";
import { getJokeCategories } from "@/server/lib/chuckNorris";

type WelcomeProps = {
  sendJokeCategory: (category: string) => void;
};

export default function Welcome({ sendJokeCategory }: WelcomeProps) {
  const [jokeCategories, setJokeCategories] = useState<string[]>([]);
  const [options, setOptions] = useState<{ id: string; values: string[] } | undefined>();

  useEffect(() => {
    // Fetch joke categories on mount
    getJokeCategories(8).then(categories => {
      setJokeCategories(categories);
      setOptions({ 
        id: Date.now().toString(),
        values: categories
      });
    });
  }, []);

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

      {jokeCategories.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className="flex flex-wrap justify-center gap-2 max-w-md">
          <QuickReplies
            hideText={true}
            options={options} 
            onOptionClick={sendJokeCategory}
          />
        </div>
      )}
    </div>
  );
}
