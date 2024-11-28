import React from "react";
import burgerMenu from './Images/burger-menu.png';
import searchIconSvg from './Images/search-engine-magnifying-glass-svgrepo-com.svg'
import cartIconSvg from './Images/cart-large-svgrepo-com.svg'
import userIconSvg from './Images/male-user-symbol-svgrepo-com.svg'

function MainHeader() {
    const menuOptions = ['Action', 'Another Action', 'Something Else'];
    const languageOptions = ['English', 'French'];

    return (
        <div className="w-[70%] h-[100px] flex items-center justify-between">
            {/* Burger Menu */}
            <img
                src={burgerMenu}
                className="h-[50px] w-[50px] cursor-pointer"
                alt="hamburger-menu"
            />

            {/* Dropdown Menu */}
            <select className="border border-gray-300 rounded px-2 py-1">
                {menuOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* Search Bar */}
            <div className="flex items-center w-[40%]">
                <input
                    className="w-full border border-gray-300 rounded-l px-2 py-1"
                    type="text"
                    placeholder="Search"
                />
                <div className="bg-orange-600 p-2 rounded-r flex justify-center items-center">
                    <img
                        className="h-[20px] w-[20px] scale-x-[-1]"
                        src={searchIconSvg}
                        alt="search-icon"
                    />
                </div>
            </div>

            {/* Language Selector */}
            <select className="border border-gray-300 rounded px-2 py-1">
                {languageOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* Cart */}
            <div className="flex items-center space-x-2">
                <p>Cart</p>
                <img className="h-[24px] w-[24px]" src={cartIconSvg} alt="cart-icon" />
            </div>

            {/* User */}
            <div className="flex items-center space-x-2">
                <p>User</p>
                <img className="h-[24px] w-[24px]" src={userIconSvg} alt="user-icon" />
            </div>
        </div>
    );
}

export default MainHeader;
