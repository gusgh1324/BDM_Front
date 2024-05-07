import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-6">
        <a className="text-2xl font-bold" href="#">
          <img
            alt="Logo"
            className="h-10"
            height="80"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="80"
          />
        </a>
        <div className="hidden md:flex space-x-6">
          <a className="text-gray-700 px-3 py-3 text-xl" href="#">
            질병정보
          </a>
          <a className="text-gray-700 px-3 py-3 text-xl" href="#">
            도구 및 API
          </a>
          <a className="text-gray-700 px-3 py-3 text-xl" href="#">
            구독
          </a>
        </div>
      </div>
      <div className="hidden md:flex space-x-2">
        <Button className="bg-blue-500 text-white px-6 py-3 text-lg">
          로그인
        </Button>
        <Button className="bg-gray-300 text-gray-700 px-6 py-3 text-lg">
          회원가입
        </Button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a className="block py-2 px-4 text-gray-700 text-xl" href="#">
            질병정보
          </a>
          <a className="block py-2 px-4 text-gray-700 text-xl" href="#">
            도구 및 API
          </a>
          <a className="block py-2 px-4 text-gray-700 text-xl" href="#">
            구독
          </a>
          <div className="py-4 px-4">
            <Button className="bg-blue-500 text-white px-6 py-3 text-lg w-full mb-2">
              로그인
            </Button>
            <Button className="bg-gray-300 text-gray-700 px-6 py-3 text-lg w-full">
              회원가입
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
