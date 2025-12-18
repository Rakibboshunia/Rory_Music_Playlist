import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  {
    label: "Absolutely — feature it",
    value: "sax_feature",
    score: { L: 30 },
  },
  {
    label: "Nice as an add-on",
    value: "sax_addon",
    score: { L: 15 },
  },
  {
    label: "Not essential",
    value: "no_sax",
    score: {},
  },
];

export default function Step6_Mood() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Sax on the night?
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("sax", opt.value, opt.score)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${
              answers.sax === opt.value
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.sax}
          onClick={() => navigate("/quiz/energy")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
