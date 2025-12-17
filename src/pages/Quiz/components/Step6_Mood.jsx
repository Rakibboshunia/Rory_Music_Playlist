import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = ["Relaxed", "Romantic", "Energetic", "Luxury"];

export default function Step6_Mood() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 6 of 10</span>
          <span>60% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-3/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          What mood fits your event best?
        </h2>

        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => updateAnswer("mood", opt)}
            className={`w-full h-[52px] rounded-xl border
              ${
                answers.mood === opt
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white border-gray-200"
              }`}
          >
            {opt}
          </button>
        ))}

        <div className="flex justify-between pt-4">
          <button onClick={() => navigate(-1)} className="px-6 py-2 border rounded-full">
            ← Back
          </button>
          <button
            disabled={!answers.mood}
            onClick={() => navigate("/quiz/energy")}
            className={`px-6 py-2 rounded-full text-white
              ${answers.mood ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-300"}`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
