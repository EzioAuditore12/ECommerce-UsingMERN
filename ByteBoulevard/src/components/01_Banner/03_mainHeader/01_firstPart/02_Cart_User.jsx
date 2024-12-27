import React from 'react'
import userIconSvg from './Images/user-icon.png'
import cartIconSvg from './Images/shoppingCart.svg'

function Cart_User() {
  return (
    <div className='flex flex-row md:gap-1'>
    {/* Cart Icon */}
      <div className="flex items-center text-sm cursor-pointer hover:text-orange-400">
        <p>Cart</p>
        <img className="h-6 w-4 fill-white" src={cartIconSvg} alt="cart-icon" />
      </div>

      {/* User Icon */}
      <div className="flex items-center text-sm mx-1 cursor-pointer hover:text-orange-400">
        <p>User</p>
        <img className="h-4 w-4" src={userIconSvg} alt="user-icon" />
      </div>
        </div>
  )
}

export default Cart_User