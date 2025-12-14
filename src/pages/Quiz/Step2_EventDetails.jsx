import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

const options = [
  "Small Gathering",
  "Medium Event",
  "Large Celebration",
];

export default function Step2_EventDetails() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6">
      {/* Progress */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-500">Question 1 of 5</p>
        <div className="h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 w-1/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>
      
      <h2 className="text-lg font-semibold text-center mb-6">
        Tell us about your event size
      </h2>

      {options.map((item) => (
        <button
          key={item}
          onClick={() => updateAnswer("eventDetails", item)}
          className={`w-full mb-3 h-[52px] rounded-xl border transition
            ${
              answers.eventDetails === item
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                : "bg-white border-gray-200"
            }`}
        >
          {item}
        </button>
      ))}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/quiz")}
          className="px-6 py-2 border rounded-full"
        >
          ← Back
        </button>

        <button
          disabled={!answers.eventDetails}
          onClick={() => navigate("/quiz/genres")}
          className={`px-6 py-2 rounded-full text-white
            ${
              answers.eventDetails
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
