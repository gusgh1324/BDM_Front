import React from "react";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../components/layout/LoginLayout";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 구현
    navigate("/"); // 로그인 성공 시 홈페이지로 이동
  };

  return <LoginLayout />;
};

export default Login;
