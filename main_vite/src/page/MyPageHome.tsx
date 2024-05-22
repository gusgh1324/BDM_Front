import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MyPageHomeLayout from "../components/layout/mypage/MyPageHomeLayout";

const MyPageHome = () => {
  const topics = ["프로필", "결제", "계정", "히스토리", "회원탈퇴"];

  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MyPageHomeLayout topics={topics} />
        <Footer />
      </div>
    </div>
  );
};

export default MyPageHome;
