import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import BackNextButtons from "../../../components/BackNextButtons";

const options = [
  { label: "ABBA – Gimme! Gimme! Gimme!", value: "ABBA Gimme! Gimme! Gimme!" },
  { label: "Calvin Harris", value: "Calvin Harris" },
  { label: "Dua Lipa", value: "Dua Lipa" },
  { label: "Queen", value: "Queen" },
  { label: "Fleetwood Mac", value: "Fleetwood Mac" },
];

export default function Step5_Vibe() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    if (!answers.floorfiller) return;
    navigate("/quiz/mood");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a guaranteed floorfiller
      </h2>

      {options.map((opt) => {
        const isSelected = answers.floorfiller === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("floorfiller", opt.value)}
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
        backPath="/quiz/vibe"
        disabled={!answers.floorfiller}
        onNext={handleNext}
      />

    </div>
  );
}