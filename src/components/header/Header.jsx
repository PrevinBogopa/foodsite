import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing the icons
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import im from "../../assets/images/resturant.png";
import logo from "../../assets/imagesAll/gdhf.png";

function Header() {
  const [nav, setNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array as dependency

  useEffect(() => {
    // Scroll to the top when the path changes
    window.scrollTo(0, 0);
    // Close the mobile nav menu after clicking a link
    setNav(false);
  }, [location.pathname]);

  return (
    <div className="flex fixed w-full top-0 justify-between bg-transparent backdrop-blur-2xl items-center mx-auto h-24 z-40 px-4 text-white">
 
      <div className={`flex-shrink-0 md:flex justify-start items-center ${nav && screenWidth < 768 ? "hidden" : "block"}`}>
        <img src={im} alt="app logo" className="hidden h-30 w-10 sm:w-35 2xl:w-35" />
        <img src={logo} alt="app logo" className="h-30 w-48" />
      </div>
      <div>
        <ul className="hidden md:flex flex-shrink-0">
          <NavLink to="/" className="p-4 text-primarygray hover:text-green px-12 text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
          <NavLink to="/about" className="p-4 text-primarygray hover:text-green px-12 text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
          <NavLink to="/menu" className="p-4 text-primarygray hover:text-green px-12 text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>Menu</NavLink>
          <NavLink to="/calendar" className="p-4 text-primarygray hover:text-green px-12 text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>Events</NavLink>
          <NavLink to="/contact" className="p-4 text-primarygray hover:text-green px-12 text-2xl font-bold" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
        </ul>
      </div>
      <div>
        <button className="hidden md:flex bg-primarygray hover:text-white px-8 py-2 text-xl hover:bg-red-500">Order now</button>
      </div>
      <div onClick={handleNav} className="block md:hidden p-2 bg-white rounded-lg shadow-lg">
        {nav ? <AiOutlineClose size={20} className="text-primarygray" /> : <AiOutlineMenu size={20} className="text-primarygray" />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[70%] h-full bg-[rgba(0,0,0,0.6)] z-45 backdrop-blur-2xl ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500 bg-white'}>
        <div className="flex mt-5 p-4">
          <img src={im} alt="app logo" className="h-10 w-10" />
          <img src={logo} alt="app logo" className="h-10 w-48 ml-2" />
        </div>
        <li className="p-4 border-b border-gray-600 bg-[rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <Link to="/" className="text-white" onClick={() => { window.scrollTo(0, 0); setNav(false); }}>Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600 bg-[rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <Link to="/about" className="text-white" onClick={() => { window.scrollTo(0, 0); setNav(false); }}>About</Link>
        </li>
        <li className="p-4 border-b border-gray-600 bg-[rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <Link to="/menu" className="text-white" onClick={() => { window.scrollTo(0, 0); setNav(false); }}>Menu</Link>
        </li>
        <li className="p-4 border-b border-gray-600 bg-[rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <Link to="/calendar" className="text-white" onClick={() => { window.scrollTo(0, 0); setNav(false); }}>Events</Link>
        </li>
        <li className="p-4 border-b border-gray-600 bg-[rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <Link to="/contact" className="text-white" onClick={() => { window.scrollTo(0, 0); setNav(false); }}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
