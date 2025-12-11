import React from "react";

export default function Step3_Genres() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Select Genres</h1>

      <p className="text-gray-600 mb-6">
        Choose music genres you want in your playlist.
      </p>

      {/* Replace later with your Figma design */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Pop
        </div>
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Hip-hop
        </div>
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Rock
        </div>
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          EDM
        </div>
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Jazz
        </div>
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Classical
        </div>
      </div>
    </div>
  );
}
