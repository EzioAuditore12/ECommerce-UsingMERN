import React from 'react'
import FirstPart from './01_firstPart/FirstPart'
import SecondPart from './02_secondPart/secondPart'
import BottomNavbar from './02_secondPart/SideNavbar/bottomNavbar'

function Main_Header() {
  return (
    <>
    <div className='w-full p-2 md:flex md:justify-center md:gap-x-2'>
       <FirstPart/>
       <SecondPart/>
    </div>
    <BottomNavbar/>
    </>
  )
}

export default Main_Header