import React, { useState, useEffect } from "react";
import MenuToggle from "./00_menuToggle";
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
      className={`px-5 gap-x-2 lg:px-12 hidden fixed top-0 w-full z-50 bg-[#FFFFFF] shadow-md h-[60px] ${
        isSticky ? "md:flex md:justify-center md:items-center " : "hidden"
      }`}
    >
        <MenuToggle />
        <LogoSecond />
        <SearchBar />
        <SideComponents />
    </div>
  );
};

export default MediumSearchBar;
