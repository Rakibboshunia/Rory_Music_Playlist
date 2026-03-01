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

  console.log("🧠 Step1 Current Answers:", answers);

  const handleSubmit = () => {
    if (!answers.eventType) return;
    navigate("/quiz/details");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        What kind of event are you planning?
      </h2>

      {options.map((opt) => {
        const isSelected = answers.eventType === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("eventType", opt.value)}
            className={`w-full mb-3 h-13 rounded-xl border cursor-pointer transition-all duration-200
              ${
                isSelected
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
          >
            {opt.label}
          </button>
        );
      })}

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-full text-white 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          hover:shadow-lg transition-all duration-300"
        >
          ← Back to Home
        </button>

        <button
          disabled={!answers.eventType}
          onClick={handleSubmit}
          className="px-8 py-2 rounded-full text-white 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:shadow-lg transition-all duration-300"
        >
          Next →
        </button>

      </div>
    </div>
  );
}