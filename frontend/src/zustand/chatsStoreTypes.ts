import { IUser } from "@shared/modelTypes";

export type storeType = {
  selectedChat: Pick<IUser, "_id" | "fullName" | "username">;
  setSelectedChat: (chat: IUser) => void;
};
