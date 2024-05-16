// src/components/layout/RegisterLayout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { LoginIcon, RegisterIcon, HomeIcon } from "../icon/MemberIcons";
import { GoogleIcon } from "../icon/SocialIcons";
import "./MembersLayout.css";
import LogoText from "../icon/LogoText";
import { useRegisterStore } from "../../Store";

interface RegisterLayoutProps {
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleLogin: () => void;
}

const RegisterLayout = ({
  handleRegister,
  handleGoogleLogin,
}: RegisterLayoutProps) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
  } = useRegisterStore();

  return (
    <div className="page">
      <div className="box">
        <h1 className="title">
          <LogoText />
          회원가입
        </h1>
        <p className="subtitle">환영합니다! 🎉</p>
        <div className="social-button-container">
          <button className="social-button" onClick={handleGoogleLogin}>
            <GoogleIcon className="social-icon" src={""} alt={""} />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="divider">
          <span className="divider-text">or</span>
        </div>
        <form className="form" onSubmit={handleRegister}>
          <div className="form-fields">
            <label htmlFor="email" className="form-label">
              <p className="form-label-text">이메일 주소</p>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label htmlFor="confirmPassword" className="form-label">
              <p className="form-label-text">비밀번호 확인</p>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="form-input"
                placeholder="비밀번호를 다시 입력하세요"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="form-options">
              <div>
                <label htmlFor="remember" className="form-remember">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-remember-checkbox"
                  />
                  <span>전체 약관 동의</span>
                </label>
              </div>
              <div>
                <Link to="/terms" className="form-link-text">
                  약관 상세보기
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="form-submit-button"
              disabled={loading}
            >
              <RegisterIcon className="form-submit-icon" />
              <span>{loading ? "Registering..." : "회원가입"}</span>
            </button>

            <p className="form-link">
              이미 회원이신가요?{" "}
              <Link to="/login" className="form-link-text">
                <span>로그인</span>
                <span>
                  <LoginIcon className="form-link-icon" />
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

export default RegisterLayout;
