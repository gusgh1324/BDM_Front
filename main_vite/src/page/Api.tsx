import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ApiLayout from "../components/layout/ApiLayout";

const Api = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <ApiLayout />
        <Footer />
      </div>
    </div>
  );
};

export default Api;
