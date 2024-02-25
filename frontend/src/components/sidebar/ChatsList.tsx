import ChatItem from "./ChatItem";
import useGetChats from "../../hooks/useGetChats";

const ChatsList = () => {
  const { loading, sideBarUsers } = useGetChats();
  return (
    <div className="form-control py-2 gap-1 overflow-auto">
      {sideBarUsers.map((user) => (
        <ChatItem key={user._id.toString()} userChat={user} />
      ))}
    </div>
  );
};

export default ChatsList;
