
import React from "react";
import { Link } from "react-router-dom";

const MyHomeNavLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/withdrawal">탈퇴하기</Link>
        </li>
      </ul>
    </div>
  );
};

export default MyHomeNavLayout;
