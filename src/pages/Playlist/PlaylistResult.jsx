import React from "react";
import PlaylistAccordion from "./components/PlaylistAccordion";

// Global shared sections
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

export default function PlaylistResult() {
  return (
    <div className="bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FF]">
      
      {/* ===== PLAYLIST AREA ===== */}
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* TOP BADGE */}
          <div className="flex justify-center mb-3 relative z-10">
            <span className="px-6 py-2 text-xs sm:text-sm rounded-full bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Classic Romance Collection
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            A sophisticated blend of timeless classics and elegant melodies.
            Perfect for creating those unforgettable moments.
          </p>

          {/* HEADER ROW */}
          <div className="flex items-center justify-between mt-8 mb-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">
                Your Playlist
              </h3>
              <p className="text-xs text-gray-500">
                Here's the soundtrack crafted just for your event.
              </p>
            </div>

            <button className="px-4 py-2 text-xs sm:text-sm rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              + Create Playlist
            </button>
          </div>

          {/* ACCORDION */}
          <PlaylistAccordion />

        </div>
      </div>

      {/* ===== SHARED SECTIONS (NO EXTRA WRAPPER GAP) ===== */}
      <AwardsSection />
      <TestimonialsSection />
      <CTASection />

    </div>
  );
}
