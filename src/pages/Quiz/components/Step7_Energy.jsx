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

  const toggle = (value) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    updateAnswer("decades", updated);
  };

  const handleNext = () => {
    navigate("/quiz/tempo");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      {/* ================= PROGRESS BAR ================= */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Step 7 of 10</span>
          <span>70%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#155DFC] to-[#9810FA] h-2 rounded-full"
            style={{ width: "70%" }}
          />
        </div>
      </div>
      {/* =============================================== */}

      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a decade (Select one or more)
      </h2>

      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => toggle(opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border cursor-pointer
            ${
              selected.includes(opt.value)
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
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer disabled:opacity-50 text-white"
        >
          ← Back
        </button>

        <button
          disabled={!selected.length}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer disabled:opacity-50 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
