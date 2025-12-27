import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";
import { useAuth } from "../../../context/AuthContext";
import upgradeImg from "../../../assets/img/UpgradePopup.png";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

export default function Step10_Final() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useQuiz();
  const { isAuthenticated } = useAuth();

  const [isGenerating, setIsGenerating] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  /* ======================
     FINAL SUBMIT HANDLER
  ====================== */
  const handleComplete = () => {
    if (!isAuthenticated) {
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

    const payload = {
      email,
      answers: {
        q1: answers.eventType,
        q2: answers.overallVibe,
        q3: answers.drinksMoment,
        q4: answers.crowdAge,
        q5: answers.floorfiller,
        q6: answers.sax,
        q7: answers.decades,
        q8: answers.genreLean,
        q9: answers.lastHour,
        q10: answers.doNotPlays,
      },
    };

    try {
      setLoading(true);

      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/quiz/guest/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Failed");

      const data = await response.json();
      toast.success(data.message || "Playlist sent to your email!");

      setShowEmailPopup(false);
      setEmail("");
      updateAnswer("doNotPlays", "");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ======================
     UPGRADE ACTIONS
  ====================== */

  const handleUpgradeYes = async () => {
    const payload = {
      answers: {
        q1: answers.eventType,
        q2: answers.overallVibe,
        q3: answers.drinksMoment,
        q4: answers.crowdAge,
        q5: answers.floorfiller,
        q6: answers.sax,
        q7: answers.decades,
        q8: answers.genreLean,
        q9: answers.lastHour,
        q10: answers.doNotPlays,
      },
      user_type: "paid",
    };

    try {
      setPaymentLoading(true);
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/quiz/user/submit",
        payload,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      window.open(res.data?.data?.checkoutUrl, "_self");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setPaymentLoading(false);
    }
  };

  const handleUpgradeNo = async () => {
    const payload = {
      answers: {
        q1: answers.eventType,
        q2: answers.overallVibe,
        q3: answers.drinksMoment,
        q4: answers.crowdAge,
        q5: answers.floorfiller,
        q6: answers.sax,
        q7: answers.decades,
        q8: answers.genreLean,
        q9: answers.lastHour,
        q10: answers.doNotPlays,
      },
      user_type: "free",
    };

    try {
      setIsGenerating(true);
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/quiz/user/submit",
        payload,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      toast.success("Playlist is Generated");
      navigate("/playlist");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 space-y-6 text-center">

      <h2 className="text-2xl font-semibold">Your vibe is ready ✨</h2>

      <p className="text-gray-500">
        Based on your answers, your night feels like:
      </p>

      {/* ======================
          Q10 – DO NOT PLAYS
      ====================== */}
      <div className="bg-[#F6F8FF] rounded-2xl p-5 text-left space-y-2">
        <h3 className="text-base font-semibold text-gray-800">
          Any firm “do-not-plays”?
        </h3>

        <p className="text-sm text-gray-500">
          Artists or songs you definitely don’t want to hear.
        </p>

        <textarea
          rows={3}
          placeholder="e.g. Drake, heavy metal, explicit lyrics…"
          value={answers.doNotPlays || ""}
          onChange={(e) => updateAnswer("doNotPlays", e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
        />
      </div>

      {/* BACK + SUBMIT */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="px-6 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer"
        >
          ← Back
        </button>

        <button
          onClick={handleComplete}
          className="px-6 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer"
        >
          Submit →
        </button>
      </div>

      {/* =========================
          GUEST EMAIL POPUP
      ========================= */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 relative shadow-xl">
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 text-gray-400"
            >
              ✕
            </button>

            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#155DFC] to-[#9810FA] flex items-center justify-center text-white text-xl">
                ✉️
              </div>
            </div>

            <h3 className="text-xl font-semibold text-center">
              Get your personalised playlist
            </h3>

            <p className="text-sm text-gray-500 text-center mt-1 mb-5">
              Pop in your email to unlock your soundtrack.
            </p>

            <form onSubmit={submitGuestEmail} className="space-y-4">
              <input
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm"
              />

              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I agree to receive my personalised playlist and occasional
                  updates from DJ & SAX®. You can unsubscribe anytime.
                </span>
              </label>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-full text-white bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer
                  ${
                    loading
                      ? "bg-gray-400"
                      : "bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer"
                  }`}
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

      {/* =========================
          UPGRADE POPUP (LOGGED USER)
      ========================= */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md text-center relative">
            <button
              onClick={() => setShowUpgradePopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="w-full flex justify-center mb-4">
              <img
                src={upgradeImg}
                alt="Upgrade illustration"
                className="w-48 sm:w-56 md:w-60 object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Upgrade your Playlist with Payment
            </h3>

            <div className="flex gap-3 justify-center">
              <div className="flex gap-3 justify-center">
                {!isGenerating ? (
                  <>
                    {/* NO BUTTON */}
                    <button
                      onClick={handleUpgradeNo}
                      className="px-6 py-2 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white hover:opacity-90 transition cursor-pointer"
                    >
                      Back
                    </button>
                  </>
                ) : (
                  /* LOADING STATE */
                  <div 
                  className="px-6 py-2 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white hover:opacity-90 transition cursor-pointer"
                  >
                    Generating playlist…
                  </div>
                )}
                {!paymentLoading ? (
                  <button
                    onClick={handleUpgradeYes}
                    className="px-6 py-2 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white hover:opacity-90 transition cursor-pointer"
                  >
                    Get Premium
                  </button>
                ) : (
                  <div 
                  className="px-6 py-2 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white hover:opacity-90 transition cursor-pointer"
                  >
                    Generating Payment Link
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
