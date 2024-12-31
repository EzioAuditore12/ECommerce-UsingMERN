import React from 'react'

function AddCard2(
  { productImage }
) {
  return (
    <div className='hidden w-[50%] h-full md:block lg:hidden '>
        <img src={productImage} className='objec-cover'/>
    </div>
  )
}

export default AddCard2