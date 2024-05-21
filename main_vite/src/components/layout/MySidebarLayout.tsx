import React, { useState } from "react";
import "./MySidebarLayout.css";
import MyProfileLayout from "./MyProfileLayout";
import MyBillingLayout from "./MyBillingLayout";
import MyAccountLayout from "./MyAccountLatout"; // Corrected import
import MyHistoryLayout from "./MyHistoryLayout";
import MyWithdrawalLayout from "./MyWithdrawalLayout";


interface MySidebarLayoutProps {
  children?: React.ReactNode;
}

const MySidebarLayout = ({ children }: MySidebarLayoutProps) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handleModeChange = (mode: string) => {
    setSelectedMode(mode);
  };

  return (
    <div className="grid">
      <div className="sidebar">
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) ? (
            <div onClick={() => handleModeChange(`Mode ${index + 1}`)}>
              {child}
            </div>
          ) : (child)
        )}
        
      </div>
      
      <div className="content">
        
        {selectedMode === 'Mode 1' && <MyProfileLayout />}
        {selectedMode === 'Mode 2' && <MyBillingLayout />}
        {selectedMode === 'Mode 3' && <MyAccountLayout />}
        {selectedMode === 'Mode 4' && <MyHistoryLayout />}
        {selectedMode === 'Mode 5' && <MyWithdrawalLayout />}
      </div>
    </div>
  );
};

export default MySidebarLayout;
