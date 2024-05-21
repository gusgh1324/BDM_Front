import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Dbtest from "../components/test/Dbtest";

const Api = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <Dbtest />
        <Footer />
      </div>
    </div>
  );
};

export default Api;
