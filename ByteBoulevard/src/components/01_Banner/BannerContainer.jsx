import React from 'react';
import bgImg from './Images/banner-bg.png'
import Header from './01_Header/Header'
import Logo from './02_Logo/Logo';
import Main_Header from './03_mainHeader/Main_Header';
import Carousel from './04_Corousel/Corousel';
function BannerContainer() {
  return (
    <div className="mb-5 md:mb-11 bg-center bg-cover h-auto w-[100%] flex items-center flex-col p-4 "  style={{ backgroundImage: `url(${bgImg})` }}>
    <Header/>
    <Logo/>
    <Main_Header/>
    <Carousel/>
    </div>
  );
}

export default BannerContainer;
