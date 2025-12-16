import React from "react";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero */}
      <HeroSection />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 -mt-12">
        <FeaturesSection />
      </section>

      {/* Awards */}
      <AwardsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CTASection />

    </div>
  );
}
