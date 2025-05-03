import React from "react";
const ErrorMessage = ({ message }) => {
  // Don't render anything if there's no message
  if (!message) {
    return null;
  }

  return (
    <div
      className="my-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center shadow-sm"
      role="alert" // Accessibility role for alerts
    >
      <span className="font-medium">Error:</span> {message}
    </div>
  );
};

export default ErrorMessage;
