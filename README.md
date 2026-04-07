# Converso Mock Chat 💬

Converso Mock Chat is a modern real-time chat web application built with **Next.js, React, and WebSockets**.  
It demonstrates a clean chat UI architecture, real-time communication using **Socket.io**, and integration with external APIs.

The project simulates an AI-like conversational assistant that can respond with mock answers, suggest prompts, and fetch fun content such as **Chuck Norris jokes** from a public API.

This project was built as a **portfolio project** to demonstrate frontend architecture, real-time communication, and modern React patterns.

---

# 🚀 Features

## 💬 Real-time Chat
- WebSocket communication using **Socket.io**
- Instant message delivery
- Typing indicator simulation

## 🤖 AI-like Assistant
- Mock AI responses
- Suggested follow-up questions
- Quick reply buttons

## 😂 Chuck Norris Joke Integration
- Fetches joke categories
- Users can select categories directly from the chat
- The bot returns a random joke using the **Chuck Norris API**

## 🎨 Modern Chat UI
- Clean responsive interface
- Mobile fullscreen chat
- Desktop floating chat window
- Markdown message rendering with syntax highlighting

## 🧠 Smart UX
- Suggested prompts for new conversations
- Randomized typing messages (e.g. *Bot is typing... / Bot is thinking...*)
- Quick reply buttons after jokes

---

# 🧱 Tech Stack

## Frontend
- **Next.js**
- **React**
- **TypeScript**
- **TailwindCSS**

## Real-time Communication
- **Socket.io**

## Rendering & Formatting
- **React Markdown**
- **rehype-highlight**
- **highlight.js**

## External APIs
- **Chuck Norris API**  
https://api.chucknorris.io

---

# 🏗 Architecture

The project follows a **modular architecture** with separation between UI, state management, and real-time communication.

## Core Layers

### UI Components
Reusable UI components such as:

- `ChatWindow`
- `Message`
- `TypingIndicator`
- `Welcome`
- `Button`

### State Management
Chat state is handled through a custom **React Context**:

```bash
ChatProvider
  |--- useSocket (WebSocket logic)
```

This centralizes:

- messages
- connection state
- typing indicator
- chat lifecycle

### useSocket


Responsibilities:

- initializing the WebSocket connection
- sending messages
- receiving responses
- handling typing events

### Server API

The WebSocket server runs inside a Next.js API route

```bash
/pages/api/socket/setup.ts
```


Responsibilities:

- manage socket connections
- simulate AI responses
- call the Chuck Norris API
- emit messages to clients

---

# 📡 WebSocket Event Flow

Client → Server (EV_OUTGOING)

Server → Client (EV_TYPING, EV_INCOMING)


Example payload for Chuck Norris joke request:

```json
{
  "type": "joke_category",
  "category": "dev"
}
```


### WebSocket Layer

A custom React hook handles the socket lifecycle

# 📂 Project Structure

```bash
/components
  |--- /chat
  |--- Welcome.tsx
  |--- TypingIndicator.tsx
  |--- Message.tsx

/context
  |--- chatContext.tsx

/hooks
  |--- useSocket.tsx

/pages/api/socket
  |--- setup.ts

/server
  |--- /lib
    |--- mockAI.ts
    |--- chuckNorris.ts
```

# ⚙️ Installation

```bash
# Install dependencies
yarn

# Run the development server
yarn dev

# Build the project
yarn build

# Build the dockerized project based on Dockerfile
yarn build-podman

# Run the container
yarn run-podman

# Open in browser
http://localhost:3000
```

# 🎯 Key Concepts Demonstrated

This project demonstrates several important frontend engineering concepts:

- Real-time communication with WebSockets
- Custom React hooks
- Context-based state management
- Component-driven UI architecture
- API integration
- Responsive UI design
- TypeScript typing patterns

# 🔮 Possible Improvements

### Future enhancements could include:

- Streaming AI responses
- Integration with OpenAI or other LLM providers
- Message persistence with a database
- Authentication
- Multi-user chat rooms
- Chat history storage
- Message reactions

# 👨‍💻 Author

Yiannis Gamvetas
Frontend / Senior Front-End Developer

# 📄 License

MIT License