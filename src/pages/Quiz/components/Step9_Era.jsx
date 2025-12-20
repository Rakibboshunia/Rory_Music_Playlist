import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Smooth & chic", value: "smooth" },
  { label: "Warm & lively", value: "warm" },
  { label: "Up and bouncing", value: "bouncing" },
  { label: "Lose our minds", value: "wild" },
];

export default function Step9_Era() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    console.log("STEP 9 ANSWER:", answers.lastHour);
    navigate("/quiz/final");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        How wild should the last hour be?
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("lastHour", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              answers.lastHour === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.lastHour}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
