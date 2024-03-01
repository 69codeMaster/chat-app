import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParse from "cookie-parser";

import authRoutes from "./routes/auth.routes.ts";
import messageRoutes from "./routes/message.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import connectToMongoDB from "./db/connectToDB.ts";

import { app, server } from "./socket/socket.ts";

dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParse());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
  connectToMongoDB();
  console.log("server running on port 5000");
});
