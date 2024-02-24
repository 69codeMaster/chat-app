import { useState } from "react";

const Signup = () => {
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <div className="form-control items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
        <h1 className="text-gray-300 text-3xl text-center font-semibold ">
          Sign Up
          <span className="text-info text-center"> ChatApp </span>
        </h1>
        <form className="pb-4">
          <div>
            <h1 className="label label-text text-sm"> Full name </h1>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-border h-10"></input>
          </div>

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

          <div>
            <h1 className="label label-text text-sm"> Confirm password </h1>
            <input
              type="text"
              placeholder="Renter password"
              className="w-full input input-border h-10"></input>
          </div>

          <div className="flex checkedbox-group">
            <label className="cursor-pointer label">
              <span className="mx-2">male</span>
              <input
                type="checkbox"
                data-gender={"female"}
                className="checkbox checkbox-info"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
            </label>

            <label className="cursor-pointer label">
              <span className="mx-2">female</span>
              <input
                type="checkbox"
                checked={gender === "female"}
                onChange={() => setGender("female")}
                className="checkbox checkbox-secondary"
              />
            </label>
          </div>

          <button className="mt-2 w-full btn btn-outline btn-info block text-xl">
            Sign Up
          </button>
        </form>

        <a
          href="#"
          className="text-sm text-gray-300text-start hover:underline hover:text-info inline-block">
          Already have an account?
        </a>
      </div>
    </div>
  );
};

export default Signup;
