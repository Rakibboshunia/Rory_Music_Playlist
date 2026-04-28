import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCurve from "../assets/img/Container.png";
import IphoneLogo from "../assets/img/Iphone.png";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleHowItWorks = () => {
    const el = document.getElementById("quiz-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-24"
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
            What Will Your Wedding Dancefloor Sound Like?
          </h1>

          {/* SUB */}
          <p className="text-base sm:text-lg text-white/90">
            Take our 60-second quiz and generate a personalised Spotify playlist
            tailored to your vibe, your guests, and the atmosphere you want to
            create.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            {/* PRIMARY (🔥 focus) */}
            <button
              onClick={() => navigate("/quiz")}
              className="
                group px-8 py-4 rounded-2xl
                bg-white text-purple-700 font-bold
                shadow-2xl hover:shadow-3xl
                transition duration-300 cursor-pointer
                hover:scale-105 active:scale-95
                flex items-center justify-center gap-2
              "
            >
              Create My Playlist
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* ✅ REASSURANCE */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 text-white/90 text-sm">
            <span>✔ Takes about 60 seconds</span>
            <span>✔ Instant Spotify playlist</span>
            <span>✔ Free to try</span>
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
