import React from 'react'
import FirstPart from './01_firstPart/FirstPart'
import SecondPart from './02_secondPart/secondPart'


function Main_Header() {
  return (
    <div className='md:flex md:gap-x-5'>
       <FirstPart/>
       <SecondPart/>
    </div>
  )
}

export default Main_Header