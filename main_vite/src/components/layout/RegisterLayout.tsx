import React from "react";
import { Link } from "react-router-dom";
import { LoginIcon, RegisterIcon, HomeIcon } from "../icon/MemberIcons";
import { GoogleIcon } from "../icon/SocialIcons";
import "./MembersLayout.css";
import LogoText from "../icon/LogoText";
import { useRegisterStore } from "../../Store";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";

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
    setError,
    agreeToTerms,
    setAgreeToTerms,
  } = useRegisterStore();

  const { isLengthValid, hasNumber, hasSpecialChar, noWhitespace } =
    usePasswordValidation(password);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreeToTerms) {
      setError("약관에 동의해 주세요.");
      return;
    }
    handleRegister(e);
  };

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
        <form className="form" onSubmit={onSubmit}>
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
              <ul className="list-disc text-xs mt-2 ml-5">
                <li style={{ color: isLengthValid ? "green" : "red" }}>
                  글자 8자 이상
                </li>
                <li style={{ color: hasNumber ? "green" : "red" }}>
                  숫자 1개 이상
                </li>
                <li style={{ color: hasSpecialChar ? "green" : "red" }}>
                  특수문자 1개 이상
                </li>
                <li style={{ color: noWhitespace ? "green" : "red" }}>
                  앞뒤 공백 미포함
                </li>
              </ul>
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
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
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
