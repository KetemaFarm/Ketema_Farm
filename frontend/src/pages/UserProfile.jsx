import React from "react";
import profile from "../assets/profile.jpg";
import product from "../assets/product.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

export const loader = (store) => async () => {
  const state = store.getState();
  const user = state.userState.user;
  console.log(user.token);
  // const response = await customFetch.get("/auth/profile/", {
  //   headers: {
  //     Authorization: `Bearer ${user.token}`,
  //   },
  // });
  // console.log(response.data);
  // return response.data.lands;
};


const UserProfile = () => {
  const userPosts = useLoaderData();
  console.log(userPosts);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8 grid md:grid-cols-[300px_1fr] gap-8 mt-6"
    >
      {/* Profile Sidebar */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-green-100 h-fit sticky top-6"
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-green-50 shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
              <div className="bg-white rounded-full p-1">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <h2 className="text-xl font-bold font-['Rubik'] text-green-800">
              Welcome, {user.name}
            </h2>
            <p className="text-sm font-['Montserrat'] text-gray-500 mt-1">
              Member since {user.joined}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-['Kanit'] font-medium shadow-md hover:shadow-lg transition-all"
            onClick={handleLogout}
          >
            Logout
          </motion.button>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="">
        <h2 className="text-2xl font-bold font-['Rubik'] text-green-800 mb-6">
          Posted Products
        </h2>

        {products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-green-50 text-center"
          >
            <p className="font-['Montserrat'] text-gray-500">
              You haven't posted any products yet.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl shadow-md bg-white overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.productImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-2 text-green-600 text-sm font-medium font-['Kanit']">
                    <HiLocationMarker className="w-4 h-4 mr-1 text-green-500" />
                    {product.location}
                  </div>

                  <h3 className="font-bold font-['Rubik'] text-lg text-gray-800 mb-2">
                    {product.title}
                  </h3>

                  <p className="font-['Montserrat'] text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="font-['Kanit'] font-bold text-green-700">
                      {product.price}
                    </span>
                    <span className="font-['Montserrat'] text-xs text-gray-500">
                      Sold by: {product.seller}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-['Kanit'] transition-colors"
                  >
                    <FaTrashAlt className="w-4 h-4" />
                    DELETE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserProfile;
