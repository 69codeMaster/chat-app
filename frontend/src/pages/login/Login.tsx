const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
        <h1 className="text-gray-300 text-3xl text-center font-semibold ">
          Login
          <span className="text-info text-center"> ChatApp </span>
        </h1>
        <form>
          <div>
            <h1 className="label label-text text-sm"> Username </h1>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-border h-10"></input>
          </div>

          <div>
            <h1 className="label label-text text-sm"> Password </h1>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-border h-10"></input>
          </div>
          <a
            href="#"
            className="text-sm text-gray-300text-start hover:underline hover:text-blue-700 inline-block mt-2">
            don't have an account yet?
          </a>

          <button className="mt-2 w-full btn btn-outline btn-info block text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
