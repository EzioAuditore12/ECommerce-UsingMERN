import React from "react";
import CategoryTitle from "./02_categoryTitle";

const RecommendedTiles = ({ products }) => {
  return (
    <div className="w-full md:w-[50%] lg:w-[40%] bg-white p-2 h-auto">
      <CategoryTitle title="Recommended For You" />
      <div className="grid grid-cols-2 gap-4 place-items-center ">
        {products.map((product, index) => (
          <div key={index} className={`bg-white ${
            index === 0 ? 'row-span-2' : ''
          }`}>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <img
              src={product.productImage}
              alt={product.productName}
              className={`w-full ${
                index === 0 ? 'h-[60%] w-full md:w-[97%]' : 'h-[20%] w-[42%]'
              }`}
            />
            <div className="p-4">
              <h3 className="text-md font-medium text-gray-800 text-center">{product.productName}</h3>
              {product.productPrice && (
                <span className="text-gray-500 text-sm">₹{product.productPrice}</span>
              )}
            </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default RecommendedTiles;