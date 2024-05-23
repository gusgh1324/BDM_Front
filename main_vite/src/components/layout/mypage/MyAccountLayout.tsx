import React from "react";
import { Link } from "react-router-dom";
import "./MyPageHomeLayout.css";

const MyComponent = () => {
  return (
  <div>
  <h1 className="text-2xl font-bold  mb-6 text-gray-600">My Account</h1>
    <div className="flex flex-col items-start othername">
      
      <p className="mb-4">
        To delete your account, please cancel your Claud Pro subsceiption first.
      </p>
      <Link
        to=""
        className="w-full max-w-xs px-4 py-2 font-bold text-white bg-pink-300 rounded hover:bg-pink-400 text-center"
      >
        Delete Account
      </Link>
    </div></div>
  );
};

export default MyComponent;
