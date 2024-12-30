import React from 'react'

function AddCard3({ productImage }) {
  return (
    <div className="hidden md:flex md:w-[33%] lg:w-[32%] h-auto items-center justify-center rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <img src={productImage} alt="product" className="w-full h-full object-contain rounded-lg" />
    </div>
  )
}

export default AddCard3