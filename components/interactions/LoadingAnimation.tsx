// components/chat/LoadingAnimation.tsx
"use client";

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    </div>
  );
}
