import React from "react";

import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

// 🔥 NEW IMPORTS
import TrustBar from "../../components/TrustBar";
import HowItWorks from "../../components/HowItWorks";
import WhyLove from "../../components/WhyLove";
import PlaylistStyles from "../../components/PlaylistStyles";
import FreeVsFull from "../../components/FreeVsFull";
import FAQ from "../../components/FAQ";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section id="hero-section">
        <HeroSection />
      </section>

      {/* 🔥 TRUST BAR */}
      <TrustBar />

      {/* 🔥 HOW IT WORKS */}
      <section id="quiz-section">
        <HowItWorks />
      </section>

      {/* OLD FEATURE SECTION (optional keep) */}
      <FeaturesSection />

      {/* 🔥 WHY LOVE */}
      <WhyLove />

      {/* 🔥 PLAYLIST STYLES */}
      <section id="playlist-section">
        <PlaylistStyles />
      </section>

      {/* OLD AWARDS (optional keep) */}
      <AwardsSection />

      {/* 🔥 FREE VS FULL */}
      <FreeVsFull />


      {/* TESTIMONIALS */}
      <section
        id="testimonials-section"
        className="mt-13 max-w-6xl mx-auto lg:px-5"
      >
        <TestimonialsSection />
      </section>

      {/* 🔥 FAQ */}
      <FAQ />

      {/* OLD CTA */}
      <CTASection />

    </div>
  );
}