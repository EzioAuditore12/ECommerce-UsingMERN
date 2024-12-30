import React from 'react'

function AddCard2(
  { brandLogo, 
    title, 
    productImage }
) {
  return (
    <div className="hidden md:block md:w-[50%] lg:w-[59%] h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center h-full gap-y-4">
        {/* Brand Logo */}
        <img 
          src={brandLogo} 
          alt="Brand Logo" 
          className="w-24 h-24 object-contain"
        />
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center">
          {title}
        </h2>
        
        {/* Product Image */}
        <div className="flex-1 w-full flex items-center justify-center">
          <img 
            src={productImage} 
            alt="Product" 
            className="max-h-[300px] w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default AddCard2