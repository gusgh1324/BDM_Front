import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AuthButtons from "../ui/AuthButtons";
import UserProfile from "../ui/UserProfile";
import { useStore } from "../../Store"; // Zustand store 가져오기
import "./Header.css";

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useStore((state) => state.isLoggedIn);

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
            <Link to={"/sub"}>
              <div className="nav-link">구독</div>
            </Link>
            <Link to={"/map"}>
              <div className="nav-link">지도</div>
            </Link>
          </div>
        </div>
        <div className="button-container">
          {!isLoggedIn ? <AuthButtons /> : <UserProfile />}
        </div>
        <div className="flex space-x-2 lg:hidden">
          {isLoggedIn && <UserProfile />}
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
            <Link to={"/sub"}>
              <div className="nav-link">구독</div>
            </Link>
            <Link to={"/map"}>
              <div className="nav-link">지도</div>
            </Link>
            {!isLoggedIn && (
              <div className="px-4 py-4">
                <AuthButtons />
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
});

export default Header;
