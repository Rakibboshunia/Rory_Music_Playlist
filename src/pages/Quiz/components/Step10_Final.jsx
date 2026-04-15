import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useQuiz } from "../../../context/QuizContext";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";

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

  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const checkboxRef = useRef(null);

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

    if (!isChecked) {
      setCheckboxError("You must agree");
      toast.error("You must agree before continuing");

      // ✅ scroll + focus
      checkboxRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      checkboxRef.current?.focus();

      return;
    } else {
      setCheckboxError("");
    }

    if (!email) {
      toast.error("Email is required");
      return;
    }

    const payload = {
      email,
      answers: {
        ...formatAnswers(),
        ...DontPlay(),
      },
    };

    try {
      setEmailLoading(true);

      await submitGuestQuizApi(payload);
      toast.success("Your free playlist has been successfully sent to your email. Please check your inbox.");

      setShowEmailPopup(false);
      setEmail("");
      setIsChecked(false);
      setCheckboxError("");

      navigate("/");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setEmailLoading(false);
    }
  };

  /* ================= FREE BUTTON ================= */
  const handleUpgradeNo = async () => {
    setShowUpgradePopup(false);

    if (!isAuthenticated) {
      toast.info("Please login first");
      navigate("/");
      return;
    }

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
      toast.success("Playlist generated successfully");

      navigate("/playlist");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Failed to generate playlist. Please try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  /* ============ EXTENDED BUTTON ============ */
  const handleUpgradeYes = async () => {
    if (!isAuthenticated) {
      toast.info("Please login first");
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

      if (!checkoutUrl) {
        toast.error("Checkout URL not found");
        return;
      }

      toast.success("Redirecting to payment...");

      window.location.href = checkoutUrl;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Failed to process payment. Please try again.",
      );
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
          <div className="bg-purple-50 rounded-2xl w-full max-w-xl p-14 text-center relative">
            {emailLoading ? (
              <div className="h-70 flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-600 font-medium">
                  Preparing your playlist...
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowEmailPopup(false);
                    navigate("/quiz");
                  }}
                  className="absolute top-5 right-6 text-[#6B6B6B] text-xl"
                >
                  ✕
                </button>

                <div className="flex justify-center mb-5">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-[#4F8CFF] via-[#8A2BE2] to-[#FF4FD8] flex items-center justify-center">
                    <span className="text-white text-4xl">✉️</span>
                  </div>
                </div>

                <h2 className="text-[25px] font-semibold text-center text-[#2B2B2B] mb-2">
                  🎶 Your Wedding Soundtrack Is Ready
                </h2>

                <p className="text-[15px] text-center text-[#6B6B6B] mb-6 px-8 leading-relaxed">
                  Enter your email to unlock your personalised Spotify playlist.
                </p>

                <div className="border border-purple-200 rounded-2xl p-4 mb-5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to reveal your playlist"
                    className="w-full border border-purple-200 rounded-full px-5 py-3 text-sm outline-none"
                  />

                  {/* ✅ FIXED checkbox */}
                  <div className="mt-5">
                    <label className="flex items-start gap-3 text-[14px] leading-relaxed cursor-pointer">
                      {/* Checkbox */}
                      <input
                        ref={checkboxRef}
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          setIsChecked(e.target.checked);
                          if (e.target.checked) setCheckboxError("");
                        }}
                        className={`mt-[2px] w-5 h-5 rounded-md flex-shrink-0 border transition ${
                          checkboxError
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                      />

                      {/* Text + Inline Error */}
                      <div className="text-left">
                        <span
                          className={`${
                            checkboxError ? "text-red-600" : "text-[#6B6B6B]"
                          }`}
                        >
                          I agree to receive my personalised playlist by email
                          and occasional updates from DJ & SAX® about my wedding
                          or event. I can unsubscribe at any time.
                        </span>

                        {/* ✅ SAME LINE STYLE ERROR */}
                        {checkboxError && (
                          <span className="text-red-500 text-xs ml-2">
                            ({checkboxError})
                          </span>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className="border-t border-purple-200 my-4"></div>

                  {/* ✅ FIXED bottom text */}
                  <p className="text-[15px] text-gray-500 text-center leading-relaxed">
                    ⭐{" "}
                    <span className="text-black font-semibold">
                      Over 2,500 weddings performed by DJ & SAX®
                    </span>
                  </p>
                </div>

                <button
                  type="submit"
                  onClick={submitGuestEmail}
                  className="w-full rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#C400FF] text-white py-3 text-[20px] font-medium transition hover:shadow-lg active:scale-95 flex items-center justify-center gap-3"
                >
                  🎧 Unlock My Playlist
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ================= UPGRADE POPUP ================= */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-3 sm:px-4">
          <div
            className="
      bg-white rounded-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl
      px-5 sm:px-8 md:px-12 
      py-6 sm:py-8 md:py-10 
      text-center relative
    "
          >
            {isProcessing ? (
              <div className="py-16 flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-base sm:text-lg font-semibold text-gray-700">
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
                  className="absolute top-4 right-4 sm:top-5 sm:right-6 text-[#7A7A7A] text-2xl"
                >
                  ✕
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div
                    className="
              w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]
              rounded-2xl bg-gradient-to-br from-[#4F8CFF] via-[#8A2BE2] to-[#FF4FD8]
              flex items-center justify-center
            "
                  >
                    <span className="text-white text-[32px] sm:text-[38px]">
                      ✉️
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-[19px] sm:text-[22px] md:text-[25px] font-bold text-[#2B2B2B]">
                  🎵 Your Wedding Soundtrack Is Ready 🎧
                </h2>

                {/* Subtitle */}
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#5F5F5F] mt-2 leading-relaxed px-2 sm:px-6">
                  We’ve created a playlist based on your vibe, your guests, and
                  the atmosphere you want for your{" "}
                  <span className="font-semibold text-black">wedding</span>.
                </p>

                {/* Card */}
                <div className="mt-5 rounded-2xl overflow-hidden text-left shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-[#F3E8FF]">
                  {/* Top */}
                  <div className="relative px-5 sm:px-6 py-5 bg-gradient-to-br from-[#FFF9F2] via-[#FCF5FF] to-white">
                    <p className="text-[15px] sm:text-[17px] font-bold text-[#2B2B2B] mb-3">
                      ✨ Unlock Your Full 50-Song Wedding Soundtrack
                    </p>

                    <p className="text-[13px] sm:text-[14px] text-[#4A4A4A] mb-2">
                      Get the full soundtrack for your night with:
                    </p>

                    <ul className="text-[13px] sm:text-[14px] text-[#4A4A4A] space-y-1.5 pl-5 list-disc marker:text-[#888]">
                      <li>More personalised song recommendations</li>
                      <li>Better dancefloor flow</li>
                      <li>Extra crowd-pleasers from start to finish</li>
                    </ul>

                    <p className="text-[13px] sm:text-[14px] text-[#4A4A4A] mt-3">
                      🎁 Includes our{" "}
                      <span className="font-bold text-black">
                        Wedding Entertainment Guide
                      </span>
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="bg-white px-5 sm:px-6 py-4">
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[28px] sm:text-[32px] font-bold text-[#1F1F1F] leading-none">
                        €9
                      </span>
                      <span className="text-[15px] sm:text-[18px] font-bold text-[#4A4A4A]">
                        Launch Price
                      </span>
                    </div>

                    {/* Compare */}
                    <div className="flex flex-row items-center gap-2 sm:gap-4 text-[12px] sm:text-[13px]">
                      <div className="flex-1">
                        <p className="font-semibold text-[#4A4A4A] flex items-center gap-1.5 mb-1">
                          <span className="text-[#34C759]">✔</span> Free
                          playlist
                        </p>
                        <p className="text-[#333] font-semibold pl-[22px]">
                          15 songs
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-10 w-[1px] bg-[#E5E5E5]" />

                      <div className="flex-[1.8] pl-2">
                        <p className="font-semibold text-[#4A4A4A] flex items-center gap-1.5 mb-1">
                          <span>✨</span> Upgrade to full version
                        </p>
                        <p className="text-[#6B6B6B] pl-[22px] leading-tight">
                          <span className="text-black font-semibold">
                            50 songs
                          </span>{" "}
                          + Wedding Entertainment Guide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={handleUpgradeNo}
                    className="w-full sm:w-[45%] py-3.5 rounded-full bg-[#f2f4fb] text-[#4F5BFF] font-semibold text-[14px] sm:text-[15px] transition hover:bg-[#e8ebf8]"
                  >
                    Start With My Free Playlist
                  </button>

                  <button
                    onClick={handleUpgradeYes}
                    disabled={paymentLoading}
                    className="w-full sm:w-[55%] py-3.5 rounded-full bg-gradient-to-r from-[#4C5CF0] to-[#A339F4] text-white text-[14px] sm:text-[15px] font-semibold flex items-center justify-center transition hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {paymentLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Unlock My 50-Song Soundtrack (€9)"
                    )}
                  </button>
                </div>

                {/* Footer */}
                <p className="text-[14px] sm:text-[14px] text-center text-[#555] mt-4 font-medium">
                  Most couples upgrade to the full playlist
                </p>

                <p className="text-[12px] sm:text-[13px] text-center text-[#888] mt-1.5 flex items-center justify-center gap-1">
                  <span className="text-[14px] mb-[2px]">🔒</span> Secure checkout • Powered by Stripe
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
