import React, { useState, useEffect } from "react";
import SearchBar from "./02_SearchBar";
import LogoSecond from "./01_LogoSecond";
import SideComponents from "./03_sideComponents/03_sideComponents";
const MediumSearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200; 
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-5 lg:px-12 hidden fixed top-0 w-full z-50 bg-[#FFFFFF] shadow-md h-[60px] ${
        isSticky ? "md:block" : "hidden"
      }`}
    >
      <div className="flex items-center gap-x-3 h-full">
        <LogoSecond />
        <SearchBar />
        <SideComponents />
      </div>
    </div>
  );
};

export default MediumSearchBar;
