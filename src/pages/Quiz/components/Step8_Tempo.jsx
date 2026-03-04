import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import BackNextButtons from "../../../components/BackNextButtons";

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

  const toggle = (value) => {
    const exists = selected.includes(value);

    if (!exists && selected.length === 2) return;

    const updated = exists
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    updateAnswer("genreLean", updated);
  };

  const handleNext = () => {
    if (!selected.length) return;
    navigate("/quiz/era");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Genre lean (choose up to 2)
      </h2>

      {options.map((opt) => {
        const isSelected = selected.includes(opt.value);

        return (
          <button
            key={opt.value}
            onClick={() => toggle(opt.value)}
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

      <BackNextButtons
        backPath="/quiz/tempo"
        disabled={!selected.length}
        onNext={handleNext}
      />
    </div>
  );
}
