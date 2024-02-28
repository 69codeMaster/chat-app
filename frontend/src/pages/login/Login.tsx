import { useState } from "react";
import { LoginCredentials } from "./LoginTypes";

import useLogin from "@hooks/useLogin";

import Card from "@components/UI/Card";
import FormButton from "@components/UI/Form/FormButton";
import FormEntry from "@components/UI/Form/FormEntry";
import FormLink from "@components/UI/Form/FormLink";
import FormHeader from "@components/UI/Form/FormHeader";

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
    <Card>
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
          type="password"
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
    </Card>
  );
};

export default Login;
