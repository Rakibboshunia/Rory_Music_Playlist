import React from "react";

export default function GradientButton({ text = "Button", full = false, type = "button" }) {
  return (
    <button
      type={type}
      className={`${
        full ? "w-full" : ""
      } inline-block px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#4f46e5] to-[#9333ea] hover:opacity-95`}
    >
      {text}
    </button>
  );
}
