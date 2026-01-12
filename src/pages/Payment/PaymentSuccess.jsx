import { useNavigate } from "react-router-dom";
import { CheckCircle, Music } from "lucide-react";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#F3F6FF] via-[#EEF1FF] to-[#FAFBFF] px-4">

      {/* CONFETTI */}
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-60 animate-confetti"
          style={{
            backgroundColor: ["#9810FA", "#155DFC", "#22C55E", "#F59E0B"][i % 4],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.15}s`,
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

        {/* ROTATING GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-[40px] p-[2px] bg-linear-to-r from-[#9810FA] via-[#22C55E] to-[#155DFC] animate-spin-slow -z-10">
          <div className="w-full h-full rounded-[38px] bg-white/90 backdrop-blur-xl" />
        </div>

        {/* ICON */}
        <div className="flex justify-center mb-8">
          <div className="
            relative
            w-24 h-24
            rounded-full
            bg-linear-to-br from-green-400 to-green-600
            flex items-center justify-center
            shadow-2xl
          ">
            <CheckCircle className="w-12 h-12 text-white z-10" />
            <span className="absolute inset-0 rounded-full ring-4 ring-green-300 animate-ping" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Payment Successful 🎉
        </h2>

        <p className="text-xl text-gray-500 mt-3">
          Payment successful — your soundtrack journey begins now.
        </p>

        {/* DIVIDER */}
        <div className="flex justify-center my-8">
          <div className="h-[4px] w-28 rounded-full bg-linear-to-r from-[#9810FA] to-[#155DFC]" />
        </div>

        {/* BODY */}
        <p className="text-lg text-gray-700">
          Your personalised playlist has been unlocked and is ready to play.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/playlist")}
          className="
            mt-12
            w-full
            py-5
            rounded-2xl
            bg-linear-to-r from-[#9810FA] to-[#155DFC]
            text-white
            text-xl cursor-pointer
            font-bold
            transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-[0_20px_60px_rgba(21,93,252,0.5)]
            active:scale-[0.95]
            flex items-center justify-center gap-3
          "
        >
          <Music className="w-6 h-6" />
          Go to your generated playlist
        </button>

        {/* FOOTER */}
        <p className="text-xs text-gray-400 mt-7">
          Tip: Best enjoyed with headphones 🎶
        </p>
      </div>

      {/* CUSTOM ANIMATIONS */}
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
