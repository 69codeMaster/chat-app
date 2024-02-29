import { IMessage, IUser } from "@shared/modelTypes";

export type storeType = {
  selectedChat: Pick<IUser, "_id" | "fullName" | "username" | "profilePic">;
  setSelectedChat: (chat: IUser) => void;
  messages: IMessage[];
  setMessages: (messages: IMessage[]) => void;
};
