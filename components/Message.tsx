type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function Message({ role, content }: MessageProps) {
  return (
    <div className={`my-2 p-2 rounded-md max-w-xs ${role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}>
      {content}
    </div>
  );
}
