import { Outlet } from "react-router-dom";
import AwardsSection from "../components/AwardsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function QuizLayout() {
  return (
    <div className="pt-28 bg-gradient-to-b from-[#F6F4FF] to-white">
      <Outlet />
    
      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
