import Chat from "./Chat";
import { TiMessages } from "react-icons/ti";
import { useCurrentUser } from "../../context/currentUser";

const MessageContainer = () => {
  const chatSelected = true;

  return (
    <div className="md:min-w-[450px] form-control">
      {!chatSelected ? <Default /> : <Chat />}
    </div>
  );
};

const Default = () => {
  return (
    <div className="w-full h-full text-center text-white form-control items-center justify-center gap-1">
      <h1 className="text-lg">Welcome 👋 currentUser ❄️</h1>
      <p className="text-xl">Select a chat to start messaging </p>
      <TiMessages size={60} />
    </div>
  );
};
export default MessageContainer;
