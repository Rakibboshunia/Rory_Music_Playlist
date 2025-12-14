import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

export default function Step5_FinalQuestion() {
  const { answers, updateAnswer } = useQuiz();
  const navigate = useNavigate();

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = ["Chill", "Romantic", "High Energy", "Luxury"];

  const handleComplete = () => {
    setShowEmailModal(true);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/playlist");
    }, 1200);
  };

  return (
    <div className="max-w-xl mx-auto px-6 relative">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 5 of 5</span>
          <span>100% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          What’s the overall vibe you want?
        </h2>

        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => updateAnswer("vibe", opt)}
            className={`w-full h-[52px] rounded-xl border transition
              ${
                answers.vibe === opt
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white border-gray-200"
              }`}
          >
            {opt}
          </button>
        ))}

        <div className="flex justify-between pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-full border"
          >
            ← Back
          </button>

          <button
            disabled={!answers.vibe}
            onClick={handleComplete}
            className={`px-6 py-2 rounded-full text-white
              ${
                answers.vibe
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-300"
              }`}
          >
            Complete →
          </button>
        </div>
      </div>

      {/* 🔥 EMAIL MODAL (STEP-6) */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                ✉️
              </div>
              <h3 className="text-xl font-semibold">
                Get your personalised playlist
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Pop in your email to unlock your soundtrack
              </p>
            </div>

            <form onSubmit={submitEmail} className="space-y-4">
              <input
                type="email"
                required
                value={answers.email}
                onChange={(e) => updateAnswer("email", e.target.value)}
                placeholder="your@email.com"
                className="w-full border rounded-lg px-4 py-3"
              />

              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" required />
                I agree to receive my playlist & updates.
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-full text-white
                  ${
                    loading
                      ? "bg-gray-400"
                      : "bg-gradient-to-r from-blue-500 to-purple-500"
                  }`}
              >
                {loading ? "Generating..." : "Reveal My Playlist"}
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                We respect your privacy. Data is never shared.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
