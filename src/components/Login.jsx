import React from "react";

const Login = ({openSignUp}) => {

  return (
    <div className=" "  >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="email"
            placeholder="Enter Email"
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
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center" htmlFor="">
            <input className="form-checkbox" type="checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600  text-white py-2 cursor-pointer">
            Login
          </button>
        </div>
      </form>
      <div className="text-center space-x-2">
        <span className="text-gray-700">Don't Have a Account</span>
        <button className="text-red-800 cursor-pointer" onClick={openSignUp}> Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
