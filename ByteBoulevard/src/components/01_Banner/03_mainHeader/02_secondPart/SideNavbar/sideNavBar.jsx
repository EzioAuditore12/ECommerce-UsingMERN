import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../../../../ActionSlices/sideBarSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isSidebarOpen);  // Fixed selector path
  
  const sideBarData = [
    { title: "Home", link: "/home" },
    { title: "Fashion", link: "/fashion" },
    { title: "Electronic", link: "/electronic" },
    { title: "Jewellery", link: "/jewellery" },
  ];

  return (
    <div
      className={`z-[100] fixed top-0 left-0 h-full w-[250px] bg-black text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={() => dispatch(closeSidebar())}
        className="absolute top-4 right-4 text-white text-xl "
      >
        ✖
      </button>
      <ul className="mt-12">
        {sideBarData.map((val, key) => (
          <li
            key={key}
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => (window.location.pathname = val.link)}
          >
            {val.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
