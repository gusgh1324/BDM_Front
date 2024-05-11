import React from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordLayout from "../components/layout/ForgotPasswordLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 비밀번호 찾기 로직 구현
    navigate("/login"); // 비밀번호 찾기 성공시 로그인 페이지로 이동
  };

  return <ForgotPasswordLayout handleForgotPassword={handleForgotPassword} />;
};

export default ForgotPassword;
