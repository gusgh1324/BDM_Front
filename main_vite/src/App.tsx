import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Disease from "./page/Disease";
import Sub from "./page/Sub";
import LogIn from "./page/Login";
import Register from "./page/Register";
import ForgotPassword from "./page/ForgotPassword";
import Terms from "./page/Terms";
import Map from "./page/Map";
import History from "./page/History";
import { CheckoutPage } from "./page/Checkout";
import { SuccessPage } from "./page/Success";
import { FailPage } from "./page/Fail";
import MyPageHome from "./page/MyPageHome";
import { useStore } from "./Store";
import { useEffect } from "react";

const App = () => {
  const { setLoggedIn } = useStore();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const localToken = localStorage.getItem("token");

    if (sessionToken) {
      console.log("세션 스토리지에서 토큰 확인됨");
      setLoggedIn(true);
    } else if (localToken) {
      console.log("로컬 스토리지에서 토큰 확인됨");
      setLoggedIn(true);
    } else {
      console.log("토큰 없음");
      setLoggedIn(false);
    }
  }, [setLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/map" element={<Map />} />
        <Route path="/sandbox" element={<CheckoutPage />} />
        <Route path="/sandbox/success" element={<SuccessPage />} />
        <Route path="/sandbox/fail" element={<FailPage />} />
        <Route path="/myPageHome" element={<MyPageHome />} />
        <Route path="/myProfile" element={<MyPageHome />} />
        <Route path="/history" element={<History />} />

        {/* 다른 페이지 경로도 여기에 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
};

export default App;
