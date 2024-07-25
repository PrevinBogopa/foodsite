import { useState } from "react";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useEffect } from "react";
import foodCategoryImg01 from "../assets/imagesAll/hamburger.png";
import foodCategoryImg02 from "../assets/imagesAll/pizza.png";
import foodCategoryImg03 from "../assets/imagesAll/bread.png";
function Food() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "Street_Chow") {
      const filteredProducts = products.filter(
        (item) => item.category === "Street_Chow"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
 
    return(
        <div className="py-32 flex flex-col">
      <div className="mb-5">
        <div className="flex flex-col justify-center items-center gap-5 pb-5">
          <div>
            <h2 className="text-3xl text-red-500 font-bold">Popular Foods</h2>
          </div>
          <div className="bg-orange-100 flex w-9/12 gap-10 justify-center items-center px-5 py-5">
            <button
              className="bg-white px-5 py-2"
              onClick={() => setCategory("ALL")}
            >
              All
            </button>
            <button
              className="flex gap-2"
              onClick={() => setCategory("Street_Chow")}
            >
              <img src={foodCategoryImg01} alt="" width={30} height={30} />
              Street Chow
            </button>
            <button className="flex gap-2" onClick={() => setCategory("PIZZA")}>
              <img src={foodCategoryImg02} alt="" width={30} height={30} />
              Pizza
            </button>
            <button className="flex gap-2" onClick={() => setCategory("BREAD")}>
              <img src={foodCategoryImg03} alt="" width={30} height={30} />
            MainMeals
            </button>
            <button className="flex gap-2" onClick={() => setCategory("BREAD")}>
              <img src={foodCategoryImg03} alt="" width={30} height={30} />
            Combo Meals
            </button>

            <button className="flex gap-2" onClick={() => setCategory("BREAD")}>
              <img src={foodCategoryImg03} alt="" width={30} height={30} />
            Add ons
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {allProducts.map((item) => (
  <div key={item.id}>
    <ProductCard item={item} />
  </div>
))}
          </div>
        </div>
      </div>
        </div>
    )
}

export default Food