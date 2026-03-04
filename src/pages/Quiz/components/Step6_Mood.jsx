import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import BackNextButtons from "../../../components/BackNextButtons";

const options = [
  { label: "Absolutely — feature it", value: "Absolutely - Feature It" },
  { label: "Nice as an add-on", value: "Nice as an add-on" },
  { label: "Not essential", value: "Not essential" },
];

export default function Step6_Mood() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    if (!answers.sax) return;
    navigate("/quiz/energy");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-6 rounded-xl">

      <h2 className="text-lg font-semibold text-center mb-6">
        Sax on the night?
      </h2>

      {options.map((opt) => {
        const isSelected = answers.sax === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => updateAnswer("sax", opt.value)}
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
        backPath="/quiz/mood"
        disabled={!answers.sax}
        onNext={handleNext}
      />

    </div>
  );
}