import React from "react";
import manCategory from "../assets/Images-main/man.png";
import WomanCategory from "../assets/Images-main/woman.png";
import kidsCategory from "../assets/Images-main/kid.png";

const categories = [
  {
    title: "Men",
    imageUrl: manCategory,
  },
  {
    title: "women",
    imageUrl: WomanCategory,
  },
  {
    title: "Kids",
    imageUrl: kidsCategory,
  },
];
const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-col-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((item, index) => {
        return (
          <div
            key={index}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105 "
          >
            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-full rounded-lg shadow-md"
            />
            <div className="absolute top-20 left-12">
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-gray-600">View All</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
