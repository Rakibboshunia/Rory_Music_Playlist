import { useNavigate } from "react-router-dom";
import { XOctagon, RotateCcw } from "lucide-react";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#F3F6FF] via-[#EEF1FF] to-[#FAFBFF] px-4">

      {/* FLOATING PARTICLES (same vibe as confetti) */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-50 animate-confetti"
          style={{
            backgroundColor: ["#EF4444", "#9810FA", "#155DFC"][i % 3],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}

      {/* CARD */}
      <div className="
        relative
        bg-white/80
        backdrop-blur-xl
        rounded-[40px]
        p-16
        max-w-2xl
        w-full
        text-center
        shadow-[0_50px_120px_-30px_rgba(0,0,0,0.35)]
        animate-fade-in
      ">

        {/* ROTATING GRADIENT BORDER (cancel tone) */}
        <div className="absolute inset-0 rounded-[40px] p-[2px] bg-linear-to-r from-red-500 via-[#9810FA] to-red-600 animate-spin-slow -z-10">
          <div className="w-full h-full rounded-[38px] bg-white/90 backdrop-blur-xl" />
        </div>

        {/* ICON */}
        <div className="flex justify-center mb-8">
          <div className="
            relative
            w-24 h-24
            rounded-full
            bg-linear-to-br from-red-500 to-red-600
            flex items-center justify-center
            shadow-2xl
          ">
            <XOctagon className="w-12 h-12 text-white z-10" />
            <span className="absolute inset-0 rounded-full ring-4 ring-red-300 animate-ping" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Payment Cancelled
        </h2>

        <p className="text-gray-500 mt-3 text-base">
          Your payment was stopped before completion.
          <br />
          No charges were made.
        </p>

        {/* DIVIDER */}
        <div className="flex justify-center my-8">
          <div className="h-[4px] w-28 rounded-full bg-linear-to-r from-red-400 to-red-600" />
        </div>

        {/* Guidance */}
        <p className="text-sm text-gray-600 leading-relaxed">
          You can return to the quiz and try again when you’re ready.
          Your preferences are still saved.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/quiz")}
          className="
            mt-12 w-full py-5 rounded-2xl
            bg-linear-to-r from-[#9810FA] to-[#155DFC]
            text-white
            text-xl cursor-pointer font-bold
            transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-[0_20px_60px_rgba(21,93,252,0.5)]
            active:scale-[0.95]
            flex items-center justify-center gap-3
          "
        >
          <RotateCcw className="w-6 h-6" />
          Return to Quiz
        </button>

        {/* FOOTER */}
        <p className="text-xs text-gray-400 mt-7">
          Tip: You can retry payment anytime — it only takes a moment
        </p>
      </div>

      {/* SAME ANIMATIONS AS SUCCESS */}
      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(120vh) rotate(360deg); }
        }
        .animate-confetti {
          animation: confetti 3.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
