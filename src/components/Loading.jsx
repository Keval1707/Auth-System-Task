import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-70 mb-4"></div>
      <p className="text-lg text-gray-700 font-medium">{message}</p>
    </div>
  );
};

export default Loading;
