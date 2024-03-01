import { Server } from "socket.io";
import http from "http";
import express from "express";

import SocketEvents from "@shared/SocketEvents.ts";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

type UserSocketRecord = Record<string, string>;
const usersSocketMap: UserSocketRecord = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId as string;

  if (userId) usersSocketMap[userId] = socket.id;

  io.emit(SocketEvents.GET_ONLINE_USERS, Object.keys(usersSocketMap));

  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    delete usersSocketMap[userId];
    io.emit(SocketEvents.GET_ONLINE_USERS, Object.keys(usersSocketMap));
  });
});

export { app, io, server };
