// server/lib/mockAI.ts

export function getMockResponse(message: string) {
  const responses = [
    "Interesting question!",
    "Let me think about that.",
    "Here's a suggestion for you.",
    "I like your point.",
    "Could you clarify that?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
