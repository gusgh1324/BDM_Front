import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import "./MyPageHomeLayout.css";
import MySidebarLayout from "./MySidebarLayout";
import MyProfileLayout from "./MyProfileLayout";

const MyPageHomeLayout = () => {
  return (
    <div>
      <h1 id="jemok" className="sub-title mb-6 text-center">
        My Page Home
      </h1>
      <div className="leftright">
        <div>
          <MySidebarLayout />
        </div>
        <div>
          <MyProfileLayout />
        </div>
      </div>
    </div>
  );
};

export default MyPageHomeLayout;
