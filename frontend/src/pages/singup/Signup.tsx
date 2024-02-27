import { useState } from "react";

import useSignup from "../../hooks/useSignup";
import { IUser as inputFields } from "@shared/modelTypes";

import FormHeader from "@src/components/UI/FormHeader";
import FormButton from "@src/components/UI/FormButton";
import FormEntry from "@src/components/UI/FormEntry";
import FormLink from "@src/components/UI/FormLink";
import FormCheckBox from "@src/components/UI/FormCheckBox";

const Signup = () => {
  const emptyForm: inputFields = {
    _id: "",
    fullName: "",
    gender: "",
    password: "",
    username: "",
    passwordConfirmation: "",
    profilePic: "",
  };
  const [formData, setFormData] = useState<inputFields>(emptyForm);

  const { loading, signup } = useSignup();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = await signup(formData);
    if (ok) setFormData(emptyForm);
  };

  const handleChange = (field: keyof inputFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="form-control py-2 min-w-96 mx-auto">
      <div className="px-6 py-2 h-full w-full bg-gray-500 text-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
        <FormHeader title="Signup" />
        <form className="pb-2" onSubmit={(event) => handleSubmit(event)}>
          <FormEntry
            title="Full name"
            name="fullName"
            onChange={handleChange}
            value={formData?.fullName}
            placeholder="Enter full name"
          />

          <FormEntry
            title="Username"
            name="username"
            onChange={handleChange}
            value={formData?.username}
            placeholder="Enter username"
          />

          <FormEntry
            title="password"
            name="password"
            onChange={handleChange}
            value={formData?.password}
            placeholder="enter password"
          />

          <FormEntry
            title="password confirmation"
            name="passwordConfirmation"
            onChange={handleChange}
            value={formData?.passwordConfirmation}
            placeholder="Renter password"
          />

          <div className="flex checkedbox-group">
            <FormCheckBox
              name="male"
              color="info"
              onChange={() => handleChange("gender", "male")}
              checked={formData?.gender === "male"}
            />

            <FormCheckBox
              name="female"
              color="secondary"
              onChange={() => handleChange("gender", "female")}
              checked={formData?.gender === "female"}
            />
          </div>

          {loading ? (
            <div className="mt-2 mx-auto btn loading loading-spinner block text-xl" />
          ) : (
            <FormButton>Signup</FormButton>
          )}
          <FormLink to="/login" text="Already have an account?" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
