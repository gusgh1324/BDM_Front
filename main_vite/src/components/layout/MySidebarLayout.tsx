import { Link } from "react-router-dom";
import React from "react";
import "./MySidebarLayout.css"


const MySidebarLayout = () => {
 
return(
  <div >
    
    <h1 ><a href="/">Main Page</a></h1>
  <ul>
     <Link to="/myProfile" className="sidelink">
         <li className="moknok">Profile</li>
        </Link>
     <Link to="/myHistory" className="sidelink">
         <li className="moknok">History</li>
        
        </Link>
     <Link to="/myBilling" className="sidelink">
         <li className="moknok">Billing</li>
        </Link>
     <Link to="/myAccount" className="sidelink">
         <li className="moknok">Account</li>
        </Link>
     <Link to="/myWithdrawal" className="sidelink">
         <li className="moknok">탈퇴하기</li>
        </Link>
  </ul>

  </div>

);
};

export default MySidebarLayout;