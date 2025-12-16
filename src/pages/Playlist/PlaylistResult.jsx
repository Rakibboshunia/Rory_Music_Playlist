import React from "react";
import PlaylistAccordion from "./components/PlaylistAccordion";

// ✅ global components
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";


export default function PlaylistResult() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FF]">
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Your Personalized Playlist</h1>
        <p className="text-center text-lg max-w-2xl mx-auto mb-12 px-4">
          Based on your quiz answers, we've curated a playlist that perfectly matches your unique taste and mood. Enjoy your personalized soundtrack!
        </p>
      </div>
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <PlaylistAccordion />
        </div>
      </div>

      <AwardsSection />

      <TestimonialsSection />

      <CTASection />
    </div>
  );
}
