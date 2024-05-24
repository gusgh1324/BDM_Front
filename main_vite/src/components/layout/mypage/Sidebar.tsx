

import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">
      <button
        className="toggle-btn text-lg font-semibold mb-4"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      <div
        className={`sidebar ${isSidebarVisible ? 'block' : 'hidden'} bg-gray-800 text-white w-64`}
      >
        <div className=" sidebar p-4">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="">
            <li className="py-2 hover:bg-gray-700 cursor-finger">Item 1</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Item 2</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Item 3</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Item 4</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Item 5</li>
          </ul>
        </div>
      </div>
      <div className="content">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;