import { IUser } from "@shared/modelTypes";
import useSelectedChat from "@src/zustand/useSelectedChat";

type ChatItemProps = {
  userChat: IUser;
};

const ChatItem = ({ userChat }: ChatItemProps) => {
  const { selectedChat, setSelectedChat } = useSelectedChat();
  return (
    <div onClick={() => setSelectedChat(userChat)}>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 cursor-pointer p-2 py-1 ${
          selectedChat._id === userChat._id ? "bg-sky-500" : ""
        } `}>
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src={userChat.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex grow gap-3 justify-between items-center">
          <p className="font-bold text-lg text-gray-200">{userChat.username}</p>
          <span className="text-xl">😈</span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default ChatItem;
