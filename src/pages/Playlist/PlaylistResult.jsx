import React from "react";
import PlaylistAccordion from "./components/PlaylistAccordion";
import AudioPlayerBar from "./components/AudioPlayerBar";

// Global shared sections
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

export default function PlaylistResult() {
  return (
    <div className="bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FF]">
      {/* ===== PLAYLIST AREA ===== */}
      <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* TOP BADGE */}
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1 text-sm rounded-full bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-semibold text-center">
            Classic Romance Collection
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm">
            A sophisticated blend of timeless classics and elegant melodies.
            Perfect for creating those unforgettable moments.
          </p>

          {/* HEADER ROW */}
          <div className="flex items-center justify-between mt-10 mb-4">
            <div>
              <h3 className="font-medium">Your Playlist</h3>
              <p className="text-xs text-gray-500">
                Here's the soundtrack crafted just for your event.
              </p>
            </div>

            <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              + Create Playlist
            </button>
          </div>

          {/* ACCORDION */}
          <PlaylistAccordion />

          {/* AUDIO PLAYER */}
          <AudioPlayerBar />
        </div>
      </div>

      {/* ===== AWARDS ===== */}
      <section className="mt-24">
        <AwardsSection />
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="mt-24">
        <TestimonialsSection />
      </section>

      {/* ===== CTA ===== */}
      <section className="mt-20 pb-24">
        <CTASection />
      </section>
    </div>
  );
}
