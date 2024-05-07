import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* 다른 페이지 경로도 여기에 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
};

export default App;
