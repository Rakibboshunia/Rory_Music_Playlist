import { Outlet } from "react-router-dom";
import AwardsSection from "../components/AwardsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function QuizLayout() {
  return (
    <div className="pt-12 bg-gradient-to-b from-[#F6F4FF] to-white min-h-screen">

      {/* QUIZ STEP CONTENT */}
      <Outlet />

      {/* OPTIONAL MARKETING SECTIONS */}
      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
