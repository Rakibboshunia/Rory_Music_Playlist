import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCurve from "../assets/img/Container.png";
import IphoneLogo from "../assets/img/Iphone.png";
import SpotifyLogo from "../assets/img/SpotifyLogo.png"
import { FiArrowRight } from "react-icons/fi";

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
          <div className="pb-10 space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
              Get your personalised Spotify playlist in 60 seconds
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg opacity-90">
              Answer a few quick questions and we’ll generate a custom Spotify playlist based on your vibe — ready to listen to instantly.
            </p>
          </div>

          {/* ✅ FIXED BUTTONS */}
          <div className="mt-2 flex gap-5 sm:gap-5 flex-wrap">
            <button
              onClick={() => navigate("/quiz")}
              className="
                px-4 py-2
                sm:px-4 sm:py-2
                bg-white text-blue-700
                rounded-full
                text-sm sm:text-base
                font-medium shadow-lg
                transition-all duration-300 ease-out
                hover:scale-[1.02] 
                hover:shadow-xl active:scale-[0.98]
                hover:bg-linear-to-r from-[#9810FA] to-[#155DFC] 
                hover:text-white
                border hover:border-white/80
                cursor-pointer
                inline-flex items-center
              "
            >
              <img
                src={SpotifyLogo}
                alt="Spotify"
                className="h-[2.0em] w-auto"
              />
              Generate my Spotify playlist
              <FiArrowRight size={20} />
            </button>

            <button
              onClick={handleHowItWorks}
              className="
                px-4 py-2
                sm:px-4 sm:py-3
                border border-white/80
                rounded-full
                shadow-lg
                text-sm sm:text-base
                font-medium
                transition-all duration-300 ease-out
                hover:scale-[1.02] 
                hover:shadow-xl active:scale-[0.98]
                hover:bg-linear-to-r from-[#9810FA] to-[#155DFC]
                cursor-pointer
                inline-flex items-center"
            >
              <img
                src={SpotifyLogo}
                alt="Spotify"
                className="h-[2.0em] w-auto"
              />
              See How It Works
              <FiArrowRight size={20} />
            </button>
          </div>

          {/* SOCIAL PROOF */}
          <div className="pb-15 mt-8 flex items-center gap-3">
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
        <div className="flex justify-center lg:justify-end cursor-pointer">
          <img
            src={IphoneLogo}
            alt="HeroLogo"
            className="
              w-85
              sm:w-100
              md:w-110
              lg:w-115
              xl:w-120
              h-auto
              object-contain"
          />
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

