import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FeaturedLands } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { lands } from "../utils";
import { motion } from "framer-motion";
import { ScrollRestoration } from "react-router-dom";

export const loader = async () => {
  // const lands = await axios.get("http://localhost:8084/landPosts");

  // return { lands: lands.data };
  return null;
};

const SingleLand = () => {
  // const { lands } = useLoaderData();
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const { image, title, location, description, category, price } =
    lands[id - 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-24 px-4 md:px-8 lg:px-16"
      >
        <div className="mt-6 flex flex-col items-center gap-10 md:flex-row md:items-start lg:gap-16 xl:gap-24">
          {/* IMAGE */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>

          {/* PRODUCT INFO */}
          <motion.div
            variants={containerVariants}
            className="w-full md:w-1/2 lg:w-3/5 space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold font-['Rubik'] text-amber-800 text-center md:text-left"
            >
              {title}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-2 border border-amber-200 px-4 py-2 rounded-lg">
                <span className="font-['Rubik'] font-bold text-lg text-amber-800">
                  Category:
                </span>
                <p className="text-lg font-['Kanit'] capitalize px-3 py-1 rounded">
                  {category}
                </p>
              </div>

              <div className="flex items-center gap-2 border border-amber-200 px-4 py-2 rounded-lg">
                <span className="font-['Rubik'] font-bold text-lg text-amber-800">
                  Price:
                </span>
                <p className="text-lg font-['Kanit'] px-3 py-1 rounded">
                  {price} Br
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border border-amber-100 p-4 rounded-lg bg-white shadow-sm"
            >
              <h3 className="font-['Rubik'] font-bold text-lg text-amber-800 mb-2">
                Description:
              </h3>
              <p className="font-['Montserrat'] text-gray-700 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* AMOUNT */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-6 md:flex-row md:justify-between"
            >
              <div className="flex items-center gap-4 border border-amber-200 p-3 rounded-lg shadow-sm">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full text-amber-800 hover:bg-amber-50 transition-colors"
                  onClick={() => amount > 1 && setAmount(amount - 1)}
                >
                  <FaMinus className="text-sm" />
                </motion.button>
                <p className="font-['Montserrat'] font-bold text-xl w-10 text-center">
                  {amount}
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full text-amber-800 hover:bg-amber-50 transition-colors"
                  onClick={() => setAmount(amount + 1)}
                >
                  <FaPlus className="text-sm" />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-['Rubik'] font-bold rounded-lg shadow-md transition-all duration-300"
              >
                Rent Now
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center md:text-left mt-8"
            >
              <h4 className="text-xl text-gray-600 font-semibold font-['Rubik']">
                Located in <span className="text-amber-800">{location}</span>
              </h4>
            </motion.div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-20">
          <FeaturedLands />
        </motion.div>
      </motion.section>
      <ScrollRestoration />
    </>
  );
};
export default SingleLand;
