import React from "react";  
import menuIcon from "./Assets/menuIcon.svg";

function MenuToggle() {
    return (
        <div className="flex items-center justify-center cursor-pointer">
        <img
            src={menuIcon
            }
            alt="menu-icon"
            className="w-[30px] h-[30px]"
        />
        </div>
    );
}

export default MenuToggle;