import React from 'react'

function ChatBotUi({ onClose }) {
  // Function to handle overlay click without closing when clicking on chat box
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-50 z-20 flex items-end justify-end p-4'
      onClick={handleOverlayClick}
    >
      <div className='h-[500px] w-[350px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden animate-slide-up'>
        <div className='bg-red-500 text-white p-3 font-semibold flex justify-between items-center'>
          <span>Chat Support</span>
          <span className='cursor-pointer text-xl hover:bg-red-600 h-7 w-7 flex items-center justify-center rounded-full' onClick={onClose}>&times;</span>
        </div>
        <div className='flex-1 p-3 overflow-y-auto'>
          {/* Chat messages will go here */}
          <div className='mb-2 text-center text-sm text-gray-500'>
            How can we help you today?
          </div>
        </div>
        <div className='border-t p-2 flex'>
          <input 
            type="text" 
            placeholder="Type a message..." 
            className='flex-1 border rounded-l-lg p-2 outline-none'
          />
          <button className='bg-red-500 text-white px-4 rounded-r-lg'>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBotUi