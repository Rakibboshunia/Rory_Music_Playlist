import { Outlet } from "react-router-dom";
import AwardsSection from "../components/AwardsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function QuizLayout() {
  return (
    <div className=" bg-linear-to-b from-[#F6F4FF] to-white min-h-screen">
        {/* ===== HEADER ===== */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-4 text-center">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold gap-1 leading-tight">
            Your night. Your energy. <br />Your soundtrack.
          </h1>
          <p className="mt-2">From vision to reality in there simple steps</p>
      </div>
      
      {/* QUIZ STEP CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Outlet />
      </div>

      {/* OPTIONAL MARKETING SECTIONS */}
      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
} 
