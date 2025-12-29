import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Wedding (Evening party)", value: "Wedding (Evening party)" },
  { label: "Wedding (Drinks reception)", value: "Wedding (Drinks reception)" },
  { label: "Corporate party / awards", value: "Corporate party / awards" },
  { label: "Private party / milestone", value: "Private party / milestone" },
  { label: "Black-tie gala", value: "Black-tie gala" },
];

export default function Step1_EventType() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleSubmit = () => {
    navigate("/quiz/details");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        What kind of event are you planning?
      </h2>

      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("eventType", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border cursor-pointer
            ${
              answers.eventType === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      {/* 🔽 BUTTONS */}
      <div className="flex justify-between items-center mt-4 pb-6">
        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="px-5 py-3 rounded-full text-white 
          bg-linear-to-r from-[#155DFC] to-[#9810FA] 
          cursor-pointer disabled:opacity-50 hover:shadow-lg
          transition-all duration-300 ease-out 
          hover:scale-[1.03] active:scale-[0.98]"
        >
          ← Back to Home
        </button>

        {/* Next */}
        <button
          disabled={!answers.eventType}
          onClick={handleSubmit}
          className="px-10 py-3 rounded-full text-white 
          bg-linear-to-r from-[#155DFC] to-[#9810FA] 
          cursor-pointer disabled:opacity-50 hover:shadow-lg
          transition-all duration-300 ease-out 
          hover:scale-[1.03] active:scale-[0.98]"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
