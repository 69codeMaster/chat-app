import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import useSelectedChat from "@src/zustand/useSelectedChat";

const useGetMessages = () => {
  const [loading, setLoading] = useState<boolean>();
  const { selectedChat: reciever, messages, setMessages } = useSelectedChat();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/messages/${reciever?._id}`);
        const data = await res.json();
        if (data.error) {
          // throw new Error(data.error);
        }
        setMessages(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (reciever._id) getMessages();
  }, [reciever]);

  return { messages, loading };
};

export default useGetMessages;
