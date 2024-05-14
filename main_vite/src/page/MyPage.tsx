import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MyPageLayout from "../components/layout/MyPageLayout";

const MyPage = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MyPageLayout />
        <Footer />
      </div>
    </div>
  );
};

export default MyPage;
