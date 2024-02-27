import { IUser } from "@shared/modelTypes";
import useSelectedChat from "@src/zustand/useSelectedChat";
import Avatar from "../UI/SideBar/Avatar";

type ChatItemProps = {
  userChat: IUser;
};

const ChatItem = ({ userChat }: ChatItemProps) => {
  const { selectedChat, setSelectedChat } = useSelectedChat();
  const isSelected = selectedChat._id === userChat._id;
  return (
    <div
      onClick={() => setSelectedChat(userChat)}
      className={`flex gap-2 items-center cursor-pointer p-2 py-1 ${
        isSelected ? "bg-sky-500" : "hover:bg-gray-700"
      }`}>
      <Avatar profilcePic={userChat.profilePic} />
      <div className="flex grow gap-3 justify-between items-center">
        <p className="font-bold text-lg text-gray-200">{userChat.username}</p>
        <span className="text-xl">😈</span>
      </div>
    </div>
  );
};

export default ChatItem;
