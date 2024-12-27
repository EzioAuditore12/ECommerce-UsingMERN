import React from 'react'
import menuIcon from '../../../../../assets/icons/menu.svg'
import shopIcon from '../../../../../assets/icons/shop.svg'
import homeIcon from '../../../../../assets/icons/home.svg'
import heartIcon from '../../../../../assets/icons/heart.svg'
import gridIcon from '../../../../../assets/icons/grid.svg'

function BottomNavbar() {
  const navItems = [
    { icon: menuIcon },
    { icon: shopIcon },
    { icon: homeIcon },
    { icon: heartIcon },
    { icon: gridIcon }
  ]

  return (
    <div className='z-20 fixed flex justify-center items-center bottom-0 w-full bg-white h-[60px] rounded-lg md:hidden'>
      <div className='flex flex-row justify-center items-center w-full'>
        {navItems.map((item, index) => (
          <div key={index} className='flex items-center w-full justify-evenly'>
            <img 
              src={item.icon} 
              alt="nav icon"
              className="cursor-pointer w-[25px] h-[25px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomNavbar