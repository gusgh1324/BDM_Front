import React from "react";
import { Link } from "react-router-dom";
import { LoginIcon, HomeIcon } from "../icon/MemberIcons";
import "./MembersLayout.css";

interface ForgotPasswordLayoutProps {
  handleForgotPassword: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ForgotPasswordLayout = ({
  handleForgotPassword,
}: ForgotPasswordLayoutProps) => {
  return (
    <div className="page">
      <div className="box">
        <h1 className="title">비밀번호 찾기</h1>
        <p className="subtitle">비밀번호를 재설정합니다 🔒</p>
        <form className="form" onSubmit={handleForgotPassword}>
          <div className="form-fields">
            <label htmlFor="email" className="form  -label">
              <p className="form-label-text">이메일 주소</p>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="이메일 주소를 입력하세요"
              />
            </label>
            <button type="submit" className="form-submit-button">
              <LoginIcon className="form-submit-icon" />
              <span>비밀번호 재설정 링크 보내기</span>
            </button>
            <p className="form-link">
              로그인 페이지로 돌아가기{" "}
              <Link to="/login" className="form-link-text">
                <span>로그인</span>
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

export default ForgotPasswordLayout;
