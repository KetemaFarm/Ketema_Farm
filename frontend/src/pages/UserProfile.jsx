import React from "react";
import profile from "../assets/profile.jpg";
import product from "../assets/product.jpg";
import { HiLocationMarker } from "react-icons/hi";

const UserProfile = () => {
  const user = {
    profileImage: profile,
    name: "Amanda",
    fullName: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    gender: "Female",
    country: "Location",
    joined: "Tue, 8th June 2022",
  };
  const products = Array(6).fill({
    productImage: product,
    title: "Fresh Organic Tomatoes",
    description: "Handpicked, pesticide-free tomatoes",
    price: "$2.00 per kg",
    location: "Addis",
    seller: "Farmer Mekdes",
  });
  return (
    <div className="p-4 md:p-8 grid md:grid-cols-[300px_1fr] gap-6 mt-26">
      <div className="bg-green-50 p-6 rounded-lg shadow-md  h-screen ">
        <div className="flex items-center justify-between">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h2 className="text-lg font-semibold">Welcome, {user.name}</h2>
            <p className="text-sm text-gray-500">{user.joined}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
            Edit
          </button>
        </div>
        <div className="mt-16">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={user.fullName}
            className="mt-1 w-full p-2 border rounded"
            readOnly
          />
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Gender
          </label>
          {/* <input
            type="text"
            value={user.gender}
            className="mt-1 w-full p-2 border rounded"
            readOnly
          /> */}
          <select
            className="w-full border px-1 py-2 rounded"
            value={user.gender}
            disabled
          >
            <option>Female</option>
            <option>Male</option>
          </select>
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Country
          </label>
          <input
            type="text"
            value={user.country}
            className="mt-1 w-full p-2 border rounded"
            readOnly
          />
          <div className="mt-24 text-sm text-gray-600">
            <p className="font-medium">My email address</p>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="">
        <h2 className="text-lg font-bold text-green-600 mb-4 ">
          Posted Products
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className=" rounded-xl shadow-lg bg-white">
              <img
                src={product.productImage}
                alt={product.title}
                className="w-full h-40 rounded-md object-cover mb-3"
              />
              <div className="p-3">
                <div className="flex items-center mb-2 text-green-600 text-sm font-medium">
                  <HiLocationMarker className="w-4 h-4 mr-1 text-green-500" />
                  {product.location}
                </div>
                <h3 className="font-bold text-base mb-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {product.description}
                </p>
                <p className="text-sm font-semibold">Price: {product.price}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Sold by: {product.seller}
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-red-600">
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
