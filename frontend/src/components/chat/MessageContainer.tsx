import Chat from "./Chat";
import ChatSkeleton from "../UI/Skeletons/ChatSkeleton";
import useSelectedChat from "@src/zustand/useSelectedChat";

const MessageContainer = () => {
  const { selectedChat } = useSelectedChat();

  return (
    <div className="md:min-w-[450px] form-control">
      {!selectedChat._id ? <ChatSkeleton /> : <Chat />}
    </div>
  );
};

export default MessageContainer;
