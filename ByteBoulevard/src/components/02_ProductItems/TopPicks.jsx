import React from 'react'
import ProductCard from '../../shared/01_productCard'
import CategoryTitle from '../../shared/02_categoryTitle'
function TopPicks() {
  return (
    <div className='border w-[90%] rounded-md p-3 md:w-[95%]'>
    <CategoryTitle title="Fashion Best Sellers"/>
    <div className='grid h-[700px] md:h-[180px] md:grid-cols-8'>
    <ProductCard productName='Iphone'/>
    <ProductCard productName='Apple'/>
    <ProductCard productName='Iphone'/>
    <ProductCard productName='Apple'/>
    <ProductCard productName='Iphone'/>
    <ProductCard productName='Apple'/>
    </div>
    </div>
  )
}

export default TopPicks