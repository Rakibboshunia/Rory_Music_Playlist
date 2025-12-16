import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AwardsSection from "./components/AwardsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      
      <HeroSection />

      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <FeaturesSection />
      </section>

      <section className="mt-12">
        <AwardsSection />
      </section>

      <section className="mt-12 max-w-6xl mx-auto px-6 lg:px-8">
        <TestimonialsSection />
      </section>

      <section className="mt-14">
        <CTASection />
      </section>

    </div>
  );
}
