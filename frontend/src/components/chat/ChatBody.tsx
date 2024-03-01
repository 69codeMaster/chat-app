import { useEffect, useRef } from "react";

import useGetMessages from "@src/hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../UI/Skeletons/MessageSkeleton";

const ChatBody = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 pt-2 overflow-auto">
      {loading
        ? Array(3).map((_, idx) => <MessageSkeleton key={idx} />)
        : messages.map((message, index) => {
            if (index !== messages.length - 1)
              return <Message key={message._id} {...message} />;

            return (
              <Message key={message._id} {...message} ref={lastMessageRef} />
            );
          })}
    </div>
  );
};

export default ChatBody;
