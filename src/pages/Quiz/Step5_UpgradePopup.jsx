import React from "react";

export default function Step5_UpgradePopup() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Upgrade Required</h1>

      <p className="text-gray-600 mb-6">
        Upgrade your account to unlock personalized playlist generation.
      </p>

      <div className="p-4 border rounded-lg bg-indigo-50 mb-4">
        <p className="text-indigo-700">
          Premium plan includes unlimited playlist generations, AI tuning, and
          expert recommendations.
        </p>
      </div>

      <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg w-full">
        Upgrade Now
      </button>
    </div>
  );
}
