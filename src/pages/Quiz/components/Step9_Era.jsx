import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Smooth & chic", value: "Smooth & chic" },
  { label: "Warm & lively", value: "Warm & lively" },
  { label: "Up and bouncing", value: "Up and bouncing" },
  { label: "Lose our minds", value: "Lose our minds" },
];

export default function Step9_Era() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    if (!answers.lastHour) return;
    navigate("/quiz/final");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        How wild should the last hour be?
      </h2>

      {options.map((opt) => {
        const isSelected = answers.lastHour === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("lastHour", opt.value)}
            className={`w-full mb-3 h-13 rounded-xl border cursor-pointer transition-all duration-200
              ${
                isSelected
                  ? "bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white border-transparent"
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
          disabled={!answers.lastHour}
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