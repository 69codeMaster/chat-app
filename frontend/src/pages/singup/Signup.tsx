import { useState } from "react";
import { Link } from "react-router-dom";

import useSignup from "../../hooks/useSignup";
import { SignupRequest } from "../../../../shared/requestsType";

type inputFields = SignupRequest["body"];

const Signup = () => {
  const emptyForm: inputFields = {
    fullName: "",
    gender: "",
    password: "",
    username: "",
    passwordConfirmation: "",
  };
  const [formData, setFormData] = useState<inputFields>(emptyForm);

  const { loading, signup } = useSignup();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = await signup(formData!);
    if (ok) setFormData(emptyForm);
  };

  const handleChange = (field: keyof inputFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="form-control items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-gray-500 text-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
        <h1 className="text-gray-300 text-3xl text-center font-semibold ">
          Sign Up
          <span className="text-info text-center"> ChatApp </span>
        </h1>
        <form className="pb-4" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <h1 className="label label-text text-sm"> Full name </h1>
            <input
              onChange={({ target }) => handleChange("fullName", target.value)}
              value={formData?.fullName}
              type="text"
              placeholder="Enter full name"
              className="w-full input input-border h-10"></input>
          </div>

          <div>
            <h1 className="label label-text text-sm"> Username </h1>
            <input
              onChange={({ target }) => handleChange("username", target.value)}
              value={formData?.username}
              type="text"
              placeholder="Enter username"
              className="w-full input input-border h-10"></input>
          </div>

          <div>
            <h1 className="label label-text text-sm"> Password </h1>
            <input
              name="password"
              onChange={({ target }) => handleChange("password", target.value)}
              value={formData?.password}
              type="text"
              placeholder="Enter password"
              className="w-full input input-border h-10"></input>
          </div>

          <div>
            <h1 className="label label-text text-sm"> Confirm password </h1>
            <input
              onChange={({ target }) =>
                handleChange("passwordConfirmation", target.value)
              }
              value={formData?.passwordConfirmation}
              type="text"
              placeholder="Renter password"
              className="w-full input input-border h-10"></input>
          </div>

          <div className="flex checkedbox-group">
            <label className="cursor-pointer label">
              <span className="mx-2">male</span>
              <input
                type="checkbox"
                className="checkbox checkbox-info"
                checked={formData?.gender === "male"}
                onChange={() => handleChange("gender", "male")}
              />
            </label>

            <label className="cursor-pointer label">
              <span className="mx-2">female</span>
              <input
                type="checkbox"
                checked={formData?.gender === "female"}
                onChange={() => handleChange("gender", "female")}
                className="checkbox checkbox-secondary"
              />
            </label>
          </div>

          <button
            className="mt-2 w-full btn btn-outline btn-info block text-xl"
            disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <Link
          to="/login"
          className="text-sm text-gray-300text-start hover:underline hover:text-info inline-block">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
