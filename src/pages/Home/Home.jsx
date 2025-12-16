
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AwardsSection from "./components/AwardsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="bg-white text-gray-900">
      
      <HeroSection />

      <section className="max-w-6xl mx-auto px-6 lg:px-8">
=======
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
        <HeroSection />
      
      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 -mt-12">
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
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
<<<<<<< HEAD

=======
      
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
    </div>
  );
}
