import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Wedding (Evening party)", value: "wedding_evening", score: { E: 15, N: 10 } },
  { label: "Wedding (Drinks reception)", value: "wedding_drinks", score: { E: -20, L: 15 } },
  { label: "Corporate party / awards", value: "corporate", score: { M: 10, G: 10 } },
  { label: "Private party / milestone", value: "private", score: { E: 10, N: 5 } },
  { label: "Black-tie gala", value: "black_tie", score: { E: -10, M: -5, L: 10 } },
];

export default function Step1_EventType() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        What kind of event are you planning?
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("eventType", opt.value, opt.score)}
          className={`w-full mb-3 h-[52px] rounded-xl border
            ${answers.eventType === opt.value
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white border-gray-200"}`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.eventType}
          onClick={() => navigate("/quiz/details")}
          className="px-10 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
