import React from "react";

export default function Divider({ label = "or" }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-gray-200" />
      <div className="text-sm text-gray-400">{label}</div>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
