import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import { generateAmountOptions } from "../utils";
import { addItem } from "../features/cart/cartSlice";
import { FeaturedProducts } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { products } from "../utils";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

export const loader = async () => {
  // const products = await axios.get("http://localhost:8083/products");

  // return { products: products.data };
  return null;
};

const SingleProduct = () => {
  // const { products } = useLoaderData();
  const { id } = useParams();
  const { image, title, farmerName, description, category, price } =
    products[id - 1];
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const cartProduct = {
    cartID: id + "product",
    productID: id,
    image,
    title,
    price,
    amount,
    farmerName,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <>
      <section className="mt-6 flex flex-col items-center gap-6 px-4">
        {/* Back button */}
        <Link
          to="/products"
          className="self-start flex items-center gap-2 text-green-800 hover:text-green-700 transition-colors font-['Rubik']"
        >
          <FaArrowLeft />
          <span>Back to products</span>
        </Link>

        {/* PRODUCT */}
        <div className="mt-6 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start lg:gap-16 max-w-6xl mx-auto">
          {/* IMAGE */}
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full max-w-md object-cover rounded-xl lg:max-w-lg"
            />
          </motion.div>
          {/* PRODUCT INFO */}
          <div className="max-w-md">
            <motion.h1
              className="capitalize text-3xl font-bold font-['Rubik'] text-center md:text-left text-green-800 mb-4"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-2xl font-['Kanit'] font-bold text-green-700 text-center md:text-left mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              ${price.toFixed(2)}{" "}
              {/* <span className="text-sm font-normal text-gray-500">/ {size}</span> */}
            </motion.p>

            <div className="flex flex-row gap-1 justify-center items-center mb-4 md:justify-start">
              <span className="font-['Rubik'] font-bold text-lg text-green-800">
                Category:
              </span>
              <p className="text-lg font-['Kanit'] capitalize">{category}</p>
            </div>

            <div className="flex flex-row gap-1 justify-center items-center mb-6 md:justify-start">
              <span className="font-['Rubik'] font-bold text-lg text-green-800">
                Farmer:
              </span>
              <p className="text-lg font-['Kanit']">{farmerName}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-['Rubik'] font-bold text-lg text-green-800 mb-2">
                Product Details:
              </h3>
              <p className="font-['Montserrat'] text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* AMOUNT CONTROLS */}
            <div className="flex flex-col items-center gap-8 mt-10 md:flex-row md:justify-between">
              <div className="flex flex-row gap-5 items-center bg-gray-100 px-4 py-2 rounded-full">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="text-green-800 hover:text-green-700 transition-colors"
                  onClick={() => {
                    if (amount > 1) setAmount(amount - 1);
                  }}
                >
                  <FaMinus className="text-lg" />
                </motion.button>

                <p className="font-['Montserrat'] font-bold text-lg w-10 text-center">
                  {amount}
                </p>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="text-green-800 hover:text-green-700 transition-colors"
                  onClick={() => {
                    setAmount(amount + 1);
                  }}
                >
                  <FaPlus className="text-lg" />
                </motion.button>
              </div>

              <motion.button
                className="btn bg-green-800 hover:bg-green-700 text-white font-['Rubik'] px-8 py-3 rounded-full shadow-md transition-all"
                onClick={addToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to bag - ${(price * amount).toFixed(2)}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <motion.div
          className="w-full mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FeaturedProducts />
        </motion.div>
      </section>
      <ScrollRestoration />
    </>
  );
};
export default SingleProduct;
