import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function MenuToggle() {
    return (
        <div className="flex items-center justify-center cursor-pointer">
            <GiHamburgerMenu className="w-[30px] h-[30px] text-white hover:text-gray-300" />
        </div>
    );
}

export default MenuToggle;