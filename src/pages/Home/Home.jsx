import React from "react";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section id="hero-section">
        <HeroSection />
      </section>

      {/* QUIZ SECTION (ADDED ID ONLY) */}
      <section id="quiz-section">
        <FeaturesSection />
      </section>

      {/* PLAYLIST SECTION (ADDED ID ONLY) */}
      <section id="playlist-section">
        <AwardsSection />
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials-section"
        className="mt-13 max-w-6xl mx-auto lg:px-5"
      >
        <TestimonialsSection />
      </section>

      {/* CTA */}
      <section>
        <CTASection />
      </section>
    </div>
  );
}
