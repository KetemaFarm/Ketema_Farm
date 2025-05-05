import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { generateAmountOptions } from "../utils";
import { addItem } from "../features/cart/cartSlice";
import { FeaturedProducts } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
export const loader = async () => {
  // const products = await axios.get("http://localhost:8083/products");

  // return { products: products.data };
  return null;
};

const products = [
  {
    id: 1,
    title: "Golden Wheat",
    description:
      "Fresh organic wheat, perfect for baking,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, non! Fresh organic wheat, perfect for baking,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, non!",
    farmerName: "John Doe",
    category: "cereals",
    price: 15.99,
    size: "1kg",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Sunflower Flower",
    description: "Bright yellow sunflower flowers for decoration.",
    farmerName: "Alice Green",
    category: "flower",
    price: 4.5,
    size: "bunch",
    image:
      "https://images.unsplash.com/photo-1616224917135-8aeca963e892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Tomato Seedlings",
    description: "Healthy tomato seedlings for your garden.",
    farmerName: "Carlos Silva",
    category: "seedling",
    price: 2.99,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1592456772180-2129afb02b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Carrots",
    description: "Fresh carrots, perfect for salads and cooking.",
    farmerName: "Becky Adams",
    category: "vegetables",
    price: 3.0,
    size: "500g",
    image:
      "https://images.unsplash.com/photo-1573662475019-411b893410a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Rice Grains",
    description: "Pure, long-grain rice suitable for everyday meals.",
    farmerName: "Liu Wei",
    category: "cereals",
    price: 10.99,
    size: "2kg",
    image:
      "https://images.unsplash.com/photo-1604064189356-25e4168da467?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Orchid Bouquet",
    description: "Elegant orchids for special occasions.",
    farmerName: "Maria Lopez",
    category: "flower",
    price: 20.0,
    size: "set of 5",
    image:
      "https://images.unsplash.com/photo-1618880627647-2b036dc0bf7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Lettuce Seedlings",
    description: "Fresh lettuce seedlings for your vegetable garden.",
    farmerName: "Sam Brown",
    category: "seedling",
    price: 2.5,
    size: "12 seedlings",
    image:
      "https://images.unsplash.com/photo-1571145146280-3a68be8b4fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Broccoli",
    description: "Healthy broccoli heads for nutritious meals.",
    farmerName: "Anna Kim",
    category: "vegetables",
    price: 4.75,
    size: "300g",
    image:
      "https://images.unsplash.com/photo-1613717589172-8008f4d0bca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Maize",
    description: "Sweet corn on the cob, freshly harvested.",
    farmerName: "Pedro Martinez",
    category: "cereals",
    price: 5.2,
    size: "4 cobs",
    image:
      "https://images.unsplash.com/photo-1610592884030-3003513b53f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Rose Bouquet",
    description: "Beautiful red roses for gifting or decoration.",
    farmerName: "Emily White",
    category: "flower",
    price: 12.0,
    size: "12 roses",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Cucumber Seedlings",
    description: "Crisp cucumber seedlings for your garden.",
    farmerName: "Tom Harris",
    category: "seedling",
    price: 2.75,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1551009173-5a58d6fad701?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Spinach",
    description: "Fresh spinach leaves, great for salads.",
    farmerName: "Grace Lee",
    category: "vegetables",
    price: 3.5,
    size: "200g",
    image:
      "https://images.unsplash.com/photo-1576505747150-3b5bc9f09ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    title: "Oats",
    description: "Healthy oats for breakfast.",
    farmerName: "David Clark",
    category: "cereals",
    price: 6.75,
    size: "1.5kg",
    image:
      "https://images.unsplash.com/photo-1601140688120-4d9380732369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "Lavender Flowers",
    description: "Fragrant lavender bunches for relaxation.",
    farmerName: "Sophia Martin",
    category: "flower",
    price: 8.0,
    size: "bunch",
    image:
      "https://images.unsplash.com/photo-1549226272-5e3ecca0b7a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    title: "Pepper Seedlings",
    description: "Hot pepper seedlings ready to grow.",
    farmerName: "Luis Gomez",
    category: "seedling",
    price: 3.0,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1574928932551-12b564ef0836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "Cauliflower",
    description: "Fresh cauliflower heads, perfect for cooking.",
    farmerName: "Isabel Rodriguez",
    category: "vegetables",
    price: 4.25,
    size: "400g",
    image:
      "https://images.unsplash.com/photo-1601592658537-f1ea8b1e218f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    title: "Millet",
    description: "Rustic millet grains for healthy eating.",
    farmerName: "Kumar Patel",
    category: "cereals",
    price: 9.5,
    size: "1kg",
    image:
      "https://images.unsplash.com/photo-1604650933764-19d27850b4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    title: "Daisy Flowers",
    description: "Pure white daisies for home decor.",
    farmerName: "Olivia Scott",
    category: "flower",
    price: 9.0,
    size: "bunch",
    image:
      "https://images.unsplash.com/photo-1518449862415-aa7ee828f504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    title: "Eggplant Seedlings",
    description: "Strong eggplant seedlings for garden planting.",
    farmerName: "Marco Rossi",
    category: "seedling",
    price: 2.8,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1607980664134-8d9066a8c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    title: "Zucchini",
    description: "Fresh zucchinis for healthy meals.",
    farmerName: "Natalie Turner",
    category: "vegetables",
    price: 3.75,
    size: "2 pieces",
    image:
      "https://images.unsplash.com/photo-1605196907585-4ff23e75bcf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

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
  );
};
export default SingleProduct;
