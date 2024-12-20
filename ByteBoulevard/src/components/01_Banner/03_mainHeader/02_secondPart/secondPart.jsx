import React, { useState } from "react";
import toggleIcon from "./Images/toggle-icon.png";
import searchIconSvg from "./Images/searchEngine.svg";
import Sidebar from "./SideNavbar/sideNavBar";

function SecondPart() {
  const categorySection = ["firstAction", "secondAction", "thirdAction"];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="gap-x-2.5 flex items-center lg:gap-x-5">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Toggle Icon */}
      <img
        src={toggleIcon}
        className="h-7 w-7 cursor-pointer"
        onClick={toggleSidebar} 
        alt="Toggle Sidebar"
      />

      {/* Category Dropdown */}
      <select
        defaultValue=""
        className="hidden lg:block rounded bg-black p-[0.25rem] text-white text-center"
      >
        <option value="" disabled hidden>
          Category
        </option>
        {categorySection.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Search Bar */}
      <div className="flex items-center justify-center ">
        <input
          className="border border-gray-300 rounded-l p-1 w-[280px]"
          type="text"
          placeholder="Search"
        />
        <div className="bg-orange-600 p-[0.44rem] rounded-r flex justify-center items-center">
          <img
            className="h-[20px] w-[20px] scale-x-[-1] cursor-pointer"
            src={searchIconSvg}
            alt="search-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
