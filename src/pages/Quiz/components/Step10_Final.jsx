import { useState } from "react";
import { useNavigate } from "react-router-dom";
import upgradeImg from "../../../assets/img/DiamondLogo.png";
import SpotifyLogo from "../../../assets/img/SpotifyLogo.png";

import { useQuiz } from "../../../context/QuizContext";
import { useAuth } from "../../../context/AuthContext";

import toast from "react-hot-toast";

// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DoNotPlayCard from "../../../components/DoNotPlayCard";

import { submitGuestQuizApi, submitUserQuizApi } from "../../../api/quizApi";

export default function Step10_Final() {
  const navigate = useNavigate();
  const { answers } = useQuiz();
  const { isAuthenticated } = useAuth();

  const [dontPlaySongs, setDontPlaySongs] = useState([]);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [email, setEmail] = useState("");

  const [emailLoading, setEmailLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const isProcessing = isGenerating || paymentLoading;

  const formatAnswers = () => {
    return {
      q1: answers.eventType,
      q2: answers.overallVibe,
      q3: answers.drinksMoment,
      q4: answers.crowdAge,
      q5: answers.floorfiller,
      q6: answers.sax,
      q7: answers.decades?.join(", "),
      q8: answers.genreLean?.join(", "),
      q9: answers.lastHour,
    };
  };

  const DontPlay = () => {
    const filled = dontPlaySongs.filter((song) => song?.trim() !== "");

    if (filled.length === 0) return {};

    if (filled.length === 1) {
      return { q10: filled[0] };
    }

    return {
      q10: filled[0],
      q11: filled.slice(1),
    };
  };

  /* ================= GUEST SUBMIT ================= */
  const submitGuestEmail = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      answers: {
        ...formatAnswers(),
        ...DontPlay(),
      },
    };
    console.log(payload);

    try {
      setEmailLoading(true);

      await submitGuestQuizApi(payload);

      toast.success("Playlist sent!");
      setShowEmailPopup(false);

      setEmail("");

      navigate("/");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setEmailLoading(false);
    }
  };

  /* ================= FREE BUTTON ================= */
  const handleUpgradeNo = async () => {
    setShowUpgradePopup(false);

    // Guest → Go Home
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    // Logged → Generate Free Playlist
    try {
      setIsGenerating(true);

      const payload = {
        answers: {
          ...formatAnswers(),
          ...DontPlay(),
        },
        user_type: "free",
      };

      await submitUserQuizApi(payload);
      navigate("/playlist");
    } catch (err) {
      console.error("Free Submit Error:", err?.response || err);
    } finally {
      setIsGenerating(false);
    }
  };

  /* ============ EXTENDED BUTTON ============ */
  const handleUpgradeYes = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      setPaymentLoading(true);

      const payload = {
        answers: {
          ...formatAnswers(),
          ...DontPlay(),
        },
        user_type: "paid",
      };

      const res = await submitUserQuizApi(payload);
      const checkoutUrl = res?.data?.data?.checkoutUrl;

      window.location.href = checkoutUrl;
    } catch (err) {
      console.error("Paid Submit Error:", err?.response || err);
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 space-y-6 text-center">
      <DoNotPlayCard
        title="🎵 Do Not Play"
        inputCount={3}
        required={false}
        onBack={() => navigate("/quiz/era")}
        onNext={(values) => {
          setDontPlaySongs(values);
          !isAuthenticated
            ? setShowEmailPopup(true)
            : setShowUpgradePopup(true);
        }}
        onSkip={() => {
          !isAuthenticated
            ? setShowEmailPopup(true)
            : setShowUpgradePopup(true);
        }}
      />

      {/* ================= EMAIL POPUP ================= */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-xl p-14 text-center relative">
            {emailLoading ? (
              <div className="h-70 flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-600 font-medium">
                  Preparing your playlist...
                </p>
              </div>
            ) : (
              <>
                {/* Close */}
                <button
                  onClick={() => {
                    setShowEmailPopup(false);
                    navigate("/quiz");
                  }}
                  className="absolute top-5 right-6 text-[#8A8A8A] text-xl hover:text-[#2B2B2B] transition"
                >
                  ✕
                </button>

                {/* Title */}
                <h2 className="text-[22px] font-semibold text-center text-[#2B2B2B] mb-2">
                  Your Personalised Playlist Is Ready
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-center text-[#6B6B6B] mb-6 px-6 leading-relaxed">
                  We’ve created a tailored wedding soundtrack based on your
                  vibe, your guests, and the atmosphere you want for your night.
                </p>

                {/* Highlight Box */}
                <div className="bg-[#F5EFE6] border border-[#E8DFD2] rounded-xl p-4 mb-6 shadow-sm">
                  <p className="text-sm text-[#2B2B2B] font-medium mb-2">
                    ✨ Unlock Your Full Personalised Playlist
                  </p>

                  <p className="text-xs text-[#6B6B6B] leading-relaxed mb-3">
                    Get a complete soundtrack with better flow, key moments, and
                    crowd-pleasing tracks — from your first dance to a packed
                    dancefloor.
                  </p>

                  <p className="text-xs text-[#2B2B2B] flex justify-center items-center gap-2">
                    🎁 Includes instant delivery straight to your inbox
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={submitGuestEmail} className="space-y-4 mb-5">
                  {/* Input */}
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B3FF2] focus:border-transparent transition shadow-sm"
                  />

                  {/* Checkbox */}
                  <label className="flex items-start gap-2 text-xs text-[#6B6B6B] leading-relaxed">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 accent-[#7B3FF2]"
                    />
                    <span>
                      I agree to receive my personalised playlist and occasional
                      updates. You can unsubscribe at any time.
                    </span>
                  </label>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-3">
                    {/* Secondary */}
                    <button
                      type="button"
                      onClick={() => {
                        setShowEmailPopup(false);
                        navigate("/quiz");
                      }}
                      className="w-1/2 border border-gray-300 rounded-full py-3 text-sm text-[#2B2B2B] hover:bg-gray-50 transition-all"
                    >
                      Skip For Now
                    </button>

                    {/* Primary */}
                    <button
                      type="submit"
                      className="w-1/2 rounded-full bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Reveal My Playlist
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <p className="text-center text-xs text-[#9A9A9A]">
                  🔒 Secure checkout • No spam • Instant access
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* ================= UPGRADE POPUP ================= */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-xl px-16 py-15 text-center relative">
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
                  onClick={() => {
                    setShowUpgradePopup(false);
                    navigate("/quiz");
                  }}
                  className="absolute scale-[1.6] text-black top-6 right-8 cursor-pointer"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                  <img src={SpotifyLogo} alt="Spotify" className="h-[2em]" />
                  Your Spotify playlist is ready 💃
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  We’ve created your personalised playlist based on your vibe.
                  Listen now — or unlock your full 3-hour soundtrack.
                </p>

                <div className="bg-gradient-to-r from-[#F6F8FF] to-[#FDFBFF] rounded-2xl p-6 mt-8 shadow-sm border border-gray-100">
                  <h4 className="text-md font-semibold mb-4">
                    ✨ Unlock Your Full Wedding Playlist (50 songs)
                  </h4>

                  <p className="text-sm text-gray-600 mb-4">
                    Covering three hours of your night — from first dance to
                    packed dance floor.
                  </p>

                  <p className="text-sm mb-3">
                    Includes Free Wedding Entertainment Guide
                    <span className="font-bold">(€19 value)</span>
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-3xl font-bold">€9</p>
                      <p className="text-xs text-gray-500">
                        Limited launch price
                      </p>
                    </div>

                    <img src={upgradeImg} className="w-16" />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4 mb-5">
                  🔒 Secure checkout powered by Stripe
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleUpgradeNo}
                    className="w-full sm:w-1/2 py-2.5 gap-1 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg flex items-center justify-center cursor-pointer"
                  >
                    {/* <FiArrowLeft size={20} /> */}
                    Send Free Playlist
                  </button>

                  <button
                    onClick={handleUpgradeYes}
                    disabled={paymentLoading}
                    className="w-full sm:w-1/2 py-2.5 gap-2 rounded-full 
  bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
  text-white hover:shadow-lg transition-all duration-300 
  ease-out hover:scale-[1.03] active:scale-[0.98] 
  flex items-center justify-center cursor-pointer disabled:opacity-70"
                  >
                    {paymentLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Redirecting to secure checkout...
                      </>
                    ) : (
                      <>
                        Unlock My Full Playlist
                        {/* <FiArrowRight size={20} /> */}
                      </>
                    )}
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
