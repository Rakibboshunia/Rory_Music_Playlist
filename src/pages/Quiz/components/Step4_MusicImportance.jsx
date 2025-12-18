import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "18–25", value: "18_25", score: { M: 25, E: 10 } },
  { label: "26–35", value: "26_35", score: { M: 10, E: 5 } },
  { label: "36–45", value: "36_45", score: { N: 10 } },
  { label: "46–60", value: "46_60", score: { N: 20 } },
  { label: "Mixed ages", value: "mixed", score: { N: 10, E: 5 } },
];

export default function Step4_MusicImportance() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Your crowd’s sweet spot
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("crowdAge", opt.value, opt.score)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${answers.crowdAge === opt.value
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white border-gray-200"}`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.crowdAge}
          onClick={() => navigate("/quiz/vibe")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
