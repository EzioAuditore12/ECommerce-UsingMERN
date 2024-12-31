import React from 'react';
import PropTypes from 'prop-types';

function AddCard({ logoImage, title, description, productImage, backgroundUrl }) {
  return (
    <div
      className="flex flex-col bg-cover bg-center w-full max-w-xs h-[300px] border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
      style={{
        backgroundImage: `url(${backgroundUrl || 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop'})`,
      }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md mt-3 mx-auto">
        <img
          src={logoImage}
          alt={`${title} logo`}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Product Image - Crop from bottom */}
      <div className="flex items-center justify-center overflow-hidden h-32">
        <img
          src={productImage}
          alt={`${title} product`}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-3 bg-opacity-80 bg-black text-white">
        <h3 className="text-base font-bold mb-1 truncate">{title}</h3>
        <p className="text-xs mb-2 opacity-90 line-clamp-2">{description}</p>

        {/* Shop Now Button */}
        <button
          className="bg-white text-black px-3 py-1 rounded-full text-xs 
            hover:bg-opacity-90 transition-all duration-300"
          type="button"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

AddCard.propTypes = {
  logoImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string,
};

AddCard.defaultProps = {
  backgroundUrl: '',
};

export default AddCard;
