import { useState } from "react";
import { inputFields } from "./singupTypes";
import useSignup from "@hooks/useSignup";

import Card from "@src/components/UI/Card";

import FormHeader from "@src/components/UI/Form/FormHeader";
import FormButton from "@src/components/UI/Form/FormButton";
import FormEntry from "@src/components/UI/Form/FormEntry";
import FormLink from "@src/components/UI/Form/FormLink";
import FormCheckBox from "@src/components/UI/Form/FormCheckBox";

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
    const ok = await signup(formData);
    if (ok) setFormData(emptyForm);
  };

  const handleChange = (field: keyof inputFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
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
          type="password"
          onChange={handleChange}
          value={formData?.password}
          placeholder="enter password"
        />

        <FormEntry
          title="password confirmation"
          name="passwordConfirmation"
          type="password"
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
    </Card>
  );
};

export default Signup;
