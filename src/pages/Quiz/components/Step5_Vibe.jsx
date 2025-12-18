import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = ["Chill", "Romantic", "High Energy", "Luxury"];

export default function Step5_Vibe() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 5 of 10</span>
          <span>50% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          What’s the overall vibe you want?
        </h2>

        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => updateAnswer("vibe", opt)}
            className={`w-full h-[52px] rounded-xl border transition
              ${
                answers.vibe === opt
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white border-gray-200"
              }`}
          >
            {opt}
          </button>
        ))}

        <div className="flex justify-between pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border rounded-full"
          >
            ← Back
          </button>

          <button
            disabled={!answers.vibe}
            onClick={() => navigate("/quiz/mood")}
            className={`px-6 py-2 rounded-full text-white
              ${
                answers.vibe
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-300"
              }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
