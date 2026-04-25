import React from "react";

const Spinner = ({ size = "sm", color = "white" }) => {
  const sizeClasses = {
    xs: "w-4 h-4 border-2",
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
  };

  const colorClasses = {
    white: "border-white",
    purple: "border-purple-600",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}
    ></div>
  );
};

export default Spinner;
