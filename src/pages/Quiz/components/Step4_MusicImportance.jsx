import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  "Nice to have",
  "Very important",
  "Absolutely essential",
];

export default function Step4_MusicImportance() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 4 of 10</span>
          <span>40% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-2/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          How important is music to your event?
        </h2>

        {options.map((item) => (
          <button
            key={item}
            onClick={() => updateAnswer("musicImportance", item)}
            className={`w-full h-[52px] rounded-xl border transition
              ${
                answers.musicImportance === item
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                  : "bg-white border-gray-200"
              }`}
          >
            {item}
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
            disabled={!answers.musicImportance}
            onClick={() => navigate("/quiz/vibe")}
            className={`px-6 py-2 rounded-full text-white
              ${
                answers.musicImportance
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
