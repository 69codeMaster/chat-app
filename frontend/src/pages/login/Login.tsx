import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginCredentials } from "./LoginTypes";
import useLogin from "../../hooks/useLogin";
import FormButton from "@src/components/UI/FormButton";
import FormEntry from "@src/components/UI/FormEntry";
import FormLink from "@src/components/UI/FormLink";
import FormHeader from "@src/components/UI/FormHeader";

const Login = () => {
  const [loginCredential, setLoginCredential] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const submitLogin = async (e: any) => {
    e.preventDefault();
    await login(loginCredential);
  };

  const handleChange = (field: keyof LoginCredentials, value: string) => {
    setLoginCredential((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
        <FormHeader title="Login" />
        <form className="form-control gap-2" onSubmit={(e) => submitLogin(e)}>
          <FormEntry
            title="Username"
            name="username"
            onChange={handleChange}
            value={loginCredential?.username}
            placeholder="Enter username"
          />

          <FormEntry
            title="password"
            name="password"
            onChange={handleChange}
            value={loginCredential?.password}
            placeholder="enter password"
          />

          {loading ? (
            <div className="mt-2 mx-auto btn loading loading-spinner block text-xl" />
          ) : (
            <FormButton>Login</FormButton>
          )}

          <FormLink to="/signup" text="don't have an account yet?" />
        </form>
      </div>
    </div>
  );
};

export default Login;
