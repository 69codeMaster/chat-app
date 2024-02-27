import SearchInput from "./SearchInput";
import ChatsList from "./ChatsList";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="form-control border-r border-slate-500 p-4">
      <SearchInput />
      <div className="divider text-3xl"></div>
      <ChatsList />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
