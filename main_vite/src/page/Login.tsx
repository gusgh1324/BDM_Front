import React from "react";
import LoginLayout from "../components/layout/LoginLayout";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import { useLogin } from "../hooks/useLogin";
import { useLoginStore } from "../Store";

const Login = () => {
  const { email, password } = useLoginStore();
  const login = useLogin();
  const googleLogin = useGoogleAuth();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <LoginLayout handleLogin={handleLogin} handleGoogleLogin={googleLogin} />
  );
};

export default Login;
