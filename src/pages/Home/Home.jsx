import React from "react";

import HeroSection from "../../components/HeroSection";
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
import PerfectFor from "../../components/PerfectFor";
import Founder from "../../components/Founder";
export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section id="hero-section">
        <HeroSection />
      </section>

      {/* TRUST */}
      <TrustBar />

      {/* SOCIAL PROOF (MOVE UP 🔥) */}
      <AwardsSection />

      {/* HOW IT WORKS */}
      <section id="quiz-section">
        <HowItWorks />
      </section>

      {/* BENEFITS */}
      <WhyLove />

      {/* PLAYLIST STYLES */}
      <section id="playlist-section">
        <PlaylistStyles />
      </section>

      {/* PRICING */}
      <section id="pricing-section">
        <FreeVsFull />
      </section>

      {/* PERFECT FOR */}
      <PerfectFor />

      {/* TESTIMONIALS */}
      <section id="testimonials-section">
        <TestimonialsSection />
      </section>

      {/* FOUNDER (TRUST AGAIN) */}
      <Founder />

      {/* FAQ */}
      <section id="faq-section">
        <FAQ />
      </section>

      {/* FINAL CTA (VERY IMPORTANT 🔥) */}
      <CTASection />
    </div>
  );
}
