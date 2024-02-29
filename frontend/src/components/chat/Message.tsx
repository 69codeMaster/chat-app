import { MdOutlineDone } from "react-icons/md";

import { IMessage } from "@shared/modelTypes";
import { useCurrentUser } from "@src/context/currentUser";
import useSelectedChat from "@src/zustand/useSelectedChat";
import { extractTime } from "@src/utils/formatTime";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

type props = Omit<IMessage, "_id">;
type MessageRef = HTMLDivElement;

const Message = forwardRef<MessageRef, props>(
  ({ senderId, message, createdAt }, ref) => {
    const { currentUser } = useCurrentUser();
    const { selectedChat } = useSelectedChat();
    const scrollToRef = useRef<MessageRef>(null);

    const messageSide =
      senderId !== currentUser?._id ? "chat-start" : "chat-end";
    const profilePic =
      senderId! == currentUser?._id
        ? currentUser.profilePic
        : selectedChat.profilePic;

    useImperativeHandle(ref, () => {
      return {
        scrollIntoView: (scrollOptions) =>
          scrollToRef.current?.scrollIntoView(scrollOptions),
      } as HTMLDivElement;
    });

    useEffect(() => {
      scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
      <div className={`chat ${messageSide}`} ref={scrollToRef}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>

        <div className="chat-bubble bg-blue-500 text-lg pb-2 text-white">
          {message}
        </div>
        <div className="chat-footer opacity-50">
          <MdOutlineDone className="inline mr-1" />
          <time className="chat-footer text-xs">{extractTime(createdAt)}</time>
        </div>
      </div>
    );
  }
);

export default Message;
