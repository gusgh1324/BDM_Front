import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import "./MyPageHomeLayout.css";
import MySidebarLayout from "./MySidebarLayout";
import MyProfileLayout from "./MyProfileLayout";
interface props{
    topics: string[];
}

const MyPageHomeLayout = ({topics} : props ) => {
  return (
    <div>
      <h1 id="jemok" className="sub-title mb-6 text-center">
        {topics}
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
