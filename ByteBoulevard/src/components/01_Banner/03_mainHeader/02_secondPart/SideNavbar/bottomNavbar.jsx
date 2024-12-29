import React from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import { BsShop } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'

function BottomNavbar() {
  const navItems = [
    { icon: RiMenu2Line },
    { icon: BsShop },
    { icon: AiOutlineHome },
    { icon: AiOutlineSearch },
    { icon: BsGrid }
  ]

  return (
    <div className='z-20 fixed flex justify-center items-center bottom-0 w-full bg-white h-[60px] rounded-lg md:hidden'>
      <div className='flex flex-row justify-center items-center w-full'>
        {navItems.map((item, index) => (
          <div key={index} className='flex items-center w-full justify-evenly'>
            <item.icon 
              className="cursor-pointer w-[25px] h-[25px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomNavbar