// Header.tsx
import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginToggle from "../test/LoginToggle";
import AuthButtons from "../ui/AuthButtons";
import UserProfile from "../ui/UserProfile";
import "./Header.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

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
            <Link to={"/disease"}>
              <div className="nav-link">질병정보</div>
            </Link>
            <Link to={"/api"}>
              <div className="nav-link">도구 및 API</div>
            </Link>
            <Link to={"/sub"}>
              <div className="nav-link">구독</div>
            </Link>
            <Link to={"/map"}>
              <div className="nav-link">지도</div>
            </Link>
          </div>
          <LoginToggle onToggle={handleToggle} />
        </div>
        <div className="button-container">
          {!isLoggedIn ? <AuthButtons /> : <UserProfile />}
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
            <Link to={"/disease"}>
              <div className="nav-link">질병정보</div>
            </Link>
            <Link to={"/api"}>
              <div className="nav-link">도구 및 API</div>
            </Link>
            <Link to={"/sub"}>
              <div className="nav-link">구독</div>
            </Link>
            <Link to={"/map"}>
              <div className="nav-link">지도</div>
            </Link>
            <div className="px-4 py-4">
              {!isLoggedIn ? <AuthButtons /> : <UserProfile />}
            </div>
          </div>
        )}
      </section>
    </div>
  );
});

export default Header;
