import React from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tools } from "../utils";
import useToolStore from "../../store/ToolStore";

export const loader = () => {
  return null;
};
const Tools = () => {
  const {
    selectedToolCategory,
    setSelectedToolCategory,
    toolPriceRange,
    setToolPriceRange,
    resetToolFilters,
  } = useToolStore();

  // Tool categories
  const categories = [
    "All",
    "Pesticide",
    "Starterkit",
    "Fertilizer",
    "Container",
  ];

  // Price range options
  const priceRanges = [
    { label: "All Prices", value: [0, 1000] },
    { label: "Under $50", value: [0, 50] },
    { label: "$50 - $100", value: [50, 100] },
    { label: "$100 - $200", value: [100, 200] },
    { label: "Over $200", value: [200, 1000] },
  ];

  // Filter tools based on selected criteria
  const filteredTools = tools
    .filter(
      (tool) =>
        selectedToolCategory === "All" || tool.category === selectedToolCategory
    )
    .filter(
      (tool) =>
        tool.price >= toolPriceRange[0] && tool.price <= toolPriceRange[1]
    );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold pb-2 border-b border-gray-100 text-gray-800 font-['Rubik']">
              Filters
            </h2>
            <button
              onClick={resetToolFilters}
              className="text-xs text-gray-800 hover:text-gray-600 font-['Rubik']"
            >
              Reset All
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-800 font-['Rubik']">
              Categories
            </h3>
            <ul>
              {categories.map((category) => (
                <li key={category} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-gray-100 transition font-['Kanit'] ${
                      selectedToolCategory === category
                        ? "border-1 border-gray-950 text-gray-800 font-medium"
                        : "text-gray-700 font-['Kanit']"
                    }`}
                    onClick={() => setSelectedToolCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-800 font-['Rubik']">
              Price Range
            </h3>
            <ul>
              {priceRanges.map((range, index) => (
                <li key={index} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-gray-100 transition font-['Kanit'] ${
                      toolPriceRange[0] === range.value[0] &&
                      toolPriceRange[1] === range.value[1]
                        ? "border-1 border-gray-950 text-gray-800 font-medium"
                        : "text-gray-700 font-['Kanit']"
                    }`}
                    onClick={() => setToolPriceRange(range.value)}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools grid */}
        <div className="flex-1 mt-6 md:mt-0 mb-5 md:ml-6">
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedToolCategory !== "All" && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                {selectedToolCategory}
                <button
                  onClick={() => setSelectedToolCategory("All")}
                  className="ml-1 text-gray-600 hover:text-gray-800"
                >
                  ×
                </button>
              </span>
            )}
            {(toolPriceRange[0] !== 0 || toolPriceRange[1] !== 1000) && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                {toolPriceRange[0] === 0 &&
                  toolPriceRange[1] === 50 &&
                  "Under $50"}
                {toolPriceRange[0] === 50 &&
                  toolPriceRange[1] === 100 &&
                  "$50 - $100"}
                {toolPriceRange[0] === 100 &&
                  toolPriceRange[1] === 200 &&
                  "$100 - $200"}
                {toolPriceRange[0] === 200 &&
                  toolPriceRange[1] === 1000 &&
                  "Over $200"}
                {![0, 50, 100, 200].includes(toolPriceRange[0]) &&
                  `$${toolPriceRange[0]} - $${toolPriceRange[1]}`}
                <button
                  onClick={() => setToolPriceRange([0, 1000])}
                  className="ml-1 text-gray-600 hover:text-gray-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-lg overflow-hidden hover:border-gray-100 hover:shadow-md transition border-1 border-gray-900"
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm font-medium uppercase tracking-wide text-gray-600 mb-1 text-center font-['Kanit']">
                    {tool.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-stone-800 text-center font-['Rubik']">
                    {tool.name}
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-gray-800 font-['Montserrat']">
                      ${tool.price}
                    </span>
                    <Link
                      to={`/tools/${tool.id}`}
                      className="bg-gray-900 hover:bg-gray-700 text-white px-3 py-1.5 rounded-md text-sm transition font-['Rubik']"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 font-['Kanit']">
                No tools found matching your criteria.
              </p>
              <button
                onClick={resetToolFilters}
                className="mt-2 text-gray-700 hover:text-gray-900 font-['Rubik']"
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

export default Tools;
