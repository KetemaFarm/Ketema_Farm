import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import { generateAmountOptions } from "../utils";
import { FeaturedTools } from "../components";
import { tools } from "../utils";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
export const loader = async () => {
  // const tools = await axios.get("http://localhost:8085/toolPosts");
  // // const featuredTools = await axios.get("http://localhost:8082/featuredTools");

  // return { tools: tools.data };
  return null;
};

const SingleTool = () => {
  // const { tools } = useLoaderData();
  const { id } = useParams();
  const { image, title, location, description, category, price } =
    tools[id - 1];
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const cartProduct = {
    cartID: id + "tool",
    productID: id,
    image,
    title,
    price,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className="mt-6 flex flex-col items-center gap-6 px-4">
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
            className="capitalize text-3xl font-bold font-['Rubik'] text-center md:text-left text-gray-800 mb-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            {title}
          </motion.h1>

          <div className="flex flex-row gap-1 justify-center items-center mb-4 md:justify-start">
            <span className="font-['Rubik'] font-bold text-lg text-gray-800">
              category:
            </span>
            <p className="text-lg font-['Kanit']">{category}</p>
          </div>

          <div className="mb-8">
            <span className="font-['Rubik'] font-bold text-md text-gray-800">
              Description:
            </span>
            <p className="mt-1 leading-relaxed font-['Montserrat'] text-sm">
              {description}
            </p>
          </div>

          {/* AMOUNT CONTROLS */}
          <div className="flex flex-col items-center gap-8 mt-10 md:flex-row md:justify-between">
            <div className="flex flex-row gap-5 items-center bg-gray-100 px-4 py-2 rounded-full">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-gray-800 hover:text-gray-700 transition-colors"
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
                className="text-gray-800 hover:text-gray-700 transition-colors"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              >
                <FaPlus className="text-lg" />
              </motion.button>
            </div>

            <motion.button
              className="btn bg-gray-800 hover:bg-gray-700 text-white font-['Rubik'] px-8 py-3 rounded-full shadow-md transition-all"
              onClick={addToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to bag
            </motion.button>
          </div>

          <h4 className="text-xl text-gray-700 font-bold font-['Rubik'] text-center mt-12">
            Sold by {location}
          </h4>
        </div>
      </div>

      <motion.div
        className="w-full mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FeaturedTools />
      </motion.div>
    </section>
  );
};
export default SingleTool;
