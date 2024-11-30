import React from 'react';
import userIconSvg from './Images/user-icon.png'
import cartIconSvg from './Images/shoppingCart.svg'

const languageOptions = ['English', 'Spanish', 'French']; 

function FirstPart() {
  return (
    <div className="flex justify-between text-white sm:order-1" >
      {/* Language Selector */}
      <select className=" rounded px-2 py-1 text-xs bg-transparent text-black">
        {languageOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

    
      <div className='flex '>
    {/* Cart Icon */}
      <div className="flex items-center text-sm mx-1 cursor-pointer">
        <p>Cart</p>
        <img className="ml-1 h-6 w-4" src={cartIconSvg}alt="cart-icon" />
      </div>

      {/* User Icon */}
      <div className="flex items-center text-sm mx-1 cursor-pointer">
        <p>User</p>
        <img className="ml-1 h-4 w-4" src={userIconSvg} alt="user-icon" />
      </div>
        </div>
</div>
  );
}

export default FirstPart;
