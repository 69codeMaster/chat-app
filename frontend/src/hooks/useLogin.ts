import { useState } from "react";
import toast from "react-hot-toast";

import { useCurrentUser } from "../context/currentUser";
import { LoginCredentials } from "../pages/login/LoginTypes";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useCurrentUser();
  const login = async ({ username, password }: LoginCredentials) => {
    if (username.trim() === "" || password.trim() === "") {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
      else {
        localStorage.setItem("current-user", JSON.stringify(data));
        setCurrentUser(data);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
