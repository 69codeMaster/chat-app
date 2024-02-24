import { useState } from "react";
import { SignupRequest } from "./../../../shared/requestsType";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (signupData: SignupRequest["body"]) => {
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
      res.ok
        ? toast.success(`User ${signupData.username} was created`)
        : toast.error(data.message);
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
function validateSignupData(signupData: SignupRequest["body"]) {
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
