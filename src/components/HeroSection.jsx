import React from "react";
import { useNavigate } from "react-router-dom";
import MusicLogo from "../assets/img/playlist.png";
import HeroCurve from "../assets/img/Container.png";
import { FaMusic } from "react-icons/fa";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleHowItWorks = () => {
    const el = document.getElementById("features-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden pt-28 sm:pt-32 pb-32 sm:pb-44"
      style={{
        background:
          "linear-gradient(180deg,#1E40AF 0%,#3B82F6 40%,#F59E0B 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            What's your night's soundtrack?
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg opacity-90">
            Take our 60-second vibe quiz and instantly get your personalised
            event playlist.
          </p>

          {/* ✅ FIXED BUTTONS */}
          <div className="mt-6 flex gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => navigate("/quiz")}
              className="
                px-5 py-2
                sm:px-8 sm:py-3
                bg-white text-blue-700
                rounded-full
                text-sm sm:text-base
                font-medium
                shadow-lg
                transition-all duration-300 ease-out
                hover:scale-[1.03] 
                hover:shadow-xl active:scale-[0.98]
                hover:bg-linear-to-r from-[#9810FA] to-[#155DFC] 
                hover:text-white
                border hover:border-white/80
                cursor-pointer
              "
            >
              Start My Quiz →
            </button>

            <button
              onClick={handleHowItWorks}
              className="
                px-5 py-2
                sm:px-8 sm:py-3
                border border-white/80
                rounded-full
                shadow-lg
                text-sm sm:text-base
                font-medium
                transition-all duration-300 ease-out
                hover:scale-[1.03] 
                hover:shadow-xl active:scale-[0.98]
                hover:bg-linear-to-r from-[#9810FA] to-[#155DFC]
                cursor-pointer
              "
            >
              See How It Works
            </button>
          </div>

          {/* SOCIAL PROOF */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-[#FFDF20] to-[#FF8904] border-2 border-white"></div>
              <div className="-ml-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-[#FDA5D5] to-[#C27AFF] border-2 border-white"></div>
              <div className="-ml-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-[#7BF1A8] to-[#51A2FF] border-2 border-white"></div>
            </div>
            <span className="text-white/80 text-sm sm:text-base">
              2,500+ playlists created
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-[320px] sm:w-90 rotate-5 hover:rotate-0 transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-linear-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <FaMusic className="text-white text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Your Vibe</p>
                <p className="font-medium">Elegant & Timeless</p>
              </div>
            </div>

            <div className="mt-4 aspect-square rounded-2xl bg-linear-to-br from-[#C27AFF] to-[#F59E0B] to-'[#FFB86A]' flex items-center justify-center">
              <FaMusic className="text-white text-8xl" />
            </div>

            <h3 className="mt-4 font-semibold">
              Classic Romance Collection
            </h3>
            <p className="text-xs text-gray-400">30 tracks curated</p>

            <div className="mt-5 space-y-3">
              {["At Last", "Can't Help Falling in Love", "Wonderful Tonight"].map(
                (t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={MusicLogo}
                      className="w-12 h-10 rounded-lg"
                      alt=""
                    />
                    <p className="text-sm font-medium truncate">{t}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <img
        src={HeroCurve}
        alt="curve"
        className="absolute bottom-0 left-0 w-full h-35 sm:h-55 pointer-events-none select-none"
      />
    </section>
  );
}
