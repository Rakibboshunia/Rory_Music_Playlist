import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Champagne tower", value: "Champagne Tower" },
  { label: "Espresso martinis", value: "Espresso Martinis" },
  { label: "Craft cocktails", value: "Craft Cocktails" },
  { label: "Pints with pals", value: "Pints with Pals" },
  { label: "Rosé on the terrace", value: "Rosé on the Terrace" },
];

export default function Step3_Genres() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    if (!answers.drinksMoment) return;
    navigate("/quiz/importance");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        Pick a drinks moment
      </h2>

      {options.map((opt) => {
        const isSelected = answers.drinksMoment === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("drinksMoment", opt.value)}
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

      <div className="flex justify-between items-center mt-6">

        <button
          onClick={handleBack}
          className="px-8 py-2 rounded-full 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          text-white hover:shadow-lg transition-all duration-300"
        >
          ← Back
        </button>

        <button
          disabled={!answers.drinksMoment}
          onClick={handleNext}
          className="px-8 py-2 rounded-full 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          text-white disabled:opacity-50 disabled:cursor-not-allowed
          hover:shadow-lg transition-all duration-300"
        >
          Next →
        </button>

      </div>
    </div>
  );
}