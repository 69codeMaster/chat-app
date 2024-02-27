import { TiMessages } from "react-icons/ti";
import { useCurrentUser } from "@context/currentUser";

const ChatSkeleton = () => {
  const { currentUser } = useCurrentUser();
  return (
    <div className="w-full h-full text-center text-white form-control items-center justify-center gap-1">
      <h1 className="text-lg">Welcome 👋 {currentUser?.username} ❄️</h1>
      <p className="text-xl">Select a chat to start messaging </p>
      <TiMessages size={60} />
    </div>
  );
};

export default ChatSkeleton;
