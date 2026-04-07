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
                {/* Close */}
                <button
                  onClick={() => {
                    setShowUpgradePopup(false);
                    navigate("/quiz");
                  }}
                  className="absolute top-5 right-6 text-[#6B6B6B] text-xl hover:scale-110 transition"
                >
                  ✕
                </button>

                {/* Title */}
                <h2 className="text-[22px] font-bold text-center text-[#2B2B2B] tracking-tight">
                  Your Personalised Wedding Playlist Is Ready
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-[#6F6F6F] text-center mt-2 leading-relaxed px-6">
                  We’ve created a tailored playlist based on your vibe, your
                  guests, and the atmosphere you want for your night.
                </p>

                {/* Card */}
                <div className="rounded-2xl overflow-hidden border border-[#E6DED3] shadow-md mt-5 transition hover:shadow-lg">
                  {/* TOP */}
                  <div className="bg-[#F5EFE6] px-4 py-4">
                    <h4 className="text-[16px] font-bold mb-2 flex items-center gap-2 text-[#2B2B2B]">
                      ✨ Unlock Your Full 50-Song Wedding Playlist
                    </h4>

                    <p className="text-[13px] font-medium text-[#5F5F5F] leading-relaxed text-start">
                      Get a fuller soundtrack for your night with more
                      personalised recommendations, better flow, and extra
                      crowd-pleasers from first dance through to a packed
                      dancefloor.
                    </p>

                    <p className="text-[13px] mt-3 flex items-center gap-2 text-[#4A4A4A] font-bold">
                      🎁 Includes our Wedding Entertainment Guide free
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="bg-[#F8F8F8] px-4 py-3 border-t border-[#E6DED3] flex items-center justify-between">
                    <div>
                      <p className="text-[28px] font-bold text-[#1F1F1F]">€9</p>
                      <p className="text-[16px] text-[#8A8A8A]">Launch price</p>
                    </div>

                    <p className="text-[12px] font-bold text-[#6F6F6F] leading-relaxed whitespace-nowrap">
                      <span className="font-semibold">Free:</span> 15 songs
                      &nbsp;|&nbsp; Full version: 50 songs + free guide
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6 px-2">
                  {/* Free */}
                  <div className="w-1/2 text-center">
                    <button
                      onClick={handleUpgradeNo}
                      className="w-full py-2.5 rounded-full border border-[#D4D9E1] 
        bg-[#F3F6FB] text-[#2F5BFF] font-medium 
        hover:bg-[#EAF0FF] hover:shadow-sm transition-all duration-200 active:scale-[0.97]"
                    >
                      Get My Free Playlist
                    </button>
                    <p className="text-[13px] text-[#9A9A9A] mt-1">
                      Start with your free 15-song playlist
                    </p>
                  </div>

                  {/* Paid */}
                  <div className="w-1/2 text-center">
                    <button
                      onClick={handleUpgradeYes}
                      disabled={paymentLoading}
                      className="w-full py-2.5 rounded-full 
        bg-gradient-to-r from-[#4C5CF0] to-[#A339F4] 
        text-white font-medium flex items-center justify-center
        hover:shadow-lg hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
                    >
                      {paymentLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Unlock Full Playlist for €9"
                      )}
                    </button>
                    <p className="text-[13px] text-[#9A9A9A] mt-1">
                      Unlock the full 50-song version
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-[#9A9A9A] mt-4 flex items-center justify-center gap-1">
                  <span className="text-[13px]">🔒</span>
                  Secure checkout powered by Stripe
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
