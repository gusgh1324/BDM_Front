import React from "react";
import RegisterLayout from "../components/layout/RegisterLayout";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import { useRegister } from "../hooks/useRegister";
import { useRegisterStore } from "../Store";

const Register = () => {
  const { email, password, confirmPassword } = useRegisterStore();
  const register = useRegister();
  const googleLogin = useGoogleAuth();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(email, password, confirmPassword);
  };

  return (
    <RegisterLayout
      handleRegister={handleRegister}
      handleGoogleLogin={googleLogin}
    />
  );
};

export default Register;
