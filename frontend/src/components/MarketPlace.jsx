import React, { useState } from "react";

const MarketPlace = () => {
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
    <div className="container mx-auto px-4 py-8 bg-stone-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-emerald-800">
        Organic Marketplace
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Category sidebar */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-emerald-100 text-emerald-700">
            Categories
          </h2>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <button
                  className={`w-full text-left py-2 px-3 rounded hover:bg-emerald-50 transition ${
                    selectedCategory === category
                      ? "bg-emerald-100 text-emerald-800 font-medium"
                      : "text-stone-700"
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
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:border-emerald-200 hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-600 mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-stone-800">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-emerald-700">
                      ${product.price}
                    </span>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-md text-sm transition">
                      Add to Basket
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

export default MarketPlace;
