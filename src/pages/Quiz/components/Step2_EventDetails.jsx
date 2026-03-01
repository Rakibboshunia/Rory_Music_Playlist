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

  console.log("🧠 Step2 Answers:", answers);

  const handleNext = () => {
    if (!answers.overallVibe) return;
    navigate("/quiz/genres");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        Choose your overall vibe
      </h2>

      {options.map((opt) => {
        const isSelected = answers.overallVibe === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("overallVibe", opt.value)}
            className={`w-full mb-3 h-13 rounded-xl border cursor-pointer transition-all duration-200
              ${
                isSelected
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
          >
            {opt.label}
          </button>
        );
      })}

      <div className="flex justify-between items-center mt-6">

        <button
          onClick={handleBack}
          className="px-8 py-2 rounded-full 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          text-white hover:shadow-lg transition-all duration-300"
        >
          ← Back
        </button>

        <button
          disabled={!answers.overallVibe}
          onClick={handleNext}
          className="px-8 py-2 rounded-full 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          text-white disabled:opacity-50 disabled:cursor-not-allowed
          hover:shadow-lg transition-all duration-300"
        >
          Next →
        </button>

      </div>
    </div>
  );
}