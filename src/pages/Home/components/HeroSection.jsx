import React from "react";
import { useNavigate } from "react-router-dom";
import MusicLogo from "../../../assets/img/music-logo.png";
import HeroCurve from "../../../assets/img/Container.png";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleHowItWorks = () => {
    const el = document.getElementById("features-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="
        relative overflow-hidden
        pt-28 sm:pt-32
        pb-[140px] sm:pb-[180px] md:pb-[220px] lg:pb-[260px]
      "
      style={{
        background:
          "linear-gradient(180deg,#316BFF 0%,#5C8CFF 40%,#C99C52 100%)",
      }}
    >
      {/* Decorative blurred squares */}
      <div className="absolute top-36 right-56 w-20 h-20 rounded-xl border border-white/30 backdrop-blur-md opacity-40"></div>
      <div className="absolute bottom-20 right-28 w-24 h-24 rounded-xl border border-white/30 backdrop-blur-md opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SECTION */}
        <div className="text-white max-w-xl lg:max-w-2xl">
          <h1 className="text-5xl leading-tight font-extrabold">
            What's your night's soundtrack?
          </h1>

          <p className="mt-5 text-lg opacity-90">
            Take our 60-second vibe quiz and instantly get your personalised event playlist — crafted by Ireland's Entertainment Agency of the Year 2025.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => navigate("/quiz")}
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full shadow-lg hover:shadow-xl transition"
            >
              Start My Quiz →
            </button>

            <button
              onClick={handleHowItWorks}
              className="px-8 py-3 border border-white/60 text-white rounded-full backdrop-blur-sm hover:bg-white/10 transition"
            >
              See How It Works
            </button>
          </div>

          {/* Mood Icons */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white z-10"></div>
              <div className="-ml-2 w-10 h-10 rounded-full bg-pink-400 border-2 border-white z-20"></div>
              <div className="-ml-2 w-10 h-10 rounded-full bg-blue-300 border-2 border-white z-30"></div>
            </div>

            <span className="text-white/80 text-md">
              2,500+ playlists created
            </span>
          </div>
        </div>

        {/* RIGHT SECTION — CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 h-auto w-[320px] md:w-[380px] lg:w-[400px] rotate-5 hover:rotate-0 transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                🎵
              </div>

              <div>
                <p className="text-xs text-gray-400">Your Vibe</p>
                <p className="font-medium">Elegant & Timeless</p>
              </div>
            </div>

            {/* Big Cover */}
            <div className="mt-4 w-full aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center">
              <span className="text-white text-6xl">🎵</span>
            </div>

            <h3 className="mt-4 font-semibold">
              Classic Romance Collection
            </h3>
            <p className="text-xs text-gray-400">
              30 tracks curated for your perfect evening
            </p>

            {/* Track list */}
            <div className="mt-5 space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={MusicLogo}
                    className="w-11 h-11 rounded-lg shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">
                      Sample Track
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      Artist Name
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <img
        src={HeroCurve}
        alt="curve"
        className="
          absolute bottom-0 left-0 w-full z-10
          pointer-events-none select-none
          h-[110px] sm:h-[150px] md:h-[200px]
          lg:h-[250px] xl:h-[300px]
        "
      />
    </section>
  );
}
