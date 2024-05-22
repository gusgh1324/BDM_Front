import React from 'react';
import { Link } from 'react-router-dom';
import "./MyAccountLayout.css"


const MyComponent = () => {
  return (
    <div className="othername flex flex-col items-start">
      <p className="mb-4">To delee your account, please cancel your Claud Pro subsceiption first.</p>
      <Link
        to=""
        className="bg-pink-300 hover:bg-pink-200 
        text-white font-bold py-2 px-4 rounded w-full max-w-xs"

      >
        Delete Account
      </Link>
    </div>
  );
};

export default MyComponent;
