import React from "react";

export default function Step4_EmailCapture() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Your Email</h1>

      <p className="text-gray-600 mb-6">
        Enter your email address to save your playlist results.
      </p>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-3 py-2"
        />

        <button
          type="submit"
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
