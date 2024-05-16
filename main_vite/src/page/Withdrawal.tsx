
import WithdrawalLayout from "../components/layout/WithdrawalLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MyHomeNavLayout from "../components/layout/MyHomeNavLayout";


const Withdrawal = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header/>
        <MyHomeNavLayout/>
        <WithdrawalLayout/>
        <Footer/>
      </div>
    </div>
  );
};

export default Withdrawal;
