import React from 'react'
import TopPicks from './01_TopPicks'
import AddCard from '../../shared/03_addCard'
function MainBody() {
  return (
    <div className='flex items-center justify-center w-full gap-x-2 '>
        <TopPicks/>
        <AddCard title='Galaxy S24 Ultra' description='Experience the power of AI' logoImage  ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' />
    </div>
  )
}

export default MainBody