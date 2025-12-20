import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "70s", value: "70s" },
  { label: "80s", value: "80s" },
  { label: "90s", value: "90s" },
  { label: "00s", value: "00s" },
  { label: "10s / Now", value: "10s" },
];

export default function Step7_Energy() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const selected = answers.decades || [];

  const toggle = value => {
    const updated = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value];

    updateAnswer("decades", updated);
  };

  const handleNext = () => {
    console.log("STEP 7 ANSWER:", answers.decades);
    navigate("/quiz/tempo");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a decade flavour
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => toggle(opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
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
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
