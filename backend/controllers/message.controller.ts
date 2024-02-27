import { Response, Request } from "express";
import { GetMessagesRequest, SendMessageRequest } from "requestsType";
import Message from "../models/message.model.ts";
import Conversation from "../models/converation.model.ts";

export const sendMessage = async (expressReq: Request, res: Response) => {
  try {
    const req = expressReq as SendMessageRequest;

    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    const message = req.body.message;
    let conversation = await Conversation.findOne({
      participents: { $all: [senderId, receiverId] },
    });

    if (!conversation)
      conversation = new Conversation({
        participents: [senderId, receiverId],
      });

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);

    await Promise.all([newMessage.save(), conversation.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "shit happend" });
  }
};

export const getMessage = async (expressReq: Request, res: Response) => {
  try {
    const req = expressReq as GetMessagesRequest;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participents: { $all: [senderId, receiverId] },
    }).populate("messages");

    const messages = conversation?.messages ?? [];

    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
