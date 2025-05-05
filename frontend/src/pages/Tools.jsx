import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tools } from "../utils";

export const loader = async () => {
  // const response = await axios.get("http://localhost:8080/api/tools/");
  // return response.data;
  return null;
};

const Tools = () => {
  // const tools = useLoaderData()
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Organic product categories
  const categories = [
    "All",
    "Pesticide",
    "Starterkit",
    "Fertilizer",
    "Container",
  ];

  // Filter products based on selected category
  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tools) => tools.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col  md:flex-row md:justify-between">
        {/* Category sidebar */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-100 text-gray-800 font-['Rubik']">
            Categories
          </h2>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <button
                  className={`w-full text-left py-2 px-3 rounded hover:bg-gray-100 transition font-['Kanit'] ${
                    selectedCategory === category
                      ? "border-1 border-gray-950 text-gray-800 font-medium "
                      : "text-gray-700 font-['Kanit']"
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
                className="btn m-1 border-1 border-gray-800"
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
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-lg overflow-hidden  hover:border-gray-100 hover:shadow-md transition border-1 border-gray-900 w-[300px]"
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
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
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

export default Tools;
