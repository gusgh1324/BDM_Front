
import React from "react";
import { Link } from "react-router-dom";
import "./MyHomeNavLayout.css";

const MyHomeNavLayout = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-header">
      <h2>Sidebar</h2>
    </div>
    <ul className="sidebar-menu">
      <li className="menu-item">
        <Link to="/" className="menu-link">
          Home
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/about" className="menu-link">
          About
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/contact" className="menu-link">
          Contact
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/withdrawal" className="menu-link">
          탈퇴하기
        </Link>
      </li>
    </ul>
   
    
  </div>
  );
};

export default MyHomeNavLayout;
