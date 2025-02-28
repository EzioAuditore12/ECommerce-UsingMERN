import { useState } from 'react'
import BannerContainer from './components/01_Banner/BannerContainer'
import MainBody from './components/02_ProductItems/MainBody'
import MediumSearchBar from './components/01_Banner/05_FixedSearchBar/mediumScreenSearchBar/mediumSearcBar'
import Footer from './components/03_footer/footer'
import { IoIosChatboxes } from "react-icons/io";
import ChatBotUi from './shared/ChatBotUi'

function App() {
  const [showChat, setShowChat] = useState(false);

  const toggleChatBot = () => {
    setShowChat(!showChat);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <>  
    <div className='mb-[80px] relative'>
      <div 
        className='fixed bottom-4 right-2 rounded-full bg-red-500 p-2 cursor-pointer z-10'
        onClick={toggleChatBot}
      >
        <IoIosChatboxes className='text-white text-4xl m-auto'/>
      </div>
      {showChat && <ChatBotUi onClose={closeChat} />}
      <BannerContainer/>
      <MainBody/>
    </div>
    <MediumSearchBar/>
    <Footer/>
    </>
  )
}

export default App
