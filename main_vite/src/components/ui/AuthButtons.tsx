import { Link } from "react-router-dom";
import { Button } from "./button";
import React from "react";

const AuthButtons = () => {
  return (
    <React.Fragment>
      <Link to={"/login"}>
        <Button className="login-button">로그인</Button>
      </Link>
      <Link to={"/register"}>
        <Button className="register-button">회원가입</Button>
      </Link>
    </React.Fragment>
  );
};

export default AuthButtons;
