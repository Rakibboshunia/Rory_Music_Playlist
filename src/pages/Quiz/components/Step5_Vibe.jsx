import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "ABBA – Gimme! Gimme! Gimme!", value: "abba", score: { N: 20, G: 10 } },
  { label: "Calvin Harris", value: "calvin", score: { E: 10, G: 15, M: 10 } },
  { label: "Dua Lipa", value: "dua", score: { M: 15, G: 10 } },
  { label: "Queen", value: "queen", score: { N: 20, E: 10 } },
  { label: "Fleetwood Mac", value: "fleetwood", score: { N: 25 } },
];

export default function Step5_Vibe() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a guaranteed floorfiller
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("floorfiller", opt.value, opt.score)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${answers.floorfiller === opt.value
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white border-gray-200"}`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.floorfiller}
          onClick={() => navigate("/quiz/mood")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
