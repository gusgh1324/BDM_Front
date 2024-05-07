import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
      <div className="flex items-center justify-between">
        <a className="text-2xl font-bold" href="/">
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
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}
      >
        <a
          className="block md:inline-block text-gray-700 px-3 py-3 text-xl"
          href="#"
        >
          질병정보
        </a>
        <a
          className="block md:inline-block text-gray-700 px-3 py-3 text-xl"
          href="#"
        >
          도구 및 API
        </a>
        <a
          className="block md:inline-block text-gray-700 px-3 py-3 text-xl"
          href="#"
        >
          구독
        </a>
        <div className="mt-4 md:mt-0 md:ml-6">
          <Button className="bg-blue-500 text-white px-6 py-3 text-lg w-full md:w-auto mb-2 md:mb-0">
            로그인
          </Button>
          <Button className="bg-gray-300 text-gray-700 px-6 py-3 text-lg w-full md:w-auto">
            회원가입
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
