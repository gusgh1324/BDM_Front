import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Disease = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-lg px-4 mx-auto">
        <Header />
        질병정보입니다....
        <Footer />
      </div>
    </div>
  );
};

export default Disease;
