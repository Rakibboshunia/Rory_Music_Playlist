
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

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
   
    navigate("/quiz/mood");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a guaranteed floorfiller
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("floorfiller", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              answers.floorfiller === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.floorfiller}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA]  cursor-pointer disabled:opacity-50 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
