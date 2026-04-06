import { Server as HTTPServer } from "node:http";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: {
    server: HTTPServer & {
      io?: SocketIOServer;
    };
  };
};

export type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type SocketIOProps = {
  host?: string;
  path: string;
  withCredentials?: boolean;
};
