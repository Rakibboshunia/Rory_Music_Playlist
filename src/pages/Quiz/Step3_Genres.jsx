import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

const genresList = ["Pop", "Rock", "Jazz", "Classical", "EDM"];

export default function Step3_Genres() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const toggleGenre = (genre) => {
    const exists = answers.genres.includes(genre);
    updateAnswer(
      "genres",
      exists
        ? answers.genres.filter((g) => g !== genre)
        : [...answers.genres, genre]
    );
  };

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
        Select your preferred genres
      </h2>

      {genresList.map((g) => (
        <button
          key={g}
          onClick={() => toggleGenre(g)}
          className={`w-full mb-3 h-[52px] rounded-xl border transition
            ${
              answers.genres.includes(g)
                ? "bg-purple-600 text-white border-transparent"
                : "bg-white border-gray-200"
            }`}
        >
          {g}
        </button>
      ))}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/quiz/details")}
          className="px-6 py-2 border rounded-full"
        >
          ← Back
        </button>

        <button
          disabled={!answers.genres.length}
          onClick={() => navigate("/quiz/email")}
          className={`px-6 py-2 rounded-full text-white
            ${
              answers.genres.length
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
