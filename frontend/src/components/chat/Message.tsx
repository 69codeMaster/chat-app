import { MdOutlineDone } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>

      <div className="chat-bubble bg-blue-500 text-lg pb-2 text-white">
        You were the Chosen One!
      </div>
      <div className="chat-footer opacity-50">
        <MdOutlineDone className="inline mr-1" />
        <time className="chat-footer text-xs">12:45</time>
      </div>
    </div>
  );
};

export default Message;
