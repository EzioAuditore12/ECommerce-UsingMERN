import React from 'react'
import TopTechPicks from './01_TopPicks'
import AddCard from '../../shared/03_addCard'
import TopClothingPicks from './02_TopClothingsPick'
function MainBody() {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-y-4'>
    <div className='flex items-center justify-center w-full gap-x-2 '>
        <TopTechPicks/>
        <AddCard title='Galaxy S24 Ultra' description='Experience the power of AI' logoImage  ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' />
    </div>
    <TopClothingPicks/>
    </div>
  )
}

export default MainBody