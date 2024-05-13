import React from "react";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../components/layout/LoginLayout";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 구현
    navigate("/"); // 로그인 성공 시 홈페이지로 이동
  };

  const handleGoogleLogin = (credential: string) => {
    // 구글 로그인 로직 구현
    console.log("Google Login Credential:", credential);
    navigate("/"); // 구글 로그인 성공 시 홈페이지로 이동
  };

  return (
    <LoginLayout
      handleLogin={handleLogin}
      handleGoogleLogin={handleGoogleLogin}
    />
  );
};

export default Login;
