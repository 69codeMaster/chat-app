import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginCredentials } from "./LoginTypes";
import useLogin from "../../hooks/useLogin";

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
        <h1 className="text-gray-300 text-3xl text-center font-semibold ">
          Login
          <span className="text-info text-center"> ChatApp </span>
        </h1>
        <form onSubmit={(e) => submitLogin(e)}>
          <div>
            <h1 className="label label-text text-sm"> Username </h1>
            <input
              type="text"
              value={loginCredential.username}
              onChange={({ target }) => handleChange("username", target.value)}
              placeholder="Enter username"
              className="w-full input input-border h-10 text-white"></input>
          </div>

          <div>
            <h1 className="label label-text text-sm"> Password </h1>
            <input
              type="text"
              value={loginCredential.password}
              onChange={({ target }) => handleChange("password", target.value)}
              placeholder="Enter password"
              className="w-full input input-border h-10  text-white"></input>
          </div>

          {loading ? (
            <div className="mt-2 mx-auto btn loading loading-spinner block text-xl" />
          ) : (
            <button
              type="submit"
              className="mt-6 w-full btn btn-outline btn-info block text-xl">
              Login
            </button>
          )}

          <Link
            to="/signup"
            className="text-sm text-gray-300text-start hover:underline hover:text-blue-700 inline-block mt-2">
            don't have an account yet?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
