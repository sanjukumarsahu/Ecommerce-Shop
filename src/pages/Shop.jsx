import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Shop = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard product={product} key={product.id} />
        ))}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Shop;
