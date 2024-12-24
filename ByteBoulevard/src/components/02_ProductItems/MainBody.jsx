import React from 'react'
import TopPicks from './01_TopPicks'
import AddCard from '../../shared/03_addCard'
function MainBody() {
  return (
    <div className='flex items-center justify-center w-full gap-x-2 '>
        <TopPicks/>
        <AddCard/>
    </div>
  )
}

export default MainBody