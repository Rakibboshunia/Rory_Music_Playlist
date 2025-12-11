import React from "react";

export default function Step1_EventType() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Choose Event Type</h1>

      <p className="text-gray-600 mb-6">
        Select the type of event you are creating music for.
      </p>

      {/* Replace this later with actual cards based on Figma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Birthday Party
        </div>

        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Wedding
        </div>

        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Concert
        </div>

        <div className="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer">
          Custom Event
        </div>
      </div>
    </div>
  );
}
