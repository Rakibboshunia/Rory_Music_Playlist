import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Champagne tower", value: "champagne", score: { L: 10, M: 5, E: -5 } },
  { label: "Espresso martinis", value: "espresso", score: { E: 10, M: 10 } },
  { label: "Craft cocktails", value: "craft", score: { M: 15, G: 5 } },
  { label: "Pints with pals", value: "pints", score: { N: 15 } },
  { label: "Rosé on the terrace", value: "rose", score: { G: 10 } },
];

export default function Step3_Genres() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a drinks moment
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("drinksMoment", opt.value, opt.score)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${answers.drinksMoment === opt.value
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white border-gray-200"}`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.drinksMoment}
          onClick={() => navigate("/quiz/importance")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
