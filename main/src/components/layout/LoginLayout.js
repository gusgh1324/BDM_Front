import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../icon/LoginIcon";
import RegisterIcon from "../icon/RegisterIcon";
import { GoogleIcon } from "../icon/SocialIcons";
import "./LoginLayout.css";

const LoginLayout = ({ handleLogin }) => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">로그인</h1>
        <p className="login-subtitle">반갑습니다 👋</p>
        <div className="login-social-button-container">
          <button className="login-social-button">
            <GoogleIcon className="login-social-icon" />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="login-divider">
          <span className="login-divider-text">or</span>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-form-fields">
            <label htmlFor="email" className="login-form-label">
              <p className="login-form-label-text">이메일 주소</p>
              <input
                id="email"
                name="email"
                type="email"
                className="login-form-input"
                placeholder="이메일 주소를 입력하세요"
              />
            </label>

            <label htmlFor="password" className="login-form-label">
              <p className="login-form-label-text">비밀번호</p>
              <input
                id="password"
                name="password"
                type="password"
                className="login-form-input"
                placeholder="비밀번호를 입력하세요"
              />
            </label>

            <div className="login-form-options">
              <div>
                <label htmlFor="remember" className="login-form-remember">
                  <input
                    type="checkbox"
                    id="remember"
                    className="login-form-remember-checkbox"
                  />
                  <span>로그인 유지</span>
                </label>
              </div>
              <div>
                <Link
                  to="/forgot-password"
                  className="login-form-forgot-password"
                >
                  비밀번호 찾기
                </Link>
              </div>
            </div>

            <button type="submit" className="login-form-submit-button">
              <LoginIcon className="login-form-submit-icon" />
              <span>로그인</span>
            </button>

            <p className="login-form-register-link">
              아직 회원이 아니신가요?{" "}
              <Link to="/register" className="login-form-register-link-text">
                <span>회원가입 </span>
                <span>
                  <RegisterIcon className="login-form-register-icon" />
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginLayout;
