import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AwardsSection from "./components/AwardsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

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
      <section className="mt-20">
        <AwardsSection />
      </section>

      {/* Testimonials */}
      <section className="mt-20 max-w-6xl mx-auto px-6 lg:px-8">
        <TestimonialsSection />
      </section>

      {/* Big CTA */}
      <section className="mt-16">
        <CTASection />
      </section>

      {/* small footer spacer */}
      <div className="h-12" />
    </div>
  );
}
