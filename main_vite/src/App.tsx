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
import { CheckoutPage } from "./page/Checkout";
import { SuccessPage } from "./page/Success";
import { FailPage } from "./page/Fail";
import MyPageHome from "./page/MyPageHome";
import MyProfileLayout from "./components/layout/MyProfileLayout";
import MyBillingLayout from "./components/layout/MyBillingLayout";
import MyHistoryLayout from "./components/layout/MyHistoryLayout";
import MyAccountLayout from "./components/layout/MyAccountsLayout";
import MyWithdrawalLayout from "./components/layout/MyWithdrawalLayout";


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
        <Route path="/sandbox" element={<CheckoutPage />} />
        <Route path="/sandbox/success" element={<SuccessPage />} />
        <Route path="/sandbox/fail" element={<FailPage />} />
        <Route path="/myPageHome" element={<MyPageHome />} />
        <Route path="/myProfile" element={<MyPageHome />} />
        <Route path="/myHistory" element={<MyHistoryLayout />} />
        <Route path="/myBilling" element={<MyBillingLayout />} />
        <Route path="/myAccount" element={<MyAccountLayout />} />
        <Route path="/myWithdrawal" element={<MyWithdrawalLayout />} />


        {/* 다른 페이지 경로도 여기에 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
};

export default App;
