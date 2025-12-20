import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Wedding (Evening party)", value: "wedding_evening" },
  { label: "Wedding (Drinks reception)", value: "wedding_drinks" },
  { label: "Corporate party / awards", value: "corporate" },
  { label: "Private party / milestone", value: "private" },
  { label: "Black-tie gala", value: "black_tie" },
];

export default function Step1_EventType() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleSubmit = () => {
    console.log("STEP 1 ANSWER:", answers.eventType);
    navigate("/quiz/details"); 
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        What kind of event are you planning?
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("eventType", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              answers.eventType === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.eventType}
          onClick={handleSubmit}
          className="px-10 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
