import React from "react";

export default function ProgressBar({ step = 1, total = 5 }) {
  const progress = (step / total) * 100;

  return (
    <div className="w-full mb-6">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-500 mt-2">Step {step} of {total}</p>
    </div>
  );
}
