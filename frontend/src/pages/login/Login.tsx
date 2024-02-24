import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e: any) => {
    e.preventDefault();
    console.log("username and password : ", username, password);
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
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              placeholder="Enter username"
              className="w-full input input-border h-10 text-white"></input>
          </div>

          <div>
            <h1 className="label label-text text-sm"> Password </h1>
            <input
              type="text"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Enter password"
              className="w-full input input-border h-10  text-white"></input>
          </div>
          <Link
            to="/signup"
            className="text-sm text-gray-300text-start hover:underline hover:text-blue-700 inline-block mt-2">
            don't have an account yet?
          </Link>

          <button
            type="submit"
            className="mt-2 w-full btn btn-outline btn-info block text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
