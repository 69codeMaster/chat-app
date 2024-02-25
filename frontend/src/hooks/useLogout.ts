import { useState } from "react";
import { useCurrentUser } from "../context/currentUser";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useCurrentUser();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
      else {
        localStorage.removeItem("current-user");
        setCurrentUser(null);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
