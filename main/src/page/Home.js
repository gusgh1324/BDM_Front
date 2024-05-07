import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
