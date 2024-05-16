import React from "react";
import "./WithdrawalLayout.css";
import { Link } from "react-router-dom";

const WithdrawalLayout = () => {
  const handleWithdraw = () => {
    // 회원탈퇴 성공 메시지를 변수에 저장합니다.
    const message: string = "회원탈퇴 성공!";

    // alert 창을 띄웁니다.
    alert(message);
  };

  return (
    <div className="withdrawal_container">
      <div className="withdrawal_container2">
        <h2 className="mb-6 sub-title">회원 탈퇴하기</h2>

        <input
          id="password"
          name="password"
          type="password"
          className="form-input"
          placeholder="비밀번호를 입력하세요"
        />
        <div className="mt-4">
          <Link to={"/"}>
            <button
              className="px-4 py-2 mr-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-600"
              onClick={handleWithdraw} // 회원탈퇴 버튼 클릭 시 handleWithdraw 함수 호출
            >
              회원탈퇴
            </button>
          </Link>
          <button className="px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-600">
            이전
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalLayout;
