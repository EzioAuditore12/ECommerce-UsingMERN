import { useState } from 'react'
import BannerContainer from './components/01_Banner/BannerContainer'
import TopPicks from './components/02_ProductItems/TopPicks'

function App() {
  return (
    <>
      <BannerContainer/>
      <div className='flex flex-col items-center justify-center'>
      <TopPicks/>
    </div>
    </>
  )
}

export default App
