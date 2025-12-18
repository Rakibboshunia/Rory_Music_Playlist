import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Pop / Disco / Classics", value: "pop", score: { G: 5, N: 10 } },
  { label: "House / Euphoric vocals", value: "house", score: { G: 30, M: 10 } },
  { label: "R&B / Hip-Hop throwbacks", value: "rnb", score: { N: 15, E: 10 } },
  { label: "Indie / Alt party tunes", value: "indie", score: { G: -5, N: 10 } },
  { label: "Chart / Top 40 only", value: "top40", score: { M: 25, G: 10 } },
];

export default function Step8_Tempo() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const selected = answers.genreLean || [];

  const toggle = opt => {
    const exists = selected.includes(opt.value);
    if (!exists && selected.length === 2) return;

    updateAnswer(
      "genreLean",
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
        Genre lean (choose up to 2)
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
          onClick={() => navigate("/quiz/era")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
