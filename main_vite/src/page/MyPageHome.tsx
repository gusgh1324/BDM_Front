import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MyPageHomeLayout from "../components/layout/MyPageHomeLayout";
import MyHomeNavLayout from "../components/layout/MyHomeNavLayout";
const MyPageHome = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <MyPageHomeLayout/>
        <MyHomeNavLayout/>
        
        <Footer />
      </div>
    </div>
  );
};

export default MyPageHome;
