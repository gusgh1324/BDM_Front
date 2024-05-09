import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MapLayout from "../components/test/MapLayout";

const Map = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MapLayout />
        <Footer />
      </div>
    </div>
  );
};

export default Map;
