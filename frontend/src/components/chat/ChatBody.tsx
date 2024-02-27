import useGetMessages from "@src/hooks/useGetMessages";
import Message from "./Message";

const ChatBody = () => {
  const { loading, messages } = useGetMessages();

  return (
    <div className="flex-1 px-4 pt-2">
      {loading ? (
        <span className="loading loading-dots loading-md" />
      ) : (
        messages.map((message) => {
          return <Message {...message} />;
        })
      )}
    </div>
  );
};

export default ChatBody;
