type props = {
  profilcePic: string;
  isOnline: boolean;
};

const Avatar = ({ profilcePic, isOnline }: props) => {
  return (
    <div className={`avatar ${isOnline ? "online" : "offline"}`}>
      <div className="w-10 rounded-full">
        <img src={profilcePic} alt="user avatar" />
      </div>
    </div>
  );
};

export default Avatar;
