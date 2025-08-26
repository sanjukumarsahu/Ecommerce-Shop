import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    pinCode: "",
  });
  const navigate = useNavigate()
  const handleOrder = () => {
    const newOrder ={
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  };
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 ">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT </h3>
      <div>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className=" w-full md:w-2/3  ">
            <div className="border border-gray-300 rounded-lg shadow-lg p-2 mb-2">
              {/* Billing information */}
              <div
                className="flex  justify-between items-center "
                onClick={() => {
                  setBillingToggle(!billingToggle);
                }}
              >
                <h3 className="text-lg font-semibold mb-2 cursor-pointer">
                  Billing Information
                </h3>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border border-gray-300"
                  />
                </div>

                <div>
                  <div>
                    <label className="block text-gray-700 " htmlFor="">
                      Email
                    </label>
                    <input
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Phone
                    </label>
                    <input
                      type="to:telephone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* shipping */}
              <div
                className="flex  justify-between items-center "
                onClick={() => {
                  setShippingToggle(!shippingToggle);
                }}
              >
                <h3 className="text-lg font-semibold mb-2 cursor-pointer">
                  Shipping Information
                </h3>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    placeholder="Enter address"
                    className="w-full px-3 py-2 border border-gray-300"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <div>
                    <label className="block text-gray-700 " htmlFor="">
                      City
                    </label>
                    <input
                      name="city"
                      required
                      className="w-full px-3 py-2 border border-gray-300"
                      type="text"
                      placeholder="Enter city"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Pin code
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter pincode"
                      name="pincode"
                      className="w-full px-3 py-2 border border-gray-300"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          pin_code: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* {payment Method} */}
              <div
                className="flex  justify-between items-center "
                onClick={() => {
                  setPaymentToggle(!paymentToggle);
                }}
              >
                <h3 className="text-lg font-semibold mb-2 cursor-pointer">
                  Payment Method
                </h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div className="flex gap-2 ">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "COD"}
                    onChange={() => {
                      setPaymentMethod("COD");
                    }}
                  />
                  <label className="block text-gray-700" htmlFor="">
                    Cash on Delivery
                  </label>
                </div>

                <div className="flex gap-2 ">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "DC"}
                    onChange={() => {
                      setPaymentMethod("DC");
                    }}
                  />
                  <label className="block text-gray-700" htmlFor="">
                    Debit Card
                  </label>
                </div>

                {/* Debit Card Information */}
                {paymentMethod === "DC" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-semibold mb-1"
                        htmlFor=""
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Card Number"
                        className="border border-gray-400 p-2 w-full rounded bg-white "
                      ></input>
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 font-semibold mb-1"
                        htmlFor=""
                      >
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter card holder name"
                        className="border border-gray-400 p-2 w-full bg-white rounded mb-4"
                      ></input>
                    </div>

                    <div className="flex justify-between mb-4">
                      <div className="w-1/2 mr-2">
                        <label
                          className="block text-gray-700 font-semibold mb-2"
                          htmlFor=""
                        >
                          {" "}
                          Expire Date
                        </label>
                        <input
                          type="date"
                          placeholder="MM/YY"
                          required
                          className="border p-2 w-full rounded border-gray-400 bg-white"
                        />
                      </div>
                      <div className="w-1/2 ml-2">
                        <label
                          className="block text-gray-700 font-semibold mb-2"
                          htmlFor=""
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="CVV"
                          className="border border-gray-400 p-2 w-full rounded bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.products.map((product) => {
                return (
                  <div key={product.id} className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-center rounded "
                      />
                      <div className="ml-4">
                        <h4 className="text-md font-semibold">
                          {product.name}
                        </h4>
                        <p className="text-gray-600">
                          ${product.price}X{product.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-800">
                      ${(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span className="font-semibold">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="w-full bg-red-600 text-white py-2 px-4 rounded mt-6 hover:bg-red-700 cursor-pointer "
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
