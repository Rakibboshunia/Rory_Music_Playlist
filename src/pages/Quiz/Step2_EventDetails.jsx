import React from "react";

export default function Step2_EventDetails() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Event Details</h1>

      <p className="text-gray-600 mb-6">
        Tell us more about your event so we can personalize the playlist.
      </p>

      {/* Replace later with exact Figma UI */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Event Name"
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="date"
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border rounded-lg px-3 py-2"
        />

        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg">
          Next Step
        </button>
      </form>
    </div>
  );
}
