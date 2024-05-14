import React from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import LoginLayout from "../components/layout/LoginLayout";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 구현
    navigate("/"); // 로그인 성공 시 홈페이지로 이동
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
      // 구글 로그인 성공 시 처리 로직
      navigate("/");
    },
    onError: () => {
      console.error("Google Login Failed");
    },
  });

  return (
    <LoginLayout
      handleLogin={handleLogin}
      handleGoogleLogin={handleGoogleLogin}
    />
  );
};

export default Login;
