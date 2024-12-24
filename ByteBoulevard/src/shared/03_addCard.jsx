import React from 'react'
import background01 from './Assets/backgroundImages/bg01.jpg'

function AddCard({
  logo,
  title,
  description,
}) {
  return (
    <div className='hidden lg:block bg-cover bg-center w-[220px] h-[300px] border-4 border-white p-3' 
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop')` }}>
      {/* Logo */}
      <div className="w-12 h-12 mb-4">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" 
          alt="Samsung logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="text-white mt-auto">
        <h3 className="text-xl font-bold mb-2">Galaxy S24 Ultra</h3>
        <p className="text-sm mb-4 opacity-90">Experience the power of AI</p>
        
        {/* Shop Now Button */}
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm 
          hover:bg-opacity-90 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default AddCard