import { storeType } from "./chatsStoreTypes";
import { create } from "zustand";

const useSelectedChat = create<storeType>()((set) => ({
  selectedChat: {
    _id: "",
    fullName: "",
    username: "",
  },

  setSelectedChat: (chat) => set(() => ({ selectedChat: chat })),
}));

export default useSelectedChat;
