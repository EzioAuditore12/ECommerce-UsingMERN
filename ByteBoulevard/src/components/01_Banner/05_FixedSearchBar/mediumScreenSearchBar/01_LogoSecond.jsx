import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

function LogoSecond() {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>  
        <FaShoppingBag className='text-3xl text-blue-500' />
        <div className='flex flex-col'>
            <span className='text-xl font-bold text-white'>Byte</span>
            <span className='text-xl font-bold text-blue-500'>Boulevard</span>
        </div>
    </div>
  )
}

export default LogoSecond