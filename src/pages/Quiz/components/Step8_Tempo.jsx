import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Pop / Disco / Classics", value: "Pop / Disco / Classics" },
  { label: "House / Euphoric vocals", value: "House / Euphoric vocals" },
  { label: "R&B / Hip-Hop throwbacks", value: "R&B / Hip-Hop throwbacks" },
  { label: "Indie / Alt party tunes", value: "Indie / Alt party tunes" },
  { label: "Chart / Top 40 only", value: "Chart / Top 40 only" },
];

export default function Step8_Tempo() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const selected = answers.genreLean || [];

  const toggle = value => {
    const exists = selected.includes(value);

    // ✅ max 2 selection rule stays
    if (!exists && selected.length === 2) return;

    const updated = exists
      ? selected.filter(v => v !== value)
      : [...selected, value];

    updateAnswer("genreLean", updated);
  };

  const handleNext = () => {
    
    navigate("/quiz/era");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Genre lean (choose up to 2)
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => toggle(opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              selected.includes(opt.value)
                ? "bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!selected.length}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA]  cursor-pointer disabled:opacity-50 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
