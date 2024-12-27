import React from 'react';
import LanguageSelector from './01_LanguageSelector';
import Cart_User from './02_Cart_User';

function FirstPart() {
  return (
    <div className="flex justify-between text-white mb-3 md:mb-0 sm:order-1 gap-x-2" >
      {/* Language Selector */}
      <LanguageSelector/>

      {/* Cart and User Icons */}
      <Cart_User/>
</div>
  );
}

export default FirstPart;
