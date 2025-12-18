import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "70s", value: "70s", score: { N: 20 } },
  { label: "80s", value: "80s", score: { N: 20 } },
  { label: "90s", value: "90s", score: { N: 15 } },
  { label: "00s", value: "00s", score: { N: 10 } },
  { label: "10s / Now", value: "10s", score: { M: 20 } },
];

export default function Step7_Energy() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const selected = answers.decades || [];

  const toggle = opt => {
    const exists = selected.includes(opt.value);

    updateAnswer(
      "decades",
      exists
        ? selected.filter(v => v !== opt.value)
        : [...selected, opt.value],
      exists
        ? {
            E: -(opt.score.E || 0),
            M: -(opt.score.M || 0),
            G: -(opt.score.G || 0),
            L: -(opt.score.L || 0),
            N: -(opt.score.N || 0),
          }
        : opt.score
    );
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a decade flavour
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => toggle(opt)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${
              selected.includes(opt.value)
                ? "bg-purple-600 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!selected.length}
          onClick={() => navigate("/quiz/tempo")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
