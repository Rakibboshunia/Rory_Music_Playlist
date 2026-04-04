import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCurve from "../assets/img/Container.png";
import IphoneLogo from "../assets/img/Iphone.png";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleHowItWorks = () => {
    const el = document.getElementById("quiz-section"); // ✅ fixed id
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden pt-28 sm:pt-32 pb-28 sm:pb-36"
      style={{
        background:
          "linear-gradient(180deg,#1E40AF 0%,#3B82F6 50%,#9333EA 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-white max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build Your Perfect Wedding Playlist in 60 Seconds
          </h1>

          {/* SUB */}
          <p className="text-base sm:text-lg text-white/90">
            Answer a few quick questions and get a personalised Spotify playlist tailored to your vibe, your guests, and the atmosphere you want to create.
          </p>

          {/* SUPPORT */}
          <p className="text-sm text-white/80">
            Free 15-song playlist • Upgrade to a full 50-song soundtrack
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">

            {/* PRIMARY (🔥 focus) */}
            <button
              onClick={() => navigate("/quiz")}
              className="
                group px-8 py-4 rounded-full
                bg-white text-purple-700 font-semibold
                shadow-2xl hover:shadow-3xl
                transition duration-300
                hover:scale-105 active:scale-95
                flex items-center justify-center gap-2
              "
            >
              Create My Playlist
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            {/* SECONDARY */}
            <button
              onClick={handleHowItWorks}
              className="
                px-6 py-4 rounded-full
                border border-white/60 text-white
                hover:bg-white/10 transition
              "
            >
              See How It Works
            </button>
          </div>

          {/* TRUST LINE */}
          <p className="text-sm text-white/80 pt-2 max-w-md mx-auto lg:mx-0">
            Created by the team behind DJ & SAX®, Ireland’s multi-award-winning wedding entertainment brand.
          </p>

          {/* SOCIAL PROOF */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
            <div className="flex">
              <div className="w-9 h-9 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="-ml-2 w-9 h-9 rounded-full bg-pink-400 border-2 border-white"></div>
              <div className="-ml-2 w-9 h-9 rounded-full bg-blue-400 border-2 border-white"></div>
            </div>
            <span className="text-white/80 text-sm">
              2,500+ playlists created
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={IphoneLogo}
            alt="Preview"
            className="w-80 sm:w-96 md:w-[28rem] lg:w-[30rem] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* CURVE */}
      <img
        src={HeroCurve}
        alt="curve"
        className="absolute bottom-0 left-0 w-full h-32 sm:h-48 pointer-events-none select-none"
      />
    </section>
  );
}