import React from 'react'

function ProductCard(
    {
        productName,
        productPrice,
        productImage,
    }
) {
  return (
    <div className='flex flex-row gap-x-4 items-center md:flex-col md:justify-between md:gap-y-2 md:h-[150px] md:w-[150px] md:border-3 md:border-black'>
      <img className='h-[70px] w-[70px] md:h-[120px] md:w-[120px] md:object-cover' src={productImage}/>
      <h1 className=''>{productName}</h1>
      <button className="ml-auto w-7 h-7 md:hidden">
      <span className="text-sm font-bold">➔</span>
      </button>
      </div>
  )
}

export default ProductCard