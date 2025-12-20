import { useQuiz } from "../../../context/QuizContext";

export default function Step10_Final() {
  const { answers } = useQuiz();

  const handleSubmit = () => {
    const payload = {
      q1: answers.eventType,
      q2: answers.overallVibe,
      q3: answers.drinksMoment,
      q4: answers.crowdAge,
      q5: answers.floorfiller,
      q6: answers.sax,
      q7: answers.decades,
      q8: answers.genreLean,
      q9: answers.lastHour,
    };

    // ✅ EXACT JSON FORMAT (API-ready)
    console.log("FINAL JSON PAYLOAD:");
    console.log(payload);

    // ✅ Copy-paste friendly JSON
    console.log("JSON STRING:");
    console.log(JSON.stringify(payload, null, 2));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 text-center">
      <h2 className="text-2xl font-semibold">
        Your vibe is ready ✨
      </h2>

      <p className="text-gray-500">
        Based on your answers, your night feels like:
      </p>

      <button
        onClick={handleSubmit}
        className="mt-6 px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white"
      >
        Reveal My Playlist →
      </button>
    </div>
  );
}
