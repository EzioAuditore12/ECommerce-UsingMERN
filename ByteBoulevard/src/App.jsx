import { useState } from 'react'
import BannerContainer from './components/01_Banner/BannerContainer'
import MainBody from './components/02_ProductItems/MainBody'

function App() {
  return (
    <div className='mb-[80px]'>
      <BannerContainer/>
      <MainBody/>
    </div>
  )
}

export default App
