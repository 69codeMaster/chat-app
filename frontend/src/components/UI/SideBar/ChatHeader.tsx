import useSelectedChat from "@src/zustand/useSelectedChat";

const ChatHeader = () => {
  const { selectedChat } = useSelectedChat();

  return (
    <div>
      <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-2">
        <span className="label-text text-lg">
          To: {" " + selectedChat.username}
        </span>
        <span className="text-gray-900 font-bold text-xl">{}</span>
      </div>
    </div>
  );
};

export default ChatHeader;
