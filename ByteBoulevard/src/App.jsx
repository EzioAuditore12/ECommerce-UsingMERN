import { useState } from 'react'
import BannerContainer from './components/01_Banner/BannerContainer'
import MainBody from './components/02_ProductItems/MainBody'
import MediumSearchBar from './components/01_Banner/05_FixedSearchBar/mediumScreenSearchBar/mediumSearcBar'
import Footer from './components/03_footer/footer'
import { IoIosChatboxes } from "react-icons/io";


function App() {
  return (
    <>  
    <div className='mb-[80px] relative'>
      <div className='fixed bottom-4 right-2 rounded-full bg-red-500 p-2'>
      <IoIosChatboxes className='text-white text-4xl m-auto'/>
      </div>
      <BannerContainer/>
      <MainBody/>
    </div>
    <MediumSearchBar/>
    <Footer/>
    </>
  )
}

export default App
