import React from 'react'
import ProductCard from '../../shared/01_productCard'
import CategoryTitle from '../../shared/02_categoryTitle'
function TopPicks() {
  return (
    <div className='border w-[90%] h-[2000px] rounded-md p-3'>
    <CategoryTitle title="Fashion Best Sellers"/>
    <div className='grid gap-y-600px'>
    <ProductCard productName='Iphone'/>
    <ProductCard productName='Apple'/>
    </div>
    </div>
  )
}

export default TopPicks