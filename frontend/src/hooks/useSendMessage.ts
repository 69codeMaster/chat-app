import { useState } from "react";
import toast from "react-hot-toast";
import useSelectedChat from "@src/zustand/useSelectedChat";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedChat } = useSelectedChat();
  const sendMessage = async (message: string) => {
    setLoading(true);
    try {
      if (message.trim() === "" || selectedChat._id === "") return;

      const res = await fetch(`/api/messages/send/${selectedChat._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
