import React from "react";
import { Link } from "react-router-dom";
import { LoginIcon, RegisterIcon, HomeIcon } from "../icon/MemberIcons";
import LogoText from "../icon/LogoText";
import "./MembersLayout.css";
import { GoogleLogin } from "@react-oauth/google";

interface LoginLayoutProps {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleLogin: (credential: string) => void;
}

const LoginLayout = ({ handleLogin, handleGoogleLogin }: LoginLayoutProps) => {
  return (
    <div className="page">
      <div className="box">
        <h1 className="title">
          <LogoText />
          로그인
        </h1>
        <p className="subtitle">반갑습니다 👋</p>
        <div className="social-button-container">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                handleGoogleLogin(credentialResponse.credential);
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            type="standard"
            theme="outline"
            size="large"
            text="signin_with"
            shape="rectangular"
            logo_alignment="left"
            width="100%"
            locale="en"
          />
        </div>
        <div className="divider">
          <span className="divider-text">or</span>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <div className="form-fields">
            <label htmlFor="email" className="form-label">
              <p className="form-label-text">이메일 주소</p>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="이메일 주소를 입력하세요"
              />
            </label>
            <label htmlFor="password" className="form-label">
              <p className="form-label-text">비밀번호</p>
              <input
                id="password"
                name="password"
                type="password"
                className="form-input"
                placeholder="비밀번호를 입력하세요"
              />
            </label>
            <div className="form-options">
              <div>
                <label htmlFor="remember" className="form-remember">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-remember-checkbox"
                  />
                  <span>로그인 유지</span>
                </label>
              </div>
              <div>
                <Link to="/forgot-password" className="form-link-text">
                  비밀번호 찾기
                </Link>
              </div>
            </div>
            <button type="submit" className="form-submit-button">
              <LoginIcon className="form-submit-icon" />
              <span>로그인</span>
            </button>
            <p className="form-link">
              아직 회원이 아니신가요?{" "}
              <Link to="/register" className="form-link-text">
                <span>회원가입</span>
                <span>
                  <RegisterIcon className="form-link-icon" />
                </span>
              </Link>
            </p>
            <p className="form-link">
              <Link to="/" className="form-link-text">
                <span>홈으로</span>
                <span>
                  <HomeIcon className="form-link-icon" />
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
