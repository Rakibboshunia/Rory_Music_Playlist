import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

export default function Step5_Email() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/playlist"); // 🔥 FINAL REDIRECT
  };

  return (
    <div className="max-w-md mx-auto px-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 5 of 5</span>
          <span>100% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-center mb-4">
          Where should we send your playlist?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={answers.email}
            onChange={(e) => updateAnswer("email", e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Generate My Playlist →
          </button>
        </form>
      </div>
    </div>
  );
}
