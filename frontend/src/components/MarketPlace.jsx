import React from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { products } from "../utils";
import useStore from "../../store/store";
import Search from "./Search";

const MarketPlace = () => {
  const {
    searchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    selectedCity,
    setSelectedCity,
    resetFilters,
  } = useStore();

  // Organic product categories
  const categories = [
    "All",
    "VEGETABLES",
    "CEREALS",
    "FRUITS",
    "FLOWERS",
    "TOOLS",
  ];

  // Cities for filtering
  const cities = [
    "All",
    "ADDIS_ABABA",
    "ADAMA",
    "BAHIR_DAR",
    "GONDAR",
    "MEKELLE",
    "DIRE_DAWA",
    "HAWASSA",
  ];

  // Filter products based on all criteria
  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory
    )
    .filter(
      (product) =>
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) => selectedCity === "All" || product.city === selectedCity
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

  // Price range options
  const priceRanges = [
    { label: "All Prices", value: [0, 1000] },
    { label: "Under $50", value: [0, 50] },
    { label: "$50 - $100", value: [50, 100] },
    { label: "$100 - $200", value: [100, 200] },
    { label: "Over $200", value: [200, 1000] },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Categories Sidebar */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold pb-2 border-b border-emerald-100 text-emerald-700 font-['Rubik']">
              Filters
            </h2>
            <button
              onClick={resetFilters}
              className="text-xs text-green-800 hover:text-green-600 font-['Rubik']"
            >
              Reset All
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-emerald-700 font-['Rubik']">
              Categories
            </h3>
            <ul>
              {categories.map((category) => (
                <li key={category} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-green-100 transition font-['Kanit'] ${
                      selectedCategory === category
                        ? "border-1 border-green-950 text-emerald-800 font-medium"
                        : "text-stone-700 font-['Kanit']"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-emerald-700 font-['Rubik']">
              Price Range
            </h3>
            <ul>
              {priceRanges.map((range, index) => (
                <li key={index} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-green-100 transition font-['Kanit'] ${
                      priceRange[0] === range.value[0] &&
                      priceRange[1] === range.value[1]
                        ? "border-1 border-green-950 text-emerald-800 font-medium"
                        : "text-stone-700 font-['Kanit']"
                    }`}
                    onClick={() => setPriceRange(range.value)}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* City Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-emerald-700 font-['Rubik']">
              City
            </h3>
            <ul>
              {cities.map((city) => (
                <li key={city} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-green-100 transition font-['Kanit'] ${
                      selectedCity === city
                        ? "border-1 border-green-950 text-emerald-800 font-medium"
                        : "text-stone-700 font-['Kanit']"
                    }`}
                    onClick={() => setSelectedCity(city)}
                  >
                    {city.split("_").join(" ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 mt-6 md:mt-0 mb-5 md:ml-6">
          {/* Search Section */}

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCategory !== "All" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="ml-1 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCity !== "All" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                {selectedCity.split("_").join(" ")}
                <button
                  onClick={() => setSelectedCity("All")}
                  className="ml-1 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            )}
            {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                {priceRange[0] === 0 && priceRange[1] === 50 && "Under $50"}
                {priceRange[0] === 50 && priceRange[1] === 100 && "$50 - $100"}
                {priceRange[0] === 100 &&
                  priceRange[1] === 200 &&
                  "$100 - $200"}
                {priceRange[0] === 200 && priceRange[1] === 1000 && "Over $200"}
                {![0, 50, 100, 200].includes(priceRange[0]) &&
                  `$${priceRange[0]} - $${priceRange[1]}`}
                <button
                  onClick={() => setPriceRange([0, 1000])}
                  className="ml-1 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden hover:border-gray-100 hover:shadow-md transition border-1 border-green-900"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm font-medium uppercase tracking-wide text-green-800 mb-1 text-center font-['Kanit']">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-stone-800 text-center font-['Rubik']">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-green-800 font-['Montserrat']">
                      ${product.price}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-green-900 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-md text-sm transition font-['Rubik']"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 font-['Kanit']">
                No products found matching your criteria.
              </p>
              <button
                onClick={resetFilters}
                className="mt-2 text-green-700 hover:text-green-900 font-['Rubik']"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
