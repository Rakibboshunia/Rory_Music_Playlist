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

      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("lastHour", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border cursor-pointer
            ${
              answers.lastHour === opt.value
                ? "bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white"
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
          className="px-8 py-3 rounded-full 
          bg-linear-to-r from-[#155DFC] to-[#9810FA] 
          cursor-pointer disabled:opacity-50 text-white
          transition-all duration-300 ease-out hover:shadow-lg
          hover:scale-[1.03] active:scale-[0.98]"
        >
          ← Back
        </button>

        <button
          disabled={!answers.lastHour}
          onClick={handleNext}
          className="px-8 py-3 rounded-full 
          bg-linear-to-r from-[#155DFC] to-[#9810FA] 
          cursor-pointer disabled:opacity-50 text-white
          transition-all duration-300 ease-out hover:shadow-lg
          hover:scale-[1.03] active:scale-[0.98]"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
