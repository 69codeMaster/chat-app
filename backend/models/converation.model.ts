import mongoose from "mongoose";

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

type IConversation = {
  participents: mongoose.Schema.Types.ObjectId[];
  messages: mongoose.Types.ObjectId[];
};

const Conversation = mongoose.model<IConversation>(
  "Converation",
  conversationSchema
);

export default Conversation;
