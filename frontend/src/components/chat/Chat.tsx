import Message from "./Message";
import MessageInput from "./MessageInput";

import {} from "@hooks/useGetMessages";
const Chat = () => {
  return (
    <div className="form-control h-full w-full ">
      <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-2">
        <span className="label-text text-lg">To:</span>
        <span className="text-gray-900 font-bold text-xl">{}</span>
      </div>
      <div className="flex-1 px-4 pt-2">
        <Message />
        <Message />
        <Message />
      </div>
      <MessageInput />
    </div>
  );
};

export default Chat;
