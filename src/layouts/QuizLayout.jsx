import { Outlet } from "react-router-dom";
import AwardsSection from "../pages/home/components/AwardsSection";
import TestimonialsSection from "../pages/home/components/TestimonialsSection";
import CTASection from "../pages/home/components/CTASection";

export default function QuizLayout() {
  return (
    <div className="pt-28 bg-gradient-to-b from-[#F6F4FF] to-white">
      <Outlet />

      {/* Figma required sections */}
      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
