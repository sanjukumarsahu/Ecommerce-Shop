import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [search, setSearch] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };
  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md ">
      <div className="container  mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="md:text-2xl font-bold  font-serif bg-gradient-to-r from-blue-900  to-red-500 inline-block text-transparent bg-clip-text">
          <Link to="/">$-Shop</Link>
        </div>

        <div className="relative flex-1 mx-4  ">
          <form onSubmit={searchHandler}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        {/* shopping card */}
        <div className="flex items-center space-x-4 ">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>

          <button
            className="hidden md:block cursor-pointer "
            onClick={() => setIsModalOpen(true)}
          >
            Login | Sign Up
          </button>

          <button className=" block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-red-600 rounded-xl py-1 px-2 text-white " : null
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "bg-red-600 rounded-xl px-3 py-1  text-white" : null
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-red-600 rounded-xl py-1 px-2  text-white" : null
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-red-600 rounded-xl  py-1 px-2  text-white" : null
          }
        >
          About
        </NavLink>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <SignUp openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
