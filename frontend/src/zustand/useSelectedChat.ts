import { storeType } from "./chatsStoreTypes";
import { create } from "zustand";

const useSelectedChat = create<storeType>()((set) => ({
  selectedChat: {
    _id: "",
    fullName: "",
    username: "",
    profilePic: "",
  },
  setSelectedChat: (selectedChat) => set(() => ({ selectedChat })),
  messages: [],
  setMessages: (messages) => set(() => ({ messages })),
}));

export default useSelectedChat;
