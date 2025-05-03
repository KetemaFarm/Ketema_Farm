import React from "react";
const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 0 1110.89 3.47614.817 4.817a1 1 0 01-1.414 1.4141-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    ></path>
  </svg>
);
function VideoControls({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 px-1">
      {/* Search Input */}
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search videos..." // Generic placeholder
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* Sort Dropdown Container */}
      <div className="flex items-center gap-2 text-sm w-full md:w-auto">
        <label htmlFor="sort" className="text-gray-600 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={onSortChange}
          className="border border-gray-300 rounded-md px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 bg-white"
        >
          {/* Default 'date-desc' aligns with API 'order=date' */}
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          {/* Add 'viewCount', 'rating' if you modify the API call to fetch stats */}
        </select>
      </div>
    </div>
  );
}

export default VideoControls;
