import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import { useAuth } from "../../../context/AuthContext";

export default function Step5_FinalQuestion() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();
  const { isAuthenticated } = useAuth();

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = ["Chill", "Romantic", "High Energy", "Luxury"];

  // 🔥 FINAL DECISION LOGIC
  const handleComplete = () => {
    if (!isAuthenticated) {
      setShowEmailModal(true); // guest
    } else {
      setShowUpgradeModal(true); // logged in
    }
  };

  // EMAIL SUBMIT (Guest)
  const submitEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/playlist");
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto px-6 relative">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question 5 of 10</span>
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

      {/* ================= EMAIL MODAL (Guest) ================= */}
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
              <p className="text-sm text-gray-500">
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

              <label className="flex gap-2 text-xs text-gray-500">
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
            </form>
          </div>
        </div>
      )}

      {/* ================= UPGRADE MODAL (Logged in) ================= */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md text-center relative">
            <button
              onClick={() => setShowUpgradeModal(false)}
              className="absolute top-4 right-4 text-gray-400"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4">
              Do you want to upgrade your status?
            </h3>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => navigate("/playlist")}
                className="px-6 py-2 rounded-full border"
              >
                No
              </button>

              <button
                onClick={() => navigate("/upgrade")}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}