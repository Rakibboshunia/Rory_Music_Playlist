import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import BackNextButtons from "../../../components/BackNextButtons";

const options = [
  { label: "18–25", value: "18_25" },
  { label: "26–35", value: "26_35" },
  { label: "36–45", value: "36_45" },
  { label: "46–60", value: "46_60" },
  { label: "Mixed ages", value: "Mixed Ages" },
];

export default function Step4_MusicImportance() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    if (!answers.crowdAge) return;
    navigate("/quiz/vibe");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        Your crowd’s sweet spot
      </h2>

      {options.map((opt) => {
        const isSelected = answers.crowdAge === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("crowdAge", opt.value)}
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

      <BackNextButtons
        backPath="/quiz/genres"
        disabled={!answers.crowdAge}
        onNext={handleNext}
      />

    </div>
  );
}