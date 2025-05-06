import React from "react";
import { Link } from "react-router-dom";
import { lands } from "../utils";
import useLandStore from "../../store/LandStore";

export const loader = () => {
  return null;
};
const LandListings = () => {
  const {
    landPriceRange,
    setLandPriceRange,
    selectedLandCity,
    setSelectedLandCity,
    resetLandFilters,
  } = useLandStore();

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

  // Price range options
  const priceRanges = [
    { label: "All Prices", value: [0, 100000] },
    { label: "Under $10,000", value: [0, 10000] },
    { label: "$10,000 - $50,000", value: [10000, 50000] },
    { label: "$50,000 - $100,000", value: [50000, 100000] },
    { label: "Over $100,000", value: [100000, 1000000] },
  ];

  // Filter lands based on price and city
  const filteredLands = lands
    .filter(
      (land) => selectedLandCity === "All" || land.city === selectedLandCity
    )
    .filter(
      (land) =>
        land.price >= landPriceRange[0] && land.price <= landPriceRange[1]
    );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm border border-amber-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold pb-2 border-b border-amber-100 text-amber-800 font-['Rubik']">
              Filters
            </h2>
            <button
              onClick={resetLandFilters}
              className="text-xs text-amber-800 hover:text-amber-600 font-['Rubik']"
            >
              Reset All
            </button>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-amber-800 font-['Rubik']">
              Price Range
            </h3>
            <ul>
              {priceRanges.map((range, index) => (
                <li key={index} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-amber-100 transition font-['Kanit'] ${
                      landPriceRange[0] === range.value[0] &&
                      landPriceRange[1] === range.value[1]
                        ? "border-1 border-amber-950 text-amber-800 font-medium"
                        : "text-amber-900 font-['Kanit']"
                    }`}
                    onClick={() => setLandPriceRange(range.value)}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* City Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-amber-800 font-['Rubik']">
              City
            </h3>
            <ul>
              {cities.map((city) => (
                <li key={city} className="mb-2">
                  <button
                    className={`w-full text-left py-2 px-3 rounded hover:bg-amber-100 transition font-['Kanit'] ${
                      selectedLandCity === city
                        ? "border-1 border-amber-950 text-amber-800 font-medium"
                        : "text-amber-900 font-['Kanit']"
                    }`}
                    onClick={() => setSelectedLandCity(city)}
                  >
                    {city.split("_").join(" ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lands grid */}
        <div className="flex-1 mt-6 md:mt-0 mb-5 md:ml-6">
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedLandCity !== "All" && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
                {selectedLandCity.split("_").join(" ")}
                <button
                  onClick={() => setSelectedLandCity("All")}
                  className="ml-1 text-amber-600 hover:text-amber-800"
                >
                  ×
                </button>
              </span>
            )}
            {(landPriceRange[0] !== 0 || landPriceRange[1] !== 100000) && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
                {landPriceRange[0] === 0 &&
                  landPriceRange[1] === 10000 &&
                  "Under $10,000"}
                {landPriceRange[0] === 10000 &&
                  landPriceRange[1] === 50000 &&
                  "$10,000 - $50,000"}
                {landPriceRange[0] === 50000 &&
                  landPriceRange[1] === 100000 &&
                  "$50,000 - $100,000"}
                {landPriceRange[0] === 100000 &&
                  landPriceRange[1] === 1000000 &&
                  "Over $100,000"}
                {![0, 10000, 50000, 100000].includes(landPriceRange[0]) &&
                  `$${landPriceRange[0].toLocaleString()} - $${landPriceRange[1].toLocaleString()}`}
                <button
                  onClick={() => setLandPriceRange([0, 100000])}
                  className="ml-1 text-amber-600 hover:text-amber-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>

          {/* Lands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLands.map((land) => (
              <div
                key={land.id}
                className="bg-white rounded-lg overflow-hidden hover:border-gray-100 hover:shadow-md transition border-1 border-amber-900"
              >
                <img
                  src={land.image}
                  alt={land.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm font-medium uppercase tracking-wide text-amber-800 mb-1 text-center font-['Kanit']">
                    {land.category}{" "}
                    {/* Keeping category display but not filtering by it */}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-stone-800 text-center font-['Rubik']">
                    {land.name}
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-amber-800 font-['Montserrat']">
                      ${land.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/lands/${land.id}`}
                      className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1.5 rounded-md text-sm transition font-['Rubik']"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 font-['Kanit']">
                No land listings found matching your criteria.
              </p>
              <button
                onClick={resetLandFilters}
                className="mt-2 text-amber-700 hover:text-amber-900 font-['Rubik']"
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

export default LandListings;
