import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Champagne tower", value: "champagne" },
  { label: "Espresso martinis", value: "espresso" },
  { label: "Craft cocktails", value: "craft" },
  { label: "Pints with pals", value: "pints" },
  { label: "Rosé on the terrace", value: "rose" },
];

export default function Step3_Genres() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    console.log("STEP 3 ANSWER:", answers.drinksMoment);
    navigate("/quiz/importance");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a drinks moment
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("drinksMoment", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              answers.drinksMoment === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.drinksMoment}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
