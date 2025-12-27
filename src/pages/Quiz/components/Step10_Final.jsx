import { useState, useEffect } from "react";
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

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeAction, setActiveAction] = useState(null); 
  // "back" | "premium" | null

  /* ======================
     BODY SCROLL LOCK
  ====================== */
  useEffect(() => {
    if (activeAction) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeAction]);

  /* ======================
     FINAL SUBMIT
  ====================== */
  const handleComplete = () => {
    if (!isAuthenticated) {
      setShowEmailPopup(true);
    } else {
      setShowUpgradePopup(true);
    }
  };

  /* ======================
     GUEST EMAIL
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
     BACK (FREE)
  ====================== */
  const handleUpgradeNo = async () => {
    setActiveAction("back");

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
      setActiveAction(null);
    }
  };

  /* ======================
     GET PREMIUM
  ====================== */
  const handleUpgradeYes = async () => {
    setActiveAction("premium");

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
      setActiveAction(null);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 space-y-6 text-center">

      <h2 className="text-2xl font-semibold">Your vibe is ready ✨</h2>

      <p className="text-gray-500">
        Based on your answers, your night feels like:
      </p>

      {/* DO NOT PLAYS */}
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
          placeholder="e.g. Drake, heavy metal..."
          className="w-full border rounded-xl px-4 py-3 text-sm"
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white"
        >
          ← Back
        </button>

        <button
          onClick={handleComplete}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white"
        >
          Submit →
        </button>
      </div>

      {/* =======================
          UPGRADE POPUP
      ======================= */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4 pointer-events-auto">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 text-center relative shadow-xl">

            {/* LOADING STATE */}
            {activeAction ? (
              <div className="py-20 flex flex-col items-center gap-4">
                <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-lg font-semibold text-gray-700">
                  Generating playlist...
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowUpgradePopup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                <h3 className="text-xl font-semibold mb-4">
                  Upgrade your Playlist <br /> with Payment
                </h3>

                <div className="bg-[#F6F8FF] rounded-xl p-4 flex items-center justify-between mb-6">
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Pro Plan</p>
                    <p className="text-2xl font-bold">$9.00</p>
                    <p className="text-sm text-blue-600">
                      For your next 50 Play list
                    </p>
                  </div>

                  <img src={upgradeImg} className="w-14" />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleUpgradeNo}
                    className="w-1/2 py-3 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50"
                  >
                    Back
                  </button>

                  <button
                    onClick={handleUpgradeYes}
                    className="w-1/2 py-3 rounded-full text-white bg-gradient-to-r from-[#155DFC] to-[#9810FA]"
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
