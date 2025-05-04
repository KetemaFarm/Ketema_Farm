import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { generateAmountOptions } from "../utils";
import { addItem } from "../features/cart/cartSlice";
import { FeaturedProducts } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

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
    <section className="mt-6 flex flex-col items-center gap-6">
      {/* PRODUCT */}
      <div className="mt-6 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start lg:gap-30">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="size-70 object-cover rounded-lg lg:size-90"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold font-['Rubik'] text-center lg:text-left text-green-800">
            {title}
          </h1>

          <div className="flex flex-row gap-1 justify-center items-center mt-3 lg:justify-start">
            <span className="font-['Rubik'] font-bold text-lg text-green-800 ">
              category:
            </span>
            <p className="text-lg font-['Kanit']">{category}</p>
          </div>
          <div className="flex flex-col gap-1  items-center mt-2 lg:flex-row lg:items-start">
            <span className="font-['Rubik'] font-bold text-md text-green-800">
              Description:
            </span>
            <p className="mt-1 leading-4 font-['Montserrat'] text-xs w-70">
              {description}
            </p>
          </div>
          {/* AMOUNT  */}
          <div className="flex flex-col items-center gap-8 mt-10 lg:flex-row">
            <div className="flex flex-row gap-5 items-center ">
              <FaMinus
                className="cursor-pointer"
                onClick={() => {
                  if (amount > 1) setAmount(amount - 1);
                }}
              />
              <p className="font-['Montserrat'] font-bold border-1 border-green-800 w-10 p-1 text-center">
                {amount}
              </p>
              <FaPlus
                className="cursor-pointer"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              />
            </div>
            <div className=" ">
              <button
                className="btn  btn-md bg-green-900 font-['Rubik'] text-gray-100 text-sm w-50"
                onClick={addToCart}
              >
                Add to bag
              </button>
            </div>
          </div>
          <h4 className="text-xl text-neutral-content font-bold font-['Rubik'] text-center mt-12">
            Sold by {farmerName}
          </h4>
        </div>
      </div>
      <FeaturedProducts />
    </section>
  );
};
export default SingleProduct;
