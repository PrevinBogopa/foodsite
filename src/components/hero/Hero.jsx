import React, { useState, useEffect } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from '../../assets/images/resturant.png';
import videoSource from "../../assets/images/backround.mp4";

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Go to previous slide"
    className="absolute left-1 lg:left-1 top-1/2 transform -translate-y-1/2 bg-yelloww text-white p-2 rounded-full z-30"
  >
    &#8249;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Go to next slide"
    className="absolute right-1 lg:right-1 top-1/2 transform -translate-y-1/2 bg-yelloww text-white p-2 rounded-full z-30"
  >
    &#8250;
  </button>
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Hero = () => {
 
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const buttonStyle = {
    textAlign: windowWidth < 640 ? 'center' : 'left',
  };
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
const imageStyle = {
  height: windowWidth < 640 ? '140px' : windowWidth < 768 ? '200px' : windowWidth < 1024 ? '330px' : windowWidth < 1280 ? '500px' : '600px',
  width: windowWidth < 640 ? '130px' : windowWidth < 768 ? '200px' : windowWidth < 1024 ? '280px' : windowWidth < 1280 ? '480px' : '570px',
  paddingTop: windowWidth >= 640 && windowWidth < 768 ? '50px' : windowWidth >= 768 && windowWidth < 1024 ? '120px' : windowWidth >= 1024 && windowWidth < 1280 ? '60px' : '0px',
};

  return (
    <div className="relative mt-0">
      <div className="absolute mt-0 top-0 inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="top-0 w-full h-full object-cover">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="inset-0 z-10 px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto gap-12 z-30 relative">
        <div className="z-30 mt-16 md:mt-0 md:pt-0 -mt-12">
      <img src={logo} alt="Restaurant Logo" style={imageStyle} />
    </div>
          <div className="w-full sm:w-1/2 z-30">
          <Carousel 
              responsive={responsive} 
              infinite={true} 
              autoPlay={true} 
              autoPlaySpeed={3000} 
              showDots={true}
              keyBoardControl={true}
              className="w-full mx-auto z-20 relative -mt-8"
              containerClass="relative"
              dotListClass="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            > 
<div className="w-full px-12">
  <h1 className="text-xl sm:text-3xl mb-4 font-semibold text-white w-3/4 sm:w-full leading-snug">
    Experience Authentic <span className="text-yellow">Shisanyama</span> at Our Restaurant
  </h1>
  <p className="text-white text-base mb-8">
    Indulge in the rich flavors of our traditional Shisanyama. From the grill to your plate, we promise a dining experience that's truly South African.
  </p>
</div>
<div className="w-full px-12">
  <h1 className="text-xl sm:text-3xl mb-4 font-semibold text-white w-3/4 sm:w-full leading-snug">
    Delicious & Authentic <span className="text-yellow">Shisanyama Dishes</span>
  </h1>
  <p className="text-white text-base mb-8">
    Experience the true taste of South African barbecue at our restaurant. Our Shisanyama dishes are prepared with care and served with love. Join us for a meal you won't forget.
  </p>
</div>
            </Carousel>
            <div className="mt-8 z-30" style={buttonStyle}>
    <a href="#contact">
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green">Order Now</button>
    </a>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

