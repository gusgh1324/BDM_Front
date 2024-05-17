
import WithdrawalLayout from "../components/layout/WithdrawalLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MyHomeNavLayout from "../components/layout/MyHomeNavLayout";
<style>
  
</style>

const Withdrawal = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Header/>
        <div id="grid"> <div><MyHomeNavLayout/></div>
        <div><WithdrawalLayout/></div></div>
       
        
        
        <Footer/>
      </div>
    </div>
  );
};

export default Withdrawal;
