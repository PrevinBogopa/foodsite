import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";  // Import useLocation
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard";
import foodCategoryImg01 from "../assets/imagesAll/hamburger.png";
import foodCategoryImg02 from "../assets/imagesAll/pizza.png";
import bevIcon from "../assets/fake-data/bev_icvon.png";
import foodCategoryImg03 from "../assets/imagesAll/bread.png";
import streetchow_icon from "../assets/fake-data/streetchow_icon.png";

function Food() {
  const location = useLocation();  // Access location state
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  // Set category based on passed state (if available) when the component mounts
  useEffect(() => {
    if (location.state && location.state.category) {
      setCategory(location.state.category);
    }
  }, [location.state]);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    } else {
      const filteredProducts = products.filter(
        (item) => item.category === category
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="py-32 flex flex-col">
      <div className="mb-5">
        <div className="flex flex-col justify-center items-center gap-5 pb-5">
          <div>
            <h2 className="text-3xl text-red-500 font-bold">Popular Foods</h2>
          </div>
          <div className="bg-orange-100 flex flex-wrap w-full gap-4 justify-center items-center px-5 py-5">
            <button
              className="bg-white px-5 py-2"
              onClick={() => setCategory("ALL")}
            >
              All
            </button>
            <button className="flex gap-2 items-center" onClick={() => setCategory("Main_meals")}>
              <img src={foodCategoryImg03} alt="Bread" width={30} height={30} />
              Main meals
            </button>
            <button
              className="flex gap-2 items-center"
              onClick={() => setCategory("Street_Chow")}
            >
              <img src={streetchow_icon} alt="Street Chow" width={30} height={30} />
              Street Chow
            </button>
            <button className="flex gap-2 items-center" onClick={() => setCategory("PIZZA")}>
              <img src={foodCategoryImg02} alt="Pizza" width={30} height={30} />
              Pizza
            </button>
            <button className="flex gap-2 items-center" onClick={() => setCategory("Combos")}>
              <img src={foodCategoryImg03} alt="Combos" width={30} height={30} />
              Combos
            </button>
            <button className="flex gap-2 items-center" onClick={() => setCategory("Add_ons")}>
              <img src={foodCategoryImg03} alt="Add ons" width={30} height={30} />
              Add ons
            </button>
            <button className="flex gap-2 items-center" onClick={() => setCategory("Beverages")}>
              <img src={bevIcon} alt="Beverages" width={30} height={30} />
              Beverages
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {allProducts.map((item) => (
              <div key={item.id} className="w-full flex justify-center">
                <ProductCard item={item} className="max-w-xs" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
