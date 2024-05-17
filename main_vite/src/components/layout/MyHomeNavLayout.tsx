import { Link } from "react-router-dom";
import "./MyHomeNavLayout.css";

const MyHomeNavLayout = () => {
  return (
    <div className="whole_sidebar">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Sidebar</h2>
        </div>
        <ul className="sidebar-menu">
          <Link to="/profile" className="menu-link">
            <li className="menu-item">Profile</li>
          </Link>

          <Link to="/billingPage" className="menu-link">
            {" "}
            <li className="menu-item">Billing</li>
          </Link>

          <Link to="/Account" className="menu-link">
            <li className="menu-item">Account</li>
          </Link>

          <Link to="/withdrawal" className="menu-link">
            <li className="menu-item">탈퇴하기</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MyHomeNavLayout;