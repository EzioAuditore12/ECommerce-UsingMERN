import React from 'react'
import { useState } from 'react'
import ProductCard from '../../shared/01_productCard'
import CategoryTitle from '../../shared/02_categoryTitle'

function TopClothingPicks() {
  const products2 = [
    { 
      id: 1, 
      productName: 'H&M Relaxed Fit T-shirt',
      productPrice: '₹599',
      productImage: '/images/products/tshirt1.jpg'
    },
    {
      id: 2,
      productName: 'Zara Cargo Pants',
      productPrice: '₹2,990',
      productImage: '/images/products/pants1.jpg'
    },
    {
      id: 3,
      productName: 'Uniqlo Oxford Shirt',
      productPrice: '₹2,490',
      productImage: '/images/products/shirt1.jpg'
    },
    {
      id: 4,
      productName: 'MANGO Denim Jacket',
      productPrice: '₹4,590',
      productImage: '/images/products/jacket1.jpg'
    }
  ]

  // Use window.innerWidth to determine screen size
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get products based on screen size
  const displayedProducts = isMobile ? products2.slice(0, 8) : products;

  return (
    <div className='border w-[90%] rounded-md p-3 md:w-[95%] lg:w-[80%] bg-white'>
      <CategoryTitle title="Tech Best Sellers"/>
      <div className='grid h-[700px] grid-rows-8 md:h-[200px] md:grid-cols-12 md:w-auto md:gap-x-[175px] md:overflow-x-scroll'>
        {displayedProducts.map(product => (
          <ProductCard 
            key={product.id}
            productName={product.productName}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  )
}

export default TopClothingPicks