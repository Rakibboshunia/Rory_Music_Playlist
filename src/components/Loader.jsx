import React from "react";
import { FiMusic } from "react-icons/fi";

const Loader = ({ size = "md", color = "purple" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
      {/* Outer ring */}
      <div className="absolute inset-0 border-4 border-purple-100 rounded-full"></div>
      
      {/* Spinning gradient ring */}
      <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 border-l-purple-600 rounded-full animate-spin shadow-[0_0_15px_rgba(147,51,234,0.3)]"></div>
      
      {/* Center Icon */}
      <div className="relative flex items-center justify-center bg-white rounded-full p-2 shadow-sm animate-pulse">
        <FiMusic className="text-purple-600" size={iconSizes[size]} />
      </div>
      
      {/* Decorative dots */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default Loader;
