import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Elegant & modern", value: "elegant", score: { E: -5, M: 15, G: 5, L: 10 } },
  { label: "Fun & nostalgic", value: "nostalgic", score: { N: 25, E: 5 } },
  { label: "High-energy floorfillers", value: "energy", score: { E: 30, G: 15 } },
  { label: "Ibiza sunset & house", value: "ibiza", score: { E: 15, G: 30, M: 10 } },
  { label: "Indie / cool & alternative", value: "indie", score: { G: -10, N: 10 } },
];

export default function Step2_EventDetails() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Choose your overall vibe
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("overallVibe", opt.value, opt.score)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${answers.overallVibe === opt.value
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white border-gray-200"}`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6 ">
        <button
          disabled={!answers.overallVibe}
          onClick={() => navigate("/quiz/genres")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
