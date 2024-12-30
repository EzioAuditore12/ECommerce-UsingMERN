import React from 'react';
import RecommendedTiles from '@/shared/04_RecommendedTiles';

function NewRecommendations() {
  const recommendedProducts = [
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
    }
  ];

  return (
      <div className='flex flex-col gap-y-3 md:gap-y-0 md:gap-x-2 md:flex-row w-full lg:w-[95%]'>
          <RecommendedTiles products={recommendedProducts} />
          <RecommendedTiles products={recommendedProducts} />
          <RecommendedTiles products={recommendedProducts} />
        </div>
  );
}

export default NewRecommendations;