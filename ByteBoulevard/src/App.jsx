import { useState } from 'react'
import BannerContainer from './components/01_Banner/BannerContainer'
import MainBody from './components/02_ProductItems/MainBody'
import MediumSearchBar from './components/01_Banner/05_FixedSearchBar/mediumScreenSearchBar/mediumSearcBar'
function App() {
  return (
    <>  
    <div className='mb-[80px]'>
      <BannerContainer/>
      <MainBody/>
    </div>
    <MediumSearchBar/>
    </>
  )
}

export default App
