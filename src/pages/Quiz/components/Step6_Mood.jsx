import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  { label: "Absolutely — feature it", value: "sax_feature"},
  { label: "Nice as an add-on",value: "sax_addon"},
  { label: "Not essential",value: "no_sax"},
];

export default function Step6_Mood() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  const handleNext = () => {
    console.log("STEP 6 ANSWER:", answers.sax);
    navigate("/quiz/energy");
  };

  return (
    <div className="max-w-xl mx-auto px-6 shadow-xl py-2 rounded-xl">
      <h2 className="text-lg font-semibold text-center mb-6">
        Sax on the night?
      </h2>

      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => updateAnswer("sax", opt.value)}
          className={`w-full mb-3 h-13 rounded-xl border
            ${
              answers.sax === opt.value
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white border-gray-200"
            }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="flex justify-center mt-4 pb-6">
        <button
          disabled={!answers.sax}
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
