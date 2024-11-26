import React from 'react';
import bannerBg from './Images/banner-bg.png';
import Header from './Header/header';
import Logo from './Logo/Logo';


function BannerContainer() {
  return (
    <div 
      className="h-auto w-[100%] float-left bg-[size:100%_100%] bg-no-repeat flex justify-center flex-col items-center" 
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
    <Header/>
    <Logo/>
    </div>
  );
}

export default BannerContainer;
