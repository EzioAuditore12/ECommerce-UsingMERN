import {React,useState} from 'react'
import userIcon from '../Assets/userIcon.svg'
import downArrow from '../Assets/downArrow.svg'
import shoppingCart from '../Assets/shoppingCart.svg'
import categoryIcon from '../Assets/categoryIcon.svg'
import customerService from '../Assets/customerService.svg'
import moreIcon from '../Assets/moreIcon.svg'
function SideComponents() {
  const [userName, setUserName] = useState('User')
  return (
    <div className='ml-5 lg:ml-0 flex items-center gap-x-4 lg:gap-x-7'>
    <div className='flex flex-row items-center gap-x-2'>
        <img src={userIcon} alt="sideComponent" className='w-[40px] h-[40px]'/>
        <div className='flex flex-row items-center gap-x-1'>
        <p>{userName}</p>
        <img src={downArrow} className='w-[10px] h-[10px] mt-[3px]'/>
        </div>
        </div>
        <img src={shoppingCart} alt="sideComponent" className='w-[30px] h-[30px]'/>
        <img src={categoryIcon} alt="sideComponent" className='w-[30px] h-[30px]'/>
        <img src={customerService} alt="sideComponent" className='w-[30px] h-[30px]'/>
        <img src={moreIcon} alt="sideComponent" className='w-[30px] h-[30px]'/>
    </div>
  )
}

export default SideComponents