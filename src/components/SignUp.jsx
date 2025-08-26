import React from "react";

const SignUp = ({openLogin}) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
            type="password"
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600  text-white py-2 cursor-pointer">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center space-x-2">
        <span className="text-gray-700">Already Have a Account</span>
        <button className="text-red-800 cursor-pointer" onClick={openLogin}>Login Up</button>
      </div>
    </div>
  );
};

export default SignUp;
