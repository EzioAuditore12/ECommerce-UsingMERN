import React from 'react';
import RecommendedTiles from '@/shared/04_RecommendedTiles';

function NewRecommendations() {
  const clothesProducts = [
    {
      productName: 'Elegant Summer Dress',
      productImage: 'https://images.meesho.com/images/products/470166777/lywtz_400.webp',
    },
    {
      productName: 'Classic Denim Jacket',
      productImage: 'https://images.meesho.com/images/products/367735500/cz4ra_400.webp',
    },
    {
      productName: 'Casual Cotton T-Shirt',
      productImage: 'https://images.meesho.com/images/products/469620881/0dmrc_400.webp',
    },
  ];

  const shoesProducts = [
    {
      productName: 'Stylish Sneakers',
      productImage: 'https://images.meesho.com/images/products/281947952/nl3k3_400.webp',
    },
    {
      productName: 'Formal Leather Shoes',
      productImage: 'https://images.meesho.com/images/products/292821808/facxo_400.webp',
    },
    {
      productName: 'Comfortable Sandals',
      productImage: 'https://images.meesho.com/images/products/161423906/jxsvo_400.webp',
    },
  ];

  const cosmeticsProducts = [
    {
      productName: 'Matte Lipstick',
      productImage: 'https://images.meesho.com/images/products/304021854/svrlj_400.webp',
    },
    {
      productName: 'Hydrating Foundation',
      productImage: 'https://images.meesho.com/images/products/354090938/fdran_400.webp',
    },
    {
      productName: 'Eyeliner Pencil',
      productImage: 'https://images.meesho.com/images/products/312890115/oq59g_400.webp',
    },
  ];

  return (
      <div className='flex flex-col gap-y-3 md:gap-y-0 md:gap-x-2 md:flex-row w-full lg:w-[95%]'>
          <RecommendedTiles products={clothesProducts} />
          <RecommendedTiles products={shoesProducts} />
          <RecommendedTiles products={cosmeticsProducts} />
        </div>
  );
}

export default NewRecommendations;