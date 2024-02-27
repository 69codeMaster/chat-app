import MessageInput from "./MessageInput";

import ChatHeader from "../UI/SideBar/ChatHeader";
import ChatBody from "./ChatBody";

const Chat = () => {
  return (
    <div className="form-control h-full w-full ">
      <ChatHeader />
      <ChatBody />
      <MessageInput />
    </div>
  );
};

export default Chat;
