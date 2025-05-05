import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiTruck,
  FiPackage,
  FiUser,
  FiMapPin,
  FiHome,
  FiInfo,
} from "react-icons/fi";

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const navigate = useNavigate();

  const handlePayment = () => {
    window.location.href =
      "https://checkout.chapa.co/checkout/payment/5keEqW8jliqowNdtw8kSDSDvwYX0bGIXWAdRSikciDYXY";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-700 p-6 text-white">
          <h1 className="text-2xl font-bold">Complete Your Organic Purchase</h1>
          <p className="text-green-100">Fresh from farm to your home</p>
        </div>

        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
          {/* Left Column - Order Details */}
          <div>
            {/* Order Summary */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FiPackage className="text-green-700 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Organic Basket
                </h2>
              </div>

              <div className="border border-green-200 rounded-lg p-5 bg-green-50">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center pb-3 border-b border-green-100">
                    <div>
                      <p className="font-medium">Organic Tomatoes</p>
                      <p className="text-sm text-gray-500">2kg, vine-ripened</p>
                    </div>
                    <span className="font-medium">$6.00</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-green-100">
                    <div>
                      <p className="font-medium">Heirloom Seed Pack</p>
                      <p className="text-sm text-gray-500">5 varieties</p>
                    </div>
                    <span className="font-medium">$2.50</span>
                  </li>
                </ul>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>$8.50</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>
                      {deliveryMethod === "delivery" ? "$2.00" : "FREE"}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-green-200 text-green-700">
                    <span>Total</span>
                    <span>
                      {deliveryMethod === "delivery" ? "$10.50" : "$8.50"}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Method */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FiTruck className="text-green-700 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Delivery Options
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`flex-1 p-4 rounded-lg border-2 ${
                      deliveryMethod === "pickup"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    } transition-all`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                          deliveryMethod === "pickup"
                            ? "border-green-500 bg-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        {deliveryMethod === "pickup" && (
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-left">Farm Pickup</p>
                        <p className="text-sm text-gray-500 text-left">
                          Collect from our local farm
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`flex-1 p-4 rounded-lg border-2 ${
                      deliveryMethod === "delivery"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    } transition-all`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                          deliveryMethod === "delivery"
                            ? "border-green-500 bg-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        {deliveryMethod === "delivery" && (
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-left">Home Delivery</p>
                        <p className="text-sm text-gray-500 text-left">
                          $2.00 delivery fee
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                {deliveryMethod === "delivery" && (
                  <div className="space-y-3 mt-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMapPin className="text-gray-400" />
                      </div>
                      <input
                        className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        type="text"
                        placeholder="Location / Area"
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiHome className="text-gray-400" />
                      </div>
                      <input
                        className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        type="text"
                        placeholder="Street or House Name"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                        <FiInfo className="text-gray-400" />
                      </div>
                      <textarea
                        className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Delivery Instructions (optional)"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Column - Buyer Info */}
          <div>
            {/* Buyer Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FiUser className="text-green-700 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Information
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    type="tel"
                    placeholder="+251 ___ ___ ___"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </section>

            {/* Payment Button */}
            <div className="mt-8">
              <div className="mb-4 flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="block text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    terms and conditions
                  </a>{" "}
                  and understand my data will be handled in accordance with the{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <span>Proceed to Secure Payment</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Secure payment powered by Chapa</p>
                <div className="flex justify-center mt-2 space-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
