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

  const stepIndex = quizSteps.findIndex((path) =>
    pathname.startsWith(path)
  );

  const currentStep = stepIndex >= 0 ? stepIndex + 1 : 0;
  const progressPercent = currentStep * 10;

  return (
    <div className="bg-white min-h-screen pb-10">

      {/* ===== GLOBAL PROGRESS ===== */}
      {currentStep > 0 && (
        <div className="max-w-xl mx-auto px-6 pt-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentStep} of 10</span>
            <span>{progressPercent}% Complete</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* ===== STEP CONTENT ===== */}
      <div className="max-w-xl mx-auto px-6">
        <Outlet />
      </div>
    </div>
  );
}
