type props = {
  profilcePic: string;
};
const Avatar = ({ profilcePic }: props) => {
  return (
    <div className="avatar online">
      <div className="w-10 rounded-full">
        <img src={profilcePic} alt="user avatar" />
      </div>
    </div>
  );
};

export default Avatar;
