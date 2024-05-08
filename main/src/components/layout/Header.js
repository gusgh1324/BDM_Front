import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import "./Header.css";

const Header = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <nav className="nav-container">
        <div className="logo-container">
          <Link to={"/"}>
            <img
              alt="Logo"
              className="h-32 text-2xl font-bold"
              src="/logo512.png"
            />
          </Link>
          <div className="nav-links">
            <div className="nav-link">
              <Link to={"/disease"}>질병정보</Link>
            </div>

            <div className="nav-link">
              <Link to={"/api"}>도구 및 API</Link>
            </div>

            <div className="nav-link">
              <Link to={"/sub"}>구독</Link>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button className="login-button">
            <Link to={"/login"}>로그인</Link>
          </Button>
          <Button className="register-button">
            <Link to={"/register"}>회원가입</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-10 h-10" />
            ) : (
              <Bars3Icon className="w-10 h-10" />
            )}
          </button>
        </div>
      </nav>
      <section className="mobile">
        {isOpen && (
          <div className="lg:hidden">
            <div className="nav-link">
              <Link to={"/disease"}>질병정보</Link>
            </div>

            <div className="nav-link">
              <Link to={"/api"}>도구 및 API</Link>
            </div>

            <div className="nav-link">
              <Link to={"/sub"}>구독</Link>
            </div>

            <div className="px-4 py-4">
              <Button className="mobile-login-button">
                <Link to={"/login"}>로그인</Link>
              </Button>
              <Button className="mobile-register-button">
                <Link to={"/register"}>회원가입</Link>
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
});

export default Header;
