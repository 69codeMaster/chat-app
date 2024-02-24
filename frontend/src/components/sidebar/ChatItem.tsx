const ChatItem = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 cursor-pointer p-2 py-1">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex grow gap-3 justify-between items-center">
          <p className="font-bold text-lg text-gray-200"> name </p>
          <span className="text-xl">😈</span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default ChatItem;
