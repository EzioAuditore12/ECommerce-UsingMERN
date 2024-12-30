import React from 'react'
import { useState,useEffect } from 'react';
import ProductCard from '../../shared/01_productCard'
import CategoryTitle from '../../shared/02_categoryTitle'

function TopTechPicks() {
  const products = [
    { 
      id: 1, 
      productName: 'iPhone',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg'
    },
    { 
      id: 2, 
      productName: 'Apple Watch',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=680&hei=528&fmt=p-jpg'
    },
    { 
      id: 3, 
      productName: 'Windows Laptop',
      productImage: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg'
    },
    { 
      id: 4, 
      productName: 'AirPods Pro',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg'
    },
    { 
      id: 5, 
      productName: 'iPad Air',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha'
    },
    { 
      id: 6, 
      productName: 'iMac',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg'
    },
    { 
      id: 7, 
      productName: 'Mac Mini',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg'
    },
    { 
      id: 8, 
      productName: 'Apple TV',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=940&hei=1112&fmt=jpeg'
    },
    { 
      id: 9, 
      productName: 'HomePod',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=940&hei=1112&fmt=jpeg'
    },
    { 
      id: 10, 
      productName: 'Magic Keyboard',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=2000&hei=2000&fmt=jpeg'
    },
    { 
      id: 11, 
      productName: 'Magic Mouse',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2E3?wid=2000&hei=2000&fmt=jpeg'
    },
    { 
      id: 12, 
      productName: 'AirTag',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=940&hei=1112&fmt=jpeg'
    },
  ];

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
  const displayedProducts = isMobile ? products.slice(0, 8) : products;

  return (
    <div className='border w-full rounded-md p-3 md:w-[95%] lg:w-[80%] bg-white'>
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

export default TopTechPicks