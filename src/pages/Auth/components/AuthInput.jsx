import React from "react";

export default function AuthInput({ label, value, onChange, placeholder = "", type = "text" }) {
  return (
    <div>
      {label && <label className="block text-sm text-gray-700 mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
}
