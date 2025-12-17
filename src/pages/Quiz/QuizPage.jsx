import { Outlet, useLocation } from "react-router-dom";

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

export default function QuizPage() {
  const { pathname } = useLocation();

  const stepIndex = quizSteps.findIndex((path) => path === pathname);
  const currentStep = stepIndex >= 0 ? stepIndex + 1 : 0;
  const progressPercent = currentStep * 10;

  return (
    <>
      {/* ✅ GLOBAL PROGRESS (ONLY ONCE) */}
      {currentStep > 0 && (
        <div className="max-w-xl mx-auto px-6 mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentStep} of 10</span>
            <span>{progressPercent}% Complete</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP CONTENT */}
      <Outlet />
    </>
  );
}
