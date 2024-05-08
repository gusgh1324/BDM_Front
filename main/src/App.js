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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/disease" element={<Disease />} />
        <Route exact path="/api" element={<Api />} />
        <Route exact path="/sub" element={<Sub />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/terms" element={<Terms />} />
        {/* 다른 페이지 경로도 여기에 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
};

export default App;
