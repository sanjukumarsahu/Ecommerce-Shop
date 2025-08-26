import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/images/heroImage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import { Toaster } from "react-hot-toast";
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <>
      <div className="bg-white  mt-2 px-4 md:px-16 lg:px-24 ">
        <div className="container mx-auto flex flex-col md:flex-row space-x-2">
          {/* //category */}
          <div className="w-full md:w-3/12  ">
            <div className="bg-red-600 text-white tex-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 md:space-y-9.5 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className=" flex items-center text-sm font-medium "
                >
                  {" "}
                  <div className="w-2 h-2 border-red-500 border rounded-full mr-2"></div>{" "}
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Images */}
          <div className=" w-full md:w-9/12 mt-8 md:mt-0 h-96 relative z-1 ">
            <img
              src={HeroImage}
              alt="kid_Shopping"
              className="w-full h-full "
            />
            <div className="absolute top-16 left-8">
              <p className="text-gray-600 mb-4 ">Code With Sanju</p>
              <h2 className="text-xl lg:text-3xl font-bold">
                WELCOME TO{" "}
                <span className="md:text-3xl font-bold  font-serif bg-gradient-to-r from-blue-900  to-red-500 inline-block text-transparent bg-clip-text">
                  $-SHOP
                </span>{" "}
              </h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((product, index) => (
              <ProductCard product={product} key={product.id} />
            ))}
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </div>
      </div>
      <Shop />
    </>
  );
};

export default Home;
