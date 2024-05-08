import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <nav className="nav-container">
        <div className="logo-container">
          <a className="text-2xl font-bold" href="/">
            <img alt="Logo" className="h-32" src="/logo512.png" />
          </a>
          <div className="nav-links">
            <div className="nav-link">
              <Link to={"/disease"}>질병정보</Link>
            </div>

            <div className="nav-link">
              <Link to={"/"}>도구 및 API</Link>
            </div>

            <div className="nav-link">
              <Link to={"/"}>구독</Link>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button className="login-button">로그인</Button>
          <Button className="signup-button">회원가입</Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <a className="mobile-nav-link" href="#">
            질병정보
          </a>
          <a className="mobile-nav-link" href="#">
            도구 및 API
          </a>
          <a className="mobile-nav-link" href="#">
            구독
          </a>
          <div className="px-4 py-4">
            <Button className="mobile-login-button">로그인</Button>
            <Button className="mobile-signup-button">회원가입</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
