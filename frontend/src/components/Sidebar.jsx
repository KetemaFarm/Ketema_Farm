import React from "react";

const categories = [
  "show All",
  "General Farming Tutorials",
  "planting & Growing",
  "Maintenance & Care",
  "Harvesting & Post-Harvest",
];
function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <aside className="w-64 bg-white p-4 shadow-sm flex-shrink-0 mt-10 md:mt-16 lg:mt-20">
      <h2 className="text-lg font-semibold text-gray-700 uppercase mb-4 tracking-wide">
        Categories
      </h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-3 py-2 rounded text-gray-600 hover:bg-gray-100 hover:text-green-800 tranisition-colors duration-150 ${
                selectedCategory === category
                  ? "font-semibold bg-greeen-100 text-green-800"
                  : "font-medium"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
