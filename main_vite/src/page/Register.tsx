import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterLayout from "../components/layout/RegisterLayout";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 로직 구현
    navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
  };

  return <RegisterLayout handleRegister={handleRegister} />;
};

export default Register;
