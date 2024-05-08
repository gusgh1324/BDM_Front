import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 구현
    navigate("/dashboard"); // 로그인 성공 시 대시보드 페이지로 이동
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">로그인</h1>
        <p className="login-subtitle">반갑습니다 👋</p>

        <div className="login-social-button-container">
          <button className="login-social-button">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt=""
              className="login-social-icon"
            />{" "}
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="login-divider">
          <span className="login-divider-text">or</span>
        </div>
        <form className="login-form">
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
                  로그인 유지
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="login-form-submit-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>로그인</span>
            </button>

            <p className="login-form-register-link">
              아직 회원이 아니신가요?{" "}
              <Link to="/register" className="login-form-register-link-text">
                <span>회원가입 </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="login-form-register-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
