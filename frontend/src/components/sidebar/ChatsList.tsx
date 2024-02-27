import ChatItem from "./ChatItem";
import useGetChats from "../../hooks/useGetChats.ts";

const ChatsList = () => {
  const { loading, sideBarUsers } = useGetChats();
  return (
    <div className="flex flex-col pr-5 gap-1 overflow-auto">
      {sideBarUsers.map((user) => (
        <ChatItem key={user._id.toString()} userChat={user} />
      ))}
    </div>
  );
};

export default ChatsList;
