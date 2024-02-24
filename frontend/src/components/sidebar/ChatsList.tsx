import ChatItem from "./ChatItem";

const ChatsList = () => {
  return (
    <div className="form-control py-2 gap-1 overflow-auto">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
};

export default ChatsList;
