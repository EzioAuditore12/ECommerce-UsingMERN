import ProductCard from '@/shared/01_productCard';
import CategoryTitle from '@/shared/02_categoryTitle';
import React from 'react';

function BestFitUser() {
  const handPickedProducts = [
    {
      productName: 'Nothing 2A Case',
      productImage: 'https://images.meesho.com/images/products/445353466/chmbr_400.webp',
    },
    {
      productName: 'Norde CE2 Case',
      productImage: 'https://images.meesho.com/images/products/331171650/zd31g_400.webp',
    },
    {
      productName: 'Classy Image Tempered Glass',
      productImage: 'https://images.meesho.com/images/products/57089139/qwkhf_400.webp',
    },
  ];

  return (
    <div className="w-full bg-white p-2 h-[550px]">
      <CategoryTitle title="HandPicked For you" />
      <div className="grid grid-cols-2 gap-4 place-items-center h-full w-full">
        {handPickedProducts.map((product, index) => (
          <div
            key={index}
            className={`grid w-full ${
              index === 0 ? 'row-span-2 h-full' : 'h-[250px]'
            }`}
          >
            <ProductCard
              arrowOpt={false}
              productName={product.productName}
              productImage={product.productImage}   
              customProductImgDimensions={
                index === 0 
                  ? 'h-[400px] w-full object-cover' 
                  : 'h-[180px] w-full object-cover'
              }
              flexClass={'flex-col'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestFitUser;