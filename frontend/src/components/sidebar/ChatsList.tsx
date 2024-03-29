import ChatItem from "./ChatItem";
import useGetChats from "@hooks/useGetChats.ts";

const ChatsList = () => {
  const { sideBarUsers } = useGetChats();
  return (
    <div className="flex flex-col pr-5 gap-1 -">
      {sideBarUsers.map((user, index) => (
        <div key={index} className="">
          <ChatItem userChat={user} />
          {index !== sideBarUsers.length - 1 && (
            <div className="divider my-0 py-0 h-1" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatsList;
