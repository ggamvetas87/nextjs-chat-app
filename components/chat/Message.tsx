// components/chat/Message.tsx
"use client";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import QuickReplies from "@/components/interactions/QuickReplies";
import { QuickRepliesType } from "@/types/socket";

type MessageProps = {
  role: "user" | "assistant";
  content: string;
  options?: QuickRepliesType;
  onOptionClick?: (option: string) => void;
};

export default function Message({
  role,
  content,
  options,
  onOptionClick
}: MessageProps) {

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
        {!isUser && options && (
          <QuickReplies options={options} onOptionClick={onOptionClick} />
        )}

      </div>
    </div>
  );
}
