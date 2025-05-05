import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FeaturedLands } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
export const loader = async () => {
  // const lands = await axios.get("http://localhost:8084/landPosts");

  // return { lands: lands.data };
  return null;
};

const lands = [
  {
    id: 1,
    title: "Sunny Rooftop in Bole",
    description:
      "Perfect rooftop space with direct sunlight, ideal for small-scale vegetable farming.",
    location: "Bole, Addis Ababa",
    image: "https://example.com/images/rooftop1.jpg",
    category: "rooftop",
    price: 1000,
  },
  {
    id: 2,
    title: "Balcony Space in Condominium",
    description: "Cozy balcony space suitable for herb and vertical farming.",
    location: "CMC, Addis Ababa",
    image: "https://example.com/images/balcony1.jpg",
    category: "balcony",
    price: 500,
  },
  {
    id: 3,
    title: "Backyard Land for Lease",
    description: "100 sqm land available for planting seasonal crops.",
    location: "Sarbet, Addis Ababa",
    image: "https://example.com/images/land1.jpg",
    category: "land",
    price: 2500,
  },
  {
    id: 4,
    title: "Urban Rooftop with Water Access",
    description:
      "Spacious rooftop with built-in water tank, great for hydroponics.",
    location: "Lideta, Addis Ababa",
    image: "https://example.com/images/rooftop2.jpg",
    category: "rooftop",
    price: 1500,
  },
  {
    id: 5,
    title: "Spare Balcony in Apartment",
    description: "East-facing balcony with good morning sun for indoor plants.",
    location: "Megenagna, Addis Ababa",
    image: "https://example.com/images/balcony2.jpg",
    category: "balcony",
    price: 600,
  },
  {
    id: 6,
    title: "Empty Plot in Gullele",
    description:
      "120 sqm fenced land, secure and suitable for cooperative gardening.",
    location: "Gullele, Addis Ababa",
    image: "https://example.com/images/land2.jpg",
    category: "land",
    price: 3000,
  },
  {
    id: 7,
    title: "Rooftop Garden Opportunity",
    description:
      "Flat concrete rooftop ideal for setting up container gardens.",
    location: "Kirkos, Addis Ababa",
    image: "https://example.com/images/rooftop3.jpg",
    category: "rooftop",
    price: 1200,
  },
  {
    id: 8,
    title: "Small Land Patch Near School",
    description: "Suitable for leafy greens or educational farming projects.",
    location: "Gelan, Oromia",
    image: "https://example.com/images/land3.jpg",
    category: "land",
    price: 1800,
  },
  {
    id: 9,
    title: "Balcony with Shade Net",
    description:
      "South-facing balcony with netted covering for plant protection.",
    location: "Ayat, Addis Ababa",
    image: "https://example.com/images/balcony3.jpg",
    category: "balcony",
    price: 700,
  },
  {
    id: 10,
    title: "Unfinished Rooftop in New Building",
    description: "Raw rooftop surface ready to be customized for farming.",
    location: "Summit, Addis Ababa",
    image: "https://example.com/images/rooftop4.jpg",
    category: "rooftop",
    price: 1100,
  },
  {
    id: 11,
    title: "Accessible Land for Rent",
    description: "Corner plot with road access, ideal for vegetable plots.",
    location: "Burayu, Oromia",
    image: "https://example.com/images/land4.jpg",
    category: "land",
    price: 2200,
  },
  {
    id: 12,
    title: "Compact Balcony in Studio Apartment",
    description: "Great for 1-2 grow boxes or vertical planters.",
    location: "Piasa, Addis Ababa",
    image: "https://example.com/images/balcony4.jpg",
    category: "balcony",
    price: 400,
  },
  {
    id: 13,
    title: "Large Rooftop with City View",
    description: "200 sqm space, suitable for collective urban farming groups.",
    location: "Kazanchis, Addis Ababa",
    image: "https://example.com/images/rooftop5.jpg",
    category: "rooftop",
    price: 2000,
  },
  {
    id: 14,
    title: "Shaded Land in Quiet Area",
    description: "Perfect for partial-sun crops like ginger or turmeric.",
    location: "Addis Ketema, Addis Ababa",
    image: "https://example.com/images/land5.jpg",
    category: "land",
    price: 1600,
  },
  {
    id: 15,
    title: "Corner Balcony in Duplex",
    description: "Receives great airflow and afternoon sun.",
    location: "Merkato, Addis Ababa",
    image: "https://example.com/images/balcony5.jpg",
    category: "balcony",
    price: 650,
  },
  {
    id: 16,
    title: "Private Rooftop with Stairs",
    description:
      "Easy access via external stairs; ideal for a rooftop greenhouse.",
    location: "Jemo, Addis Ababa",
    image: "https://example.com/images/rooftop6.jpg",
    category: "rooftop",
    price: 1300,
  },
  {
    id: 17,
    title: "Community Garden Land Plot",
    description:
      "Shared space with other urban farmers, 50 sqm allocated per person.",
    location: "Asko, Addis Ababa",
    image: "https://example.com/images/land6.jpg",
    category: "land",
    price: 1000,
  },
  {
    id: 18,
    title: "Shady Balcony for Herbs",
    description: "Partial sun, ideal for mint, basil, and indoor leafy greens.",
    location: "Mekanisa, Addis Ababa",
    image: "https://example.com/images/balcony6.jpg",
    category: "balcony",
    price: 450,
  },
  {
    id: 19,
    title: "High Rooftop for Beekeeping",
    description:
      "Rooftop space with wind protection, ideal for urban beekeeping.",
    location: "Gotera, Addis Ababa",
    image: "https://example.com/images/rooftop7.jpg",
    category: "rooftop",
    price: 1400,
  },
  {
    id: 20,
    title: "Unused Backyard Plot",
    description: "90 sqm of open backyard space, previously used for maize.",
    location: "Kolfe, Addis Ababa",
    image: "https://example.com/images/land7.jpg",
    category: "land",
    price: 1900,
  },
];

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
  );
};
export default SingleLand;
