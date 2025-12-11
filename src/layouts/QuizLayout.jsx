import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function QuizLayout() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      {/* Optional shared quiz header or progress bar */}
      
      <div className="max-w-3xl mx-auto">
        <ProgressBar />

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
