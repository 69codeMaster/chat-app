import { useRef } from "react";

import useGetMessages from "@src/hooks/useGetMessages";
import Message from "./Message";

const ChatBody = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef(null);

  return (
    <div className="flex-1 px-4 pt-2 overflow-auto">
      {loading ? (
        <span className="loading loading-dots loading-md" />
      ) : (
        messages.map((message, index) => {
          if (index !== messages.length - 1) return <Message {...message} />;

          return <Message {...message} ref={lastMessageRef} />;
        })
      )}
    </div>
  );
};

export default ChatBody;
