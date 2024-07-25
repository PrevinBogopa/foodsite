import { Delievery } from "../components/Delievery/Delievery";
import Hero  from "../components/hero/Hero";
import foodCategoryImg01 from "../assets/imagesAll/kotap.png";
  import { AiOutlineCheckCircle } from "react-icons/ai";
import foodCategoryImg03 from "../assets/imagesAll/pizzza.png";
import foodCategoryImg05 from "../assets/imagesAll/braii.png";
import foodCategoryImg06 from "../assets/imagesAll/addon.png";
import whyImg from "../assets/imagesAll/location.png";
import foodCategoryImg04 from "../assets/imagesAll/poto.png";
import Testimonials from "../components/UI/slider/Testimonials";
import './Home.css';
function Home() {
 
  return (
    <div>
      <Hero />
      {/* <FoodCard /> */}
      <Delievery />

      <h2 className="px-5 py-10 text-2xl font-bold mb-2 text-center">Don&apos;t <b className="text-red-500">Take our word</b> come and get a taste of our menu</h2>



      <div className="grid grid-cols-2  mx-auto max-w-7xl px-4 sm:px-3 lg:px-8  md:grid-cols-2 gap-4">
 
      <div className="image-overlay hover:shadow-lg dark:hover:shadow-black/30">
        <img className="h-auto max-w-full rounded-lg " src={ foodCategoryImg01} alt=""/>
<p className="sm:text-base text-sm">Street Chow</p>
    </div>
    <div className="image-overlay">
        <img className="h-auto max-w-full rounded-lg"  src={ foodCategoryImg03}  alt=""/>
        <p className="sm:text-base text-sm">Pizza</p>
    </div>
    <div className="col-span-2 image-overlay">
        <img className="h-auto w-full rounded-lg"  src={ foodCategoryImg04}  alt=""/>
        <p className="sm:text-base text-sm">Main Meals</p>
    </div>
    <div className="image-overlay">
        <img className="h-auto max-w-full rounded-lg"  src={ foodCategoryImg05}  alt=""/>
        <p className="sm:text-base text-sm">Combo Meals</p>
    </div>
    <div className="image-overlay">
        <img className="h-auto max-w-full rounded-lg"  src={ foodCategoryImg06}  alt=""/>
        <p className="sm:text-base text-sm">Add ons</p>
    </div>
 
</div>


 


<section className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-40">

  <div className="col-span-1 flex flex-col mt-4 pt-7 md:mt-10 lg:mt-52 px-5 md:px-10 md:ml-5 md:px-20">
    <div className="flex flex-col justify-center items-center text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Why <b className="text-red-600">Sha&apos;p Braai</b>?
      </h3>
      <p className="text-base md:text-lg mt-2">
        <span className="text-red-500">Sha&apos;p Braai</span> is a revolutionary Shisanyama business designed to make your dining experience more convenient, enjoyable, and hassle-free. With a wide range of cuisines and options at your fingertips, you can satisfy your cravings in just a few taps. Experience the rich, smoky flavors of our traditional braai, prepared with love and served with a smile.
      </p>
    </div>
    <div className="flex flex-col mt-4 space-y-2">
      <div className="flex items-center">
        <AiOutlineCheckCircle size={20} className="text-red-500 mr-2" />
        <span>Fresh and tasty foods</span>
      </div>
      <div className="flex items-center">
        <AiOutlineCheckCircle size={20} className="text-red-500 mr-2" />
        <span>Quality Support</span>
      </div>
      <div className="flex items-center">
        <AiOutlineCheckCircle size={20} className="text-red-500 mr-2" />
        <span>Best Service guaranteed</span>
      </div>
    </div>
  </div>
  <div className="col-span-1 md:mt-10">
    <img src={whyImg} alt="" className="w-full" />
  </div>
</section>

      <section className=" ">
        <Testimonials/>
      </section>
    </div>
  );
}

export default Home;
 