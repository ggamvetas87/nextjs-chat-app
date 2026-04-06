// components/chat/Message.tsx
"use client";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Button from "@/components/interactions/Button";

type Props = {
  role: "user" | "assistant";
  content: string;
  options?: string[];
  onOptionClick?: (option: string) => void;
};

export default function Message({
  role,
  content,
  options,
  onOptionClick
}: Props) {

  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-3`}>
      <div className="max-w-[75%]">

        <div
          className={`
          rounded-xl px-4 py-3
          ${isUser ? "bg-blue-500 text-white" : "bg-zinc-100 text-zinc-900"}
          `}
        >
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* quick replies */}
        {!isUser && options && options.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            <p className="rounded-xl g-zinc-100 text-zinc-900 px-4 py-3">
              Do you want to read another joke?
              <br />Choose one of the categories:
            </p>
            {options.map((opt) => (
              <Button
                key={opt}
                importance="primary"
                onClick={() => onOptionClick?.(opt)}
                className="px-3 py-1 text-sm border rounded-full"
              >
                {opt}
              </Button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
