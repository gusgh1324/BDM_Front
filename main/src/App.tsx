import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Disease from "./page/Disease";
import Sub from "./page/Sub";
import Api from "./page/Api";
import LogIn from "./page/Login";
import Register from "./page/Register";
import ForgotPassword from "./page/ForgotPassword";
import Terms from "./page/Terms";
import Map from "./page/Map";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/api" element={<Api />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/map" element={<Map />} />
        {/* 다른 페이지 경로도 여기에 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
};

export default App;
