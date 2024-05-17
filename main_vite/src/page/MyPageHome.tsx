import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import MyPageHomeLayout from "../components/layout/MyPageHomeLayout";

const MyPageHome = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MyPageHomeLayout />
        <Footer />
      </div>
    </div>
  );
};

export default MyPageHome;
