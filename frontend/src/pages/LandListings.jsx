import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const LandListings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Organic product categories
  const categories = [
    "All",
    "Fresh Produce",
    "Dairy & Eggs",
    "Pantry Staples",
    "Herbs & Spices",
    "Beverages",
    "Snacks",
    "Beauty & Personal Care",
    "Home & Cleaning",
  ];

  // Sample organic products
  const products = [
    {
      id: 1,
      name: "Organic Baby Spinach",
      category: "Fresh Produce",
      price: 4.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Organic Avocados (3 Pack)",
      category: "Fresh Produce",
      price: 6.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "Grass-fed Yogurt",
      category: "Dairy & Eggs",
      price: 5.49,
      image: "https://placehold.co/300x200",
    },
    {
      id: 4,
      name: "Pasture-raised Eggs",
      category: "Dairy & Eggs",
      price: 7.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 5,
      name: "Organic Quinoa",
      category: "Pantry Staples",
      price: 8.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 6,
      name: "Raw Honey",
      category: "Pantry Staples",
      price: 12.49,
      image: "https://placehold.co/300x200",
    },
    {
      id: 7,
      name: "Organic Turmeric Powder",
      category: "Herbs & Spices",
      price: 6.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 8,
      name: "Herbal Tea Collection",
      category: "Beverages",
      price: 14.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 9,
      name: "Dried Fruit & Nut Mix",
      category: "Snacks",
      price: 9.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 10,
      name: "Organic Coconut Oil Soap",
      category: "Beauty & Personal Care",
      price: 7.49,
      image: "https://placehold.co/300x200",
    },
    {
      id: 11,
      name: "Bamboo Dish Brush",
      category: "Home & Cleaning",
      price: 5.99,
      image: "https://placehold.co/300x200",
    },
    {
      id: 12,
      name: "Plant-based Laundry Detergent",
      category: "Home & Cleaning",
      price: 16.99,
      image: "https://placehold.co/300x200",
    },
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col  md:flex-row md:justify-between">
        {/* Category sidebar */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm border border-amber-100">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-emerald-100 text-amber-800 font-['Rubik']">
            Categories
          </h2>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <button
                  className={`w-full text-left py-2 px-3 rounded hover:bg-amber-100 transition font-['Kanit'] ${
                    selectedCategory === category
                      ? "border-1 border-green-950 text-amber-800 font-medium "
                      : "text-amber-900 font-['Kanit']"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products grid */}
        <div className="flex-1 mt-6 md:mt-0 mb-5">
          <div className="flex flex-row justify-end mb-2 mr-8 md:mr-24 lg:mr-16 ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 border-1 border-amber-800"
              >
                <p className="font-['Kanit'] ">Filter by</p>
                <FaAngleDown className="flex flex-row gap-2 items-center" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm flex flex-col items-start  "
              >
                <li className="font-['Rubik'] w-full">
                  <a>price</a>
                </li>
                <li className="">
                  <div className="dropdown dropdown-left ml-0 bg-white ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn  border-0 p-0 bg-white font-['Rubik'] flex flex-row gap-2 pr-20 hover:bg-gray-200"
                    >
                      <FaAngleLeft />
                      <p> city</p>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm font-['Rubik']"
                    >
                      <li>
                        <a>Addis Ababa</a>
                      </li>
                      <li>
                        <a>Hawassa</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-center flex-wrap">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden  hover:border-gray-100 hover:shadow-md transition border-1 border-amber-900"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm font-medium uppercase tracking-wide text-amber-800 mb-1 text-center font-['Kanit']">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-stone-800 text-center font-['Rubik']">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-amber-800 font-['Montserrat']">
                      ${product.price}
                    </span>
                    <button className="bg-amber-900 hover:bg-amber-800 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm transition font-['Rubik']">
                      view details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500">
                No organic products found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandListings;
