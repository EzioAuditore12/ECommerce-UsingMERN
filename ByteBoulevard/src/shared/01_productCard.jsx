import React from 'react'

function ProductCard(
    {
        productName,
        productPrice,
        productImage,
    }
) {
  return (
    <div className='flex flex-row gap-3 items-center'>
    <img className='h-[70px] w-[70px] transform transition-transform duration-300 hover:scale-110' src="https://images-cdn.ubuy.co.in/65414af8fd4858736a695a7e-pre-owned-apple-iphone-x-256gb-factory.jpg" />
    <h1 className=''>{productName}</h1>
    <button className="ml-auto w-7 h-7 ">
    <span className="text-sm font-bold">➔</span>
    </button>
    </div>
  )
}

export default ProductCard