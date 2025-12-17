import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = ["70s–80s", "90s–00s", "Modern", "Mixed"];

export default function Step9_Era() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 9 of 10</span>
          <span>90% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-[90%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          Which era should dominate?
        </h2>

        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => updateAnswer("era", opt)}
            className={`w-full h-[52px] rounded-xl border
              ${
                answers.era === opt
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
            disabled={!answers.era}
            onClick={() => navigate("/quiz/final")}
            className={`px-6 py-2 rounded-full text-white
              ${answers.era ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-300"}`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
