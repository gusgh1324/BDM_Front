import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
<<<<<<< HEAD:main_vite/src/page/MyPage.tsx
import MyPageLayout from "../components/layout/MyPageLayout";

const MyPage = () => {
=======
import MyPageHomeLayout from "../components/layout/MyPageHomeLayout";
import MyHomeNavLayout from "../components/layout/MyHomeNavLayout";
const MyPageHome = () => {
>>>>>>> 432f836b632f5fb34b7c6ccd8dab3a903e36e79c:main_vite/src/page/MyPageHome.tsx
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
<<<<<<< HEAD:main_vite/src/page/MyPage.tsx
        <MyPageLayout />
=======
        <MyPageHomeLayout/>
        <MyHomeNavLayout/>
        
>>>>>>> 432f836b632f5fb34b7c6ccd8dab3a903e36e79c:main_vite/src/page/MyPageHome.tsx
        <Footer />
      </div>
    </div>
  );
};

export default MyPageHome;
