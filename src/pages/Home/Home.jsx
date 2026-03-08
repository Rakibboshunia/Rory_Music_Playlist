import React from "react";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      <section id="hero-section">
        <HeroSection />
      </section>

      <section id="quiz-section">
        <FeaturesSection />
      </section>

      <section id="playlist-section">
        <AwardsSection />
      </section>

      <section
        id="testimonials-section"
        className="mt-13 max-w-6xl mx-auto lg:px-5"
      >
        <TestimonialsSection />
      </section>

      <section>
        <CTASection />
      </section>
    </div>
  );
}
