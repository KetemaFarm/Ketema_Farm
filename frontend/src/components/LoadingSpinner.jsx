import React from "react";

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center py-16 text-center min-h-[200px]">
      {" "}
      {/* Added min-height */}
      {/* Basic Tailwind Spinner */}
      <div
        className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600 mb-4" // Adjusted border thickness and color
        role="status" // Added accessibility role
        aria-live="polite" // Indicate changes to assistive technologies
      >
        <span className="sr-only">Loading...</span> {/* Screen reader text */}
      </div>
      {/* Loading Message */}
      <p className="text-lg font-medium text-gray-600">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
