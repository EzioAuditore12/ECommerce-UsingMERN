import React, { useState, useEffect } from "react";
import SearchBar from "./02_SearchBar";
import LogoSecond from "./01_LogoSecond";
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
    className={`px-12 hidden fixed top-0 left-0 w-full z-50 bg-white ${
      isSticky ? "md:block" : "hidden"
    }`}
  >
    <div className="flex items-center gap-x-3">
      <LogoSecond />
      <SearchBar />
    </div>
  </div>
  );
};

export default MediumSearchBar;
