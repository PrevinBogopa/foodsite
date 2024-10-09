import { Delievery } from "../components/Delievery/Delievery";
import Hero  from "../components/hero/Hero";
import foodCategoryImg01 from "../assets/imagesAll/kotap.png";
  import { AiOutlineCheckCircle } from "react-icons/ai";
import foodCategoryImg03 from "../assets/imagesAll/pizzza.png";
import foodCategoryImg05 from "../assets/imagesAll/braii.png";
import foodCategoryImg07 from "../assets/imagesAll/bev.png";
import foodCategoryImg06 from "../assets/imagesAll/addon.png";
import whyImg from "../assets/imagesAll/location.png";
import order from "../assets/order-now.png";
import foodCategoryImg04 from "../assets/imagesAll/poto.png";
import Testimonials from "../components/UI/slider/Testimonials";
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
 
  return (
    <div>
      <Hero />
      {/* <FoodCard /> */}
      <Delievery />

      <h2 className="px-5 py-10 text-2xl font-bold mb-2 text-center">Don&apos;t <b className="text-red-500">Take our word</b> come and get a taste of our menu</h2>



      <div className="grid grid-cols-4 mx-auto max-w-7xl px-4 sm:px-3 lg:px-8 md:grid-cols-4 gap-4">

{/* Main Meals */}
<div className="relative col-span-2">
  <div className="image-overlay">
    <img className="h-auto w-full rounded-lg" src={foodCategoryImg04} alt="Main Meals" />
    <Link
      to={{
        pathname: "/menu",
      }}
      state={{ category: "Main_meals" }} // Passing state to the Food component
      className="z-10 absolute top-1 left-1/2 transform -translate-x-1/2"
    >
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green flex items-center justify-center gap-2">
        Order Now
      </button>
    </Link>
    <p className="sm:text-base text-sm">Main Meals</p>
  </div>
</div>

{/* Street Chow */}
<div className="relative col-span-2">
  <div className="image-overlay">
    <img className="h-auto max-w-full rounded-lg" src={foodCategoryImg01} alt="Street Chow" />
    <Link
      to={{
        pathname: "/menu",
      }}
      state={{ category: "Street_Chow" }} // Correct category for Street Chow
      className="z-10 absolute top-1 left-1/2 transform -translate-x-1/2"
    >
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green flex items-center justify-center gap-2">
        Order Now
      </button>
    </Link>
    <p className="sm:text-base text-sm">Street Chow</p>
  </div>
</div>

{/* Combo Meals */}
<div className="relative col-span-2">
  <div className="image-overlay">
    <img className="h-auto max-w-full rounded-lg" src={foodCategoryImg05} alt="Combo Meals" />
    <Link
      to={{
        pathname: "/menu",
      }}
      state={{ category: "Combos" }} // Correct category for Combo Meals
      className="z-10 absolute top-1 left-1/2 transform -translate-x-1/2"
    >
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green flex items-center justify-center gap-2">
        Order Now
      </button>
    </Link>
    <p className="sm:text-base text-sm">Combo Meals</p>
  </div>
</div>

{/* Pizza */}
<div className="relative col-span-2">
  <div className="image-overlay">
    <img className="h-auto max-w-full rounded-lg" src={foodCategoryImg03} alt="Pizza" />
    <Link
      to={{
        pathname: "/menu",
      }}
      state={{ category: "Pizza" }} // Correct category for Pizza
      className="z-10 absolute top-1 left-1/2 transform -translate-x-1/2"
    >
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green flex items-center justify-center gap-2">
        Order Now
      </button>
    </Link>
    <p className="sm:text-base text-sm">Pizza</p>
  </div>
</div>

{/* Add-ons */}
<div className="relative col-span-2">
  <div className="image-overlay">
    <img className="h-auto max-w-full rounded-lg" src={foodCategoryImg06} alt="Add ons" />
    <Link
      to={{
        pathname: "/menu",
      }}
      state={{ category: "Add_ons" }} // Correct category for Add-ons
      className="z-10 absolute top-1 left-1/2 transform -translate-x-1/2"
    >
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green flex items-center justify-center gap-2">
        Order Now
      </button>
    </Link>
    <p className="sm:text-base text-sm">Add ons</p>
  </div>
</div>

{/* Beverages */}
<div className="relative col-span-2">
  <div className="image-overlay">
    <img className="h-auto max-w-full rounded-lg" src={foodCategoryImg07} alt="Beverages" />
    <Link
      to={{
        pathname: "/menu",
      }}
      state={{ category: "Beverages" }} // Correct category for Beverages
      className="z-10 absolute top-1 left-1/2 transform -translate-x-1/2"
    >
      <button className="px-7 py-2 bg-yelloww text-white rounded hover:bg-green flex items-center justify-center gap-2">
        Order Now
      </button>
    </Link>
    <p className="sm:text-base text-sm">Beverages</p>
  </div>
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
 