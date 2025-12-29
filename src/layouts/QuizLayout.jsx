import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AwardsSection from "../components/AwardsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

const quizSteps = [
  "/quiz",
  "/quiz/details",
  "/quiz/genres",
  "/quiz/importance",
  "/quiz/vibe",
  "/quiz/mood",
  "/quiz/energy",
  "/quiz/tempo",
  "/quiz/era",
  "/quiz/final",
];

export default function QuizLayout() {
  const location = useLocation();

  const cleanPath = location.pathname.replace(/\/$/, "");

  const stepIndex = quizSteps.findIndex(
    (step) => cleanPath === step
  );

  const currentStep = stepIndex >= 0 ? stepIndex + 1 : 0;
  const progressPercent = currentStep * 10;

  useEffect(() => {
    const el = document.getElementById("quiz-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div id="quiz-section" className="min-h-screen">

      {/* ===== HEADER ===== */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
          Your night. Your energy. <br /> Your soundtrack.
        </h1>

        <p className="mt-4 text-gray-600">
          From vision to reality in three simple steps
        </p>
      </div>

      {/* ===== PROGRESS BAR ===== */}
      {currentStep > 0 && (
        <div className="max-w-xl mx-auto px-4 sm:px-6 mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Step {currentStep} of 10</span>
            <span>{progressPercent}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-2 bg-linear-to-r from-[#155DFC] to-[#9810FA] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* ===== PAGE CONTENT ===== */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-15">
        <Outlet />
      </div>

      <div>
        <AwardsSection />
      </div>

      <div className="mt-2">
        <TestimonialsSection />
      </div>

      <div>
        <CTASection />
      </div>
    </div>
  );
}