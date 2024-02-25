import mongoose from "mongoose";
import { IChat } from "../../shared/modelTypes";

const conversationSchema = new mongoose.Schema(
  {
    participents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model<IChat>("Converation", conversationSchema);

export default Conversation;
