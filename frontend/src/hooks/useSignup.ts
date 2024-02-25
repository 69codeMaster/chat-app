import { useState } from "react";
import { User } from "./../../../shared/requestsType";
import { useCurrentUser } from "../context/currentUser";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useCurrentUser();
  const signup = async (signupData: User) => {
    const success = validateSignupData(signupData);
    let ok = false;
    if (!success) return false;
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await res.json();
      ok = res.ok;
      if (res.ok) {
        localStorage.setItem("current-user", JSON.stringify(data));
        setCurrentUser(data);
        toast.success(`User ${signupData.username} was created`);
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    return ok;
  };

  return { loading, signup };
};
export default useSignup;

function validateSignupData(signupData: User) {
  let isValid = Object.values(signupData).every((value) => value.trim() !== "");

  if (!isValid) {
    toast.error("Please fill all fields");
    return false;
  }

  if (signupData.password !== signupData.passwordConfirmation) {
    toast.error("Password confirmation doesn't match");
    return false;
  }

  return true;
}
