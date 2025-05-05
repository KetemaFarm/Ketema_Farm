import React from "react";
import profile from "../assets/profile.jpg";
import product from "../assets/product.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { customFetch } from "../utils";

export const loader = (store) => async () => {
  const state = store.getState();
  const user = state.userState.user;
  console.log(user.token);
  const response = await customFetch.get("/auth/profile/", {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  console.log(response.data);
  return null;
};

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

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
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h2 className="text-lg font-semibold">Welcome, {user.name}</h2>
            <p className="text-sm text-gray-500">{user.joined}</p>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
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
