// pages/api/socket/setup.ts

import type { NextApiRequest } from "next";
import type { NextApiResponseServerIO } from "@/types/socket";
import { Server as SocketIOServer } from "socket.io";
import { getMockResponse } from "@/server/lib/mockAI";
import {
    SOCKET_PATH,
    EV_CONNECT,
    EV_DISCONNECT,
    EV_TYPING,
    EV_INCOMING,
    EV_OUTGOING
} from "@/libs/constants";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.io server...");

    const io = new SocketIOServer(res.socket.server, {
      path: SOCKET_PATH,
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });

    res.socket.server.io = io;

    io.on(EV_CONNECT, socket => {
      console.log("Client connected:", socket.id);

      socket.on(EV_OUTGOING, (msg: string) => {
        socket.emit(EV_TYPING);

        setTimeout(() => {
          const response = getMockResponse(msg);

          socket.emit(EV_INCOMING, {
            id: Date.now().toString(),
            role: "assistant",
            content: response
          });
        }, 1000);
      });

      socket.on(EV_DISCONNECT, () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  } else {
    console.log("Socket already initialized");
  }

  res.end();
}
