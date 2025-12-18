import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

const options = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Anniversary",
];

export default function Step1_EventType() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();

  return (
    <div className="max-w-xl mx-auto px-6">
      <h1 className="text-5xl text-center mb-8">
        Your night. Your energy. <br /> Your soundtrack.
      </h1>

      <p className="text-center text-xl text-gray-700 mb-8">
        From vision to reality in three simple steps.
      </p>

      {/* Progress */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-500">Question 1 of 10</p>
        <div className="h-2 bg-gray-200 rounded-full mt-2">
          <div className="h-2 w-[10%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          What type of event are you planning?
        </h2>

        {options.map((item) => {
          const selected = answers.eventType === item;

          return (
            <button
              key={item}
              onClick={() => updateAnswer("eventType", item)}
              className={`w-full h-[56px] rounded-xl border text-base font-medium transition
                ${
                  selected
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                    : "bg-white border-gray-200 hover:border-blue-400"
                }`}
            >
              {item}
            </button>
          );
        })}

        <div className="flex justify-end pt-4">
          <button
            disabled={!answers.eventType}
            onClick={() => navigate("/quiz/details")}
            className={`px-6 py-2 rounded-full text-white transition
              ${
                answers.eventType
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
