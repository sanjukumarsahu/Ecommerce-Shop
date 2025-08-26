import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    // alert("Product Added Successfully")
    toast.success("Product Add successfully!");
  };

  return (
   <Link to = {`/product/${product.id}`}>
    <div className=" bg-white p-4 shadow-lg  rounded relative border border-gray-300 transform transition-transform duration-300 hover:scale-105 cursor-pointer  ">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-200 "
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add To Cart</span>
      </div>
    </div>
   </Link>
  );
};

export default ProductCard;
