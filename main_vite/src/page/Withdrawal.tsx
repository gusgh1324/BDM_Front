import WithdrawalLayout from "../components/layout/WithdrawalLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MyHomeNavLayout from "../components/layout/MyHomeNavLayout";

const Withdrawal = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <div className="flex content-container">
          <div>
            <MyHomeNavLayout />
          </div>
          <div className="ml-4">
            <WithdrawalLayout />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Withdrawal;
