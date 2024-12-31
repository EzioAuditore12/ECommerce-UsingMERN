import React from 'react'

function AddCard3({ productImage }) {
  return (
    <div className="hidden lg:block w-[58%]">
      <img src={productImage} alt="product" className='object-fill h-full' />
    </div>
  )
}

export default AddCard3