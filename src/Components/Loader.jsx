import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-600 border-solid"></div>
    </div>
  );
};

export default Loader;
