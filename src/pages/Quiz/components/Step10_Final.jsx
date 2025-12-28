import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import { useAuth } from "../../../context/AuthContext";
import upgradeImg from "../../../assets/img/DiamondLogo.png";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

export default function Step10_Final() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();
  const { isAuthenticated } = useAuth();

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [isGenerating, setIsGenerating] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const isProcessing = isGenerating || paymentLoading;

  /* ======================
     FINAL SUBMIT
  ====================== */
  const handleComplete = () => {
    const token = Cookies.get("token");

    if (!token) {
      setShowEmailPopup(true);
    } else {
      setShowUpgradePopup(true);
    }
  };

  /* ======================
     GUEST EMAIL SUBMIT
  ====================== */
  const submitGuestEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await fetch(import.meta.env.VITE_BACKEND_URL + "/quiz/guest/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers }),
      });

      toast.success("Playlist sent!");
      setShowEmailPopup(false);
      setEmail("");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ======================
     FREE FLOW
  ====================== */
  const handleUpgradeNo = async () => {
    setIsGenerating(true);

    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/quiz/user/submit",
        {
          answers,
          user_type: "free",
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      navigate("/playlist");
    } catch {
      setIsGenerating(false);
    }
  };

  /* ======================
     PAID FLOW
  ====================== */
  const handleUpgradeYes = async () => {
    setPaymentLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/quiz/user/submit",
        {
          answers,
          user_type: "paid",
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      window.location.href = res.data?.data?.checkoutUrl;
    } catch {
      setPaymentLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 text-center">

      {/* ===== HEADER ===== */}
      <h2 className="text-2xl font-semibold">Your vibe is ready ✨</h2>
      <p className="text-gray-500">
        Based on your answers, your night feels like:
      </p>

      {/* ===== DO NOT PLAYS ===== */}
      <div className="bg-[#F6F8FF] rounded-2xl p-5 text-left space-y-2">
        <h3 className="text-base font-semibold text-gray-800">
          Any firm “do-not-plays”?
        </h3>
        <p className="text-sm text-gray-500">
          Artists or songs you definitely don’t want to hear.
        </p>

        <textarea
          rows={3}
          value={answers.doNotPlays || ""}
          onChange={(e) => updateAnswer("doNotPlays", e.target.value)}
          className="w-full border rounded-xl px-4 py-3 text-sm"
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleComplete}
          className="px-6 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer"
        >
          Submit →
        </button>
      </div>

      {/* ================= EMAIL POPUP ================= */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 text-center relative">

            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 text-gray-400 cursor-pointer"
            >
              ✕
            </button>

            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#155DFC] to-[#9810FA] flex items-center justify-center text-white text-xl">
                ✉️
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Get your personalised playlist
            </h3>

            <p className="text-sm text-gray-500 text-center mt-1 mb-5">
              Pop in your email to unlock your soundtrack.
            </p>

            <form onSubmit={submitGuestEmail} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border rounded-full px-4 py-3"
              />

              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I agree to receive my personalised playlist and occasionalupdates from DJ & SAX®. You can unsubscribe anytime.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full text-white bg-linear-to-r from-[#155DFC] to-[#9810FA] curpsor-pointer"
              >
                {loading ? "Sending..." : "Reveal My Playlist"}
              </button>

              <p className="text-xs text-gray-500">
                We respect your privacy. Your data is secure and never shared.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ================= UPGRADE POPUP ================= */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 text-center relative">

            {isProcessing ? (
              <div className="py-20 flex flex-col items-center gap-4">
                <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-lg font-semibold text-gray-700">
                  Processing...
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowUpgradePopup(false)}
                  className="absolute top-4 right-4 text-gray-400 cursor-pointer"
                >
                  ✕
                </button>

                <h3 className="text-xl font-semibold mb-8">
                  Upgrade your Playlist <br /> with Payment
                </h3>

                <div className="bg-[#F6F8FF] rounded-xl p-4 flex items-center justify-between mb-10">
                  <div>
                    <p className="text-sm text-gray-500 text-left">Pro Plan</p>
                    <p className="text-2xl font-bold text-left">$9.00</p>
                    <p className="text-sm text-blue-600">
                      For your next 50 playlists
                    </p>
                  </div>

                  <img src={upgradeImg} className="w-14" />
                </div>

                <div className="flex gap-5">
                  <button
                    onClick={handleUpgradeNo}
                    className="w-1/2 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    onClick={handleUpgradeYes}
                    className="w-1/2 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer"
                  >
                    Get Premium
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
