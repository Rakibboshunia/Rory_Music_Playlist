import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import BackNextButtons from "../../../components/BackNextButtons";

const options = [
  { label: "Elegant & modern", value: "Elegant & modern" },
  { label: "Fun & nostalgic", value: "Fun & nostalgic" },
  { label: "High-energy floorfillers", value: "High-energy floorfillers" },
  { label: "Ibiza sunset & house", value: "Ibiza sunset & house" },
  { label: "Indie / cool & alternative", value: "Indie / cool & alternative" },
];

export default function Step2_EventDetails() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    if (!answers.overallVibe) return;
    navigate("/quiz/genres");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Choose your overall vibe
      </h2>

      {options.map((opt) => {
        const isSelected = answers.overallVibe === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("overallVibe", opt.value)}
            className={`w-full mb-3 h-13 rounded-xl border cursor-pointer transition-all duration-200
              ${
                isSelected
                  ? "bg-linear-to-r from-blue-500 to-purple-500 text-white border-transparent"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
          >
            {opt.label}
          </button>
        );
      })}

      <BackNextButtons
        backPath="/quiz"
        disabled={!answers.overallVibe}
        onNext={handleNext}
      />
    </div>
  );
}
