import { storeType } from "./chatsStoreTypes";
import { create } from "zustand";

const useSelectedChat = create<storeType>((set) => ({
  selectedChat: {
    _id: "",
    messages: [],
    participents: [],
  },
  setSelectedChat: (chat: storeType) => set(chat),
}));

export default useSelectedChat;
