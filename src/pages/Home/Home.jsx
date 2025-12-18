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
      <HeroSection />

      {/* FEATURES */}
      <FeaturesSection />

      {/* AWARDS */}
      <AwardsSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA */}
      <CTASection />

    </div>
  );
}
