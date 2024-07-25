 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 
import logo from '../../assets/images/resturant.png'
 
 
import { Carousel } from "flowbite-react";

 
import videoSource from "../../assets/images/backround.mp4"; 

export const Hero = () => {
  return (
    <div className="relative mt-0"  >
      <div className="absolute mt-0 top-0 inset-0 z-0 overflow-hidden">
<video autoPlay loop muted playsInline className="top-0 w-full h-full object-cover">
    <source src={videoSource} type="video/mp4" />
    Your browser does not support the video tag.
</video>
      </div>
      <div className=" inset-0 z-10 px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
     
<Carousel className="w-full mx-auto z-20"   fade nav={false}>
  <div className="my-8 sm:my-28 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
  <div className="mx">
        <img src={logo} alt="" className="w-1/4 h-1/4 sm:w-1/3 sm:h-1/3 md:w-1/2 md:h-1/2 lg:w-full lg:max-w-2xl lg:max-h-2xl pt-10"/>
    </div>
    {/* hero text */}
    <div className="w-full sm:md:w-1/2">
        <h1 className="text-3xl sm:text-5xl mb-4 font-semibold text-white w-3/4 leading-snug">Delicious & Authentic <span className="text-yelloww leading-snug">Shisanyama Dishes</span></h1>
        <p className="text-white text-base mb-8">Experience the true taste of South African barbecue at our restaurant. Our Shisanyama dishes are prepared with care and served with love. Join us for a meal you won&apos;t forget.</p>
        <a href="#contact">
            <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green">Order Now</button>
        </a>  
    </div>
</div>
<div className="my-8 sm:my-28 py-12 flex flex-col sm:flex-row w-full mx-auto items-center justify-between gap-12">
<div className="mx">
        <img src={logo} alt="" className="w-1/4 h-1/4 sm:w-1/3 sm:h-1/3 md:w-1/2 md:h-1/2 lg:w-full lg:max-w-2xl lg:max-h-2xl pt-10"/>
    </div>
    {/* hero text */}
    <div className="w-full sm:w-1/2">
        <h1 className="text-3xl sm:text-5xl mb-4 font-semibold text-white w-3/4 sm:w-full leading-snug">Experience Authentic <span className="text-yelloww leading-snug">Shisanyama</span> at Our Restaurant</h1>
        <p className="text-white text-base mb-8">Indulge in the rich flavors of our traditional Shisanyama. From the grill to your plate, we promise a dining experience that&apos;s truly South African.</p>
        <a href="#contact">
            <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green">Order Now</button>
        </a>
    </div>
</div>
     
        </Carousel>
   
      </div>
    </div>
  );
};

export default Hero;