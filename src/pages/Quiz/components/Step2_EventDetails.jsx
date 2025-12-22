
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

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Choose your overall vibe
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("overallVibe", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              answers.overallVibe === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.overallVibe}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA]  cursor-pointer disabled:opacity-50 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
