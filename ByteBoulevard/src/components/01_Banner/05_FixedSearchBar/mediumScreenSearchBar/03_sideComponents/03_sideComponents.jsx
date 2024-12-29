import React, { useState } from 'react'
import { FiUser, FiShoppingCart, FiGrid, FiHeadphones, FiMoreHorizontal } from 'react-icons/fi'
import { BiChevronDown } from 'react-icons/bi'

function SideComponents() {
  const [userName, setUserName] = useState('User')
  return (
    <div className='ml-5 lg:ml-0 flex items-center gap-x-4 lg:gap-x-7 text-white'>
      <div className='flex flex-row items-center gap-x-2'>
        <FiUser className='w-[40px] h-[40px]' />
        <div className='flex flex-row items-center gap-x-1'>
          <p>{userName}</p>
          <BiChevronDown className='w-[10px] h-[10px] mt-[3px]' />
        </div>
      </div>
      <FiShoppingCart className='w-[30px] h-[30px]' />
      <FiGrid className='w-[30px] h-[30px]' />
      <FiHeadphones className='w-[30px] h-[30px]' />
      <FiMoreHorizontal className='w-[30px] h-[30px]' />
    </div>
  )
}

export default SideComponents