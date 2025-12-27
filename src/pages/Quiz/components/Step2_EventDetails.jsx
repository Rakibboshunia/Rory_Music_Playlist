import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Elegant & modern", value: "Elegant & modern" },
  { label: "Fun & nostalgic", value: "Fun & nostalgic" },
  { label: "High-energy floorfillers", value: "High-energy floorfillers" },
  { label: "Ibiza sunset & house", value: "Ibiza sunset & house" },
  { label: "Indie / cool & alternative", value: "Indie / cool & alternative" },
];

export default function Step2_EventDetails() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    navigate("/quiz/genres");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      {/* ================= PROGRESS BAR ================= */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Step 2 of 10</span>
          <span>20%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#155DFC] to-[#9810FA] h-2 rounded-full"
            style={{ width: "20%" }}
          />
        </div>
      </div>
      {/* =============================================== */}

      <h2 className="text-lg font-semibold text-center mb-6">
        Choose your overall vibe
      </h2>

      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("overallVibe", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border cursor-pointer
            ${
              answers.overallVibe === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      {/* BACK + NEXT */}
      <div className="flex justify-between items-center mt-4 pb-6">
        <button
          onClick={handleBack}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer disabled:opacity-50 text-white"
        >
          ← Back
        </button>

        <button
          disabled={!answers.overallVibe}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer disabled:opacity-50 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
