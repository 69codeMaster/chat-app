import mongoose from "mongoose";
import User from "./user.model.js";

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

type IMessage = {
  senderId: mongoose.Schema.Types.ObjectId;
  receiverId: mongoose.Schema.Types.ObjectId;
  message: string;
};

const Message = mongoose.model<IMessage>("Message", messageSchema);

export default Message;
