import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import { generateAmountOptions } from "../utils";
import { FeaturedTools } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
export const loader = async () => {
  // const tools = await axios.get("http://localhost:8085/toolPosts");
  // // const featuredTools = await axios.get("http://localhost:8082/featuredTools");

  // return { tools: tools.data };
  return null;
};

const tools = [
  {
    id: 1,
    title: "Tool 1",
    description: "This is a high-quality tool 1 for urban farming.",
    category: "pesticide",
    price: 35.76,
    location: "Jimma",
    image: "https://example.com/tool_images/tool_1.jpg",
  },
  {
    id: 2,
    title: "Tool 2",
    description: "This is a high-quality tool 2 for urban farming.",
    category: "starter-kit",
    price: 64.11,
    location: "Dessie",
    image: "https://example.com/tool_images/tool_2.jpg",
  },
  {
    id: 3,
    title: "Tool 3",
    description: "This is a high-quality tool 3 for urban farming.",
    category: "fertilizer",
    price: 60.46,
    location: "Mekelle",
    image: "https://example.com/tool_images/tool_3.jpg",
  },
  {
    id: 4,
    title: "Tool 4",
    description: "This is a high-quality tool 4 for urban farming.",
    category: "pesticide",
    price: 59.22,
    location: "Hawassa",
    image: "https://example.com/tool_images/tool_4.jpg",
  },
  {
    id: 5,
    title: "Tool 5",
    description: "This is a high-quality tool 5 for urban farming.",
    category: "fertilizer",
    price: 14.38,
    location: "Adama",
    image: "https://example.com/tool_images/tool_5.jpg",
  },
  {
    id: 6,
    title: "Tool 6",
    description: "This is a high-quality tool 6 for urban farming.",
    category: "fertilizer",
    price: 31.14,
    location: "Bahir Dar",
    image: "https://example.com/tool_images/tool_6.jpg",
  },
  {
    id: 7,
    title: "Tool 7",
    description: "This is a high-quality tool 7 for urban farming.",
    category: "fertilizer",
    price: 29.98,
    location: "Hawassa",
    image: "https://example.com/tool_images/tool_7.jpg",
  },
  {
    id: 8,
    title: "Tool 8",
    description: "This is a high-quality tool 8 for urban farming.",
    category: "fertilizer",
    price: 51.11,
    location: "Dire Dawa",
    image: "https://example.com/tool_images/tool_8.jpg",
  },
  {
    id: 9,
    title: "Tool 9",
    description: "This is a high-quality tool 9 for urban farming.",
    category: "fertilizer",
    price: 14.88,
    location: "Dessie",
    image: "https://example.com/tool_images/tool_9.jpg",
  },
  {
    id: 10,
    title: "Tool 10",
    description: "This is a high-quality tool 10 for urban farming.",
    category: "fertilizer",
    price: 51.06,
    location: "Bahir Dar",
    image: "https://example.com/tool_images/tool_10.jpg",
  },
  {
    id: 11,
    title: "Tool 11",
    description: "This is a high-quality tool 11 for urban farming.",
    category: "starter-kit",
    price: 14.25,
    location: "Dire Dawa",
    image: "https://example.com/tool_images/tool_11.jpg",
  },
  {
    id: 12,
    title: "Tool 12",
    description: "This is a high-quality tool 12 for urban farming.",
    category: "starter-kit",
    price: 38.09,
    location: "Harar",
    image: "https://example.com/tool_images/tool_12.jpg",
  },
  {
    id: 13,
    title: "Tool 13",
    description: "This is a high-quality tool 13 for urban farming.",
    category: "starter-kit",
    price: 51.75,
    location: "Mekelle",
    image: "https://example.com/tool_images/tool_13.jpg",
  },
  {
    id: 14,
    title: "Tool 14",
    description: "This is a high-quality tool 14 for urban farming.",
    category: "pesticide",
    price: 64.57,
    location: "Jimma",
    image: "https://example.com/tool_images/tool_14.jpg",
  },
  {
    id: 15,
    title: "Tool 15",
    description: "This is a high-quality tool 15 for urban farming.",
    category: "pesticide",
    price: 60.01,
    location: "Addis Ababa",
    image: "https://example.com/tool_images/tool_15.jpg",
  },
  {
    id: 16,
    title: "Tool 16",
    description: "This is a high-quality tool 16 for urban farming.",
    category: "pesticide",
    price: 53.85,
    location: "Harar",
    image: "https://example.com/tool_images/tool_16.jpg",
  },
  {
    id: 17,
    title: "Tool 17",
    description: "This is a high-quality tool 17 for urban farming.",
    category: "fertilizer",
    price: 86.14,
    location: "Adama",
    image: "https://example.com/tool_images/tool_17.jpg",
  },
  {
    id: 18,
    title: "Tool 18",
    description: "This is a high-quality tool 18 for urban farming.",
    category: "containers",
    price: 26.99,
    location: "Adama",
    image: "https://example.com/tool_images/tool_18.jpg",
  },
  {
    id: 19,
    title: "Tool 19",
    description: "This is a high-quality tool 19 for urban farming.",
    category: "containers",
    price: 28.58,
    location: "Hawassa",
    image: "https://example.com/tool_images/tool_19.jpg",
  },
  {
    id: 20,
    title: "Tool 20",
    description: "This is a high-quality tool 20 for urban farming.",
    category: "fertilizer",
    price: 80.36,
    location: "Bahir Dar",
    image: "https://example.com/tool_images/tool_20.jpg",
  },
];

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
