import React from "react";
import { Link } from "react-router-dom";
import "./MyAccountLayout.css";

const MyComponent = () => {
  return (
    <div className="flex flex-col items-start othername">
      <p className="mb-4">
        To delee your account, please cancel your Claud Pro subsceiption first.
      </p>
      <Link
        to=""
        className="w-full max-w-xs px-4 py-2 font-bold text-white bg-pink-300 rounded hover:bg-pink-400"
      >
        Delete Account
      </Link>
    </div>
  );
};

export default MyComponent;
