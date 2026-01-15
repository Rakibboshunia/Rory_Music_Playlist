import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import upgradeImg from "../../../assets/img/DiamondLogo.png";
import SpotifyLogo from "../../../assets/img/SpotifyLogo.png";

import { useQuiz } from "../../../context/QuizContext";
import { useAuth } from "../../../context/AuthContext";

import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Step10_Final() {
  const navigate = useNavigate();
  const { answers } = useQuiz();
  const { isAuthenticated } = useAuth();

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [email, setEmail] = useState("");

  const [emailLoading, setEmailLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const isProcessing = isGenerating || paymentLoading;

  /* ======================
     AUTO POPUP ON QUIZ END
  ====================== */
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      setShowEmailPopup(true);     // Guest → Email popup
    } else {
      setShowUpgradePopup(true);  // Logged user → Payment popup
    }
  }, []);

  /* ======================
     GUEST EMAIL SUBMIT
  ====================== */
  const submitGuestEmail = async (e) => {
    e.preventDefault();

    try {
      setEmailLoading(true);

      await fetch(import.meta.env.VITE_BACKEND_URL + "/quiz/guest/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers }),
      });

      toast.success("Playlist sent!");

      setShowEmailPopup(false);
      setShowUpgradePopup(true); 
      setEmail("");

    } catch {
      toast.error("Something went wrong");
    } finally {
      setEmailLoading(false);
    }
  };

  /* ======================
     Free FLOW
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
     Upgrade FLOW
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
    <div className="bg-white rounded-2xl shadow-xl p-4 space-y-6 text-center">
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
              <div>
                <button
                  onClick={() => {
                    setShowEmailPopup(false);
                    navigate("/quiz");
                  }}
                  className="absolute top-4 right-4 text-gray-400 cursor-pointer"
                >
                  ✕
                </button>

                <div className="flex justify-center mb-4">
                  <div className="w-18 h-16 rounded-xl bg-linear-to-r from-[#155DFC] to-[#9810FA] flex items-center justify-center text-white text-5xl">
                    ✉️
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  🎶 Get your personalised playlist
                </h3>

                <p className="text-md text-gray-500 mb-5">
                  📩 Pop in your email to unlock your soundtrack. <br />We’ll send your personalised playlist straight to your inbox.

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

                  <label className="flex items-start gap-1 text-xs text-gray-500">
                    <input type="checkbox" required className="mt-1" />
                    <span>
                      I agree to receive my personalised playlist by email and
                      to be contacted by DJ & SAX® about my wedding or event. I
                      can unsubscribe at any time.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-full text-white bg-linear-to-r from-[#155DFC] to-[#9810FA] cursor-pointer hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <div className="inline-flex items-center text-xl">
                      <img
                        src={SpotifyLogo}
                        alt="Spotify"
                        className="h-[2.0em] w-auto"
                      />
                      Reveal My Playlist
                    </div>
                  </button>
                  <p className="text-xs text-gray-500">
                    We’ll only contact you about music, your date, or
                    entertainment planning. No spam.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= UPGRADE POPUP ================= */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-xl p-12 text-center relative">
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
                  className="absolute top-6 right-6 text-gray-400 cursor-pointer"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold inline-flex items-center">
                  <img
                    src={SpotifyLogo}
                    alt="Spotify"
                    className="h-[2.0em] w-auto"
                  />
                  Your Spotify playlist is ready💃
                </h2>

                <p className="text-sm text-black/60 ">
                  We’ve created your personalised Spotify playlist based on your
                  vibe. <br />
                  You can listen now — or unlock the full 3-hour version.
                </p>
                <br />

                <h4 className="text-md font-semibold mb-8">
                  ✨Upgrade to the Premium 50 track Playlist for only €9 and receive a Free Wedding Entertainment Guide.
                </h4>

                <div className="bg-[#F6F8FF] rounded-xl p-8 flex items-center justify-between mb-10">
                  <div>
                    <p className="text-md text-left text-gray-500">Pro Plan</p>
                    <p className="text-4xl text-left font-bold">€9.00</p>
                    <p className="text-md text-blue-600">
                      50 Track Playlist
                    </p>
                  </div>

                  <img src={upgradeImg} className="w-26" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      if (!Cookies.get("token")) {
                        navigate("/");
                      } else {
                        handleUpgradeNo();
                      }
                    }}
                    className="w-full sm:w-1/2 py-3.5 gap-1 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg flex items-center justify-center"
                  >
                    <FiArrowLeft size={20} />
                    Send Free Playlist
                  </button>

                  <button
                    onClick={() => {
                      if (!Cookies.get("token")) {
                        navigate("/login");
                      } else {
                        handleUpgradeYes();
                      }
                    }}
                    className="w-full sm:w-1/2 py-3.5 gap-1 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center"
                  >
                    Secure Extended Playlist
                    <FiArrowRight size={20} />
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