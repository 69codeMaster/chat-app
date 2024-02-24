import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/chat/MessageContainer";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
