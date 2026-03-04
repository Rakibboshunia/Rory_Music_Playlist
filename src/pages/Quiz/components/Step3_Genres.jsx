import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import BackNextButtons from "../../../components/BackNextButtons";

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

      <BackNextButtons
        backPath="/quiz/genres"
        disabled={!answers.drinksMoment}
        onNext={handleNext}
      />
    </div>
  );
}
