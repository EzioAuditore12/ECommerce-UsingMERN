import React from 'react'
import TopTechPicks from './01_TopTechPicks'
import AddCard from '../../shared/03_addCard'
import TopClothingPicks from './02_TopClothingsPick'
import RecommendedTechPicks from './03_RecommendedTechPicks'
import AddCard2 from '@/shared/05_AddCard2'
import NewRecommendedTechPicks from './05_NewRecommendations'
import AddCard3 from '@/shared/06_addCard3'
import AdImage2 from './Assets/advertismentCard1.png'
import AdImage3 from './Assets/advertismentCard2.png'

function MainBody() {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-y-4'>
    <div className='flex items-center justify-center w-full gap-x-2 h-full '>
        <TopTechPicks/>
        <AddCard title='Galaxy S24 Ultra' description='Experience the power of AI' logoImage  ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' productImage='https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzycins-539573502?imbypass=true' />
    </div>
    <TopClothingPicks/>
    <div className='flex flex-row justify-between w-full h-full md:w-[95%] '>
    <RecommendedTechPicks/>
    <AddCard2 productImage={AdImage3}/>
    <AddCard3 productImage={AdImage2}/>
    </div>
    <NewRecommendedTechPicks/>
    </div>
  )
}

export default MainBody