import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="mt-auto" onClick={handleLogout}>
      {loading ? (
        <button className="loading loading-spinner" />
      ) : (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
      )}
    </div>
  );
};
export default LogoutButton;
