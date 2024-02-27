import mongoose from "mongoose";
import User from "./user.model.js";
import { IMessage } from "@shared/modelTypes";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    receiverId: {
      type: mongoose.Types.ObjectId,
      ref: User,
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model<IMessage>("Message", messageSchema);

export default Message;
