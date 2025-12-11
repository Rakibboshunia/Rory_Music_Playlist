import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-sm z-[999] flex items-center justify-center transition-opacity">
      <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
