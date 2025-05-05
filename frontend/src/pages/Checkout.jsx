import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
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
  // const navigate = useNavigate();
  const handlePayment = () => {
    window.location.href =
      "https://checkout.chapa.co/checkout/payment/5keEqW8jliqowNdtw8kSDSDvwYX0bGIXWAdRSikciDYXY";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen font-['Montserrat']">
      {/* Header with Farm Illustration */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 font-['Rubik'] mb-2">
          Fresh Harvest Delivery
        </h1>
        <div className="w-24 h-1 bg-green-300 mx-auto mb-4"></div>
        <p className="text-green-600 font-['Kanit']">
          Straight from our organic farms to your table
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
          <h1 className="text-3xl font-bold font-['Rubik']">
            Complete Your Organic Purchase
          </h1>
          <p className="text-green-100 font-['Kanit'] mt-1">
            Farm-fresh goodness delivered with care
          </p>
        </div>

        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
          {/* Left Column - Order Details */}
          <div>
            {/* Order Summary */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3 shadow-inner">
                  <FiPackage className="text-green-700 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 font-['Rubik']">
                  Your Organic Basket
                </h2>
              </div>

              <div className="border-2 border-green-100 rounded-xl p-5 bg-gradient-to-b from-green-50 to-white">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-3 border-b border-green-100">
                    <div>
                      <p className="font-medium text-gray-800">
                        Organic Tomatoes
                      </p>
                      <p className="text-sm text-gray-500 font-['Kanit']">
                        2kg, vine-ripened
                      </p>
                    </div>
                    <span className="font-medium text-green-700">$6.00</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-green-100">
                    <div>
                      <p className="font-medium text-gray-800">
                        Heirloom Seed Pack
                      </p>
                      <p className="text-sm text-gray-500 font-['Kanit']">
                        5 varieties
                      </p>
                    </div>
                    <span className="font-medium text-green-700">$2.50</span>
                  </li>
                </ul>

                <div className="mt-6 space-y-3">
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
                  <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t-2 border-green-200 text-green-700">
                    <span>Total</span>
                    <span>
                      {deliveryMethod === "delivery" ? "$10.50" : "$8.50"}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3 shadow-inner">
                  <FiTruck className="text-green-700 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 font-['Rubik']">
                  Delivery Options
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                      deliveryMethod === "pickup"
                        ? "border-emerald-500 bg-emerald-50 shadow-inner"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          deliveryMethod === "pickup"
                            ? "border-emerald-600 bg-emerald-600 shadow-sm"
                            : "border-gray-300"
                        }`}
                      >
                        {deliveryMethod === "pickup" && (
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">Farm Pickup</p>
                        <p className="text-sm text-gray-500 font-['Kanit']">
                          Collect from our local farm
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                      deliveryMethod === "delivery"
                        ? "border-emerald-500 bg-emerald-50 shadow-inner"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          deliveryMethod === "delivery"
                            ? "border-emerald-600 bg-emerald-600 shadow-sm"
                            : "border-gray-300"
                        }`}
                      >
                        {deliveryMethod === "delivery" && (
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">
                          Home Delivery
                        </p>
                        <p className="text-sm text-gray-500 font-['Kanit']">
                          $2.00 delivery fee
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                {deliveryMethod === "delivery" && (
                  <div className="space-y-4 mt-4 animate-fadeIn">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FiMapPin />
                      </div>
                      <input
                        className="pl-10 w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all"
                        type="text"
                        placeholder="Location / Area"
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FiHome />
                      </div>
                      <input
                        className="pl-10 w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all"
                        type="text"
                        placeholder="Street or House Name"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute top-3 left-3 text-gray-400">
                        <FiInfo />
                      </div>
                      <textarea
                        className="pl-10 w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all"
                        placeholder="Delivery Instructions (optional)"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div>
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3 shadow-inner">
                  <FiUser className="text-green-700 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 font-['Rubik']">
                  Your Information
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']">
                    Full Name
                  </label>
                  <input
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']">
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all"
                    type="tel"
                    placeholder="+251 ___ ___ ___"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']">
                    Email (Optional)
                  </label>
                  <input
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </section>

            <div className="mt-8">
              <div className="mb-4 flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 mr-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-2 border-gray-300 rounded transition-all"
                  required
                />
                <label
                  htmlFor="terms"
                  className="block text-sm text-gray-700 font-['Kanit']"
                >
                  I agree to the{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
                    terms and conditions
                  </a>{" "}
                  and understand my data will be handled in accordance with the{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-emerald-200 transition-all duration-300 flex items-center justify-center group"
              >
                <span className="font-['Rubik']">
                  Proceed to Secure Payment
                </span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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

              <div className="mt-4 text-center text-sm text-gray-500 font-['Kanit']">
                <p>Secure payment powered by Chapa</p>
                <div className="flex justify-center mt-2">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-green-300 opacity-50"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-8 text-sm text-gray-500 font-['Kanit']">
        <p>100% organic guarantee • Freshly harvested • Sustainable farming</p>
      </div>
    </div>
  );
};

export default Checkout;
