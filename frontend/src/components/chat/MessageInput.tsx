import { useState } from "react";
import { BsSend } from "react-icons/bs";

import useSendMessage from "@hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={(e) => handleSend(e)}>
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 pe-3"
          disabled={loading}>
          {loading ? (
            <span className="loading loading-dots loading-md display " />
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
