import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AwardsSection from "../components/AwardsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function QuizLayout() {

  // scroll when quiz page loads
  useEffect(() => {
    const el = document.getElementById("quiz-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id="quiz-section" className="min-h-screen"
    >
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold gap-1 leading-tight bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
          Your night. Your energy. <br />Your soundtrack.
        </h1>
        <p className="mt-2">
          From vision to reality in there simple steps
        </p>
      </div>

      {/* QUIZ STEP CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <Outlet />
      </div>

      <AwardsSection />

      <TestimonialsSection />

      <CTASection />
    </div>
  );
}
