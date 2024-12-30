import React, { useState, useEffect } from 'react';
import ProductCard from '../../shared/01_productCard';
import CategoryTitle from '../../shared/02_categoryTitle';

function TopClothingPicks() {
  const products2 = [
    {
      "id": 1,
      "productName": "Hooded Combo Tshirts",    
      "productPrice": "353",
      "productImage": "https://images.meesho.com/images/products/393643221/mlpsl_512.webp"
    },
    {
      "id": 2,
      "productName": "CASUAL WEAR TSHIRT",
      "productPrice": "₹178",
      "productImage": "https://images.meesho.com/images/products/403396149/zgghe_512.webp"
    },
    {
      "id": 3,
      "productName": "MANCONIC Cotton Blend Hoodie T-Shirt",
      "productPrice": "₹308",
      "productImage": "https://images.meesho.com/images/products/16356117/7b8de_512.webp"
    },
    {
      "id": 4,
      "productName": "White Denim Jeans",       
      "productPrice": "₹329",
      "productImage": "https://images.meesho.com/images/products/242736814/1hocz_512.webp"
    },
    {
      "id": 5,
      "productName": "Cotton Fleece Jacket",    
      "productPrice": "₹467",
      "productImage": "https://images.meesho.com/images/products/471542815/xjoy1_512.webp"
    },
    {
      "id": 6,
      "productName": "Winter Cotton Joggers",
      "productPrice": "₹459",
      "productImage": "https://images.meesho.com/images/products/471562249/uti8t_512.webp"
    },
    {
      "id": 7,
      "productName": "Kasavu Silk Saree",
      "productPrice": "₹374",
      "productImage": "https://images.meesho.com/images/products/248456787/2sftu_512.webp"
    },
    {
      "id": 8,
      "productName": "Black Balclavaa",
      "productPrice": "₹129",
      "productImage": "https://images.meesho.com/images/products/15814583/7r2tg_512.webp"
    },
    {
      "id": 9,
      "productName": "WESTERN DRESS",
      "productPrice": "₹214",
      "productImage": "https://images.meesho.com/images/products/199202417/ryxwj_512.webp"
    },
    {
      "id": 10,
      "productName": "CASUAL LATEST WOMEN JEENS",
      "productPrice": "₹285",
      "productImage": "https://images.meesho.com/images/products/258287331/jyoaq_512.webp"
    },
    {
      "id": 11,
      "productName": "Denim Jacket",    
      "productPrice": "₹799",
      "productImage": "https://images.meesho.com/images/products/467435320/w7ta7_400.webp"
    },
    {
      "id": 12,
      "productName": "Slim Fit Jeans",    
      "productPrice": "₹549",
      "productImage": "https://images.meesho.com/images/products/310668182/sjuog_400.webp"
    }
  ];

  // Use window.innerWidth to determine screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get products based on screen size
  const displayedProducts = isMobile ? products2.slice(0, 8) : products2;

  return (
    <div className='border w-full rounded-md p-3 md:w-[95%] lg:w-[95%] bg-white'>
      <CategoryTitle title="Top Clothing Picks"/>
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
  );
}

export default TopClothingPicks;
