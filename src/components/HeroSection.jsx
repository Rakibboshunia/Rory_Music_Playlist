import React from "react";
import { useNavigate } from "react-router-dom";
import MusicLogo from "../assets/img/music-logo.png";
import HeroCurve from "../assets/img/Container.png";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleHowItWorks = () => {
    const el = document.getElementById("features-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden pt-32 pb-[180px]"
      style={{
        background:
          "linear-gradient(180deg,#316BFF 0%,#5C8CFF 40%,#C99C52 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            What's your night's soundtrack?
          </h1>

          <p className="mt-5 text-lg opacity-90">
            Take our 60-second vibe quiz and instantly get your personalised
            event playlist.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => navigate("/quiz")}
              className="px-8 py-3 bg-white text-blue-700 rounded-full shadow-lg"
            >
              Start My Quiz →
            </button>

            <button
              onClick={handleHowItWorks}
              className="px-8 py-3 border border-white/60 rounded-full"
            >
              See How It Works
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="-ml-2 w-10 h-10 rounded-full bg-[#C27AFF] border-2 border-white"></div>
              <div className="-ml-2 w-10 h-10 rounded-full bg-[#51A2FF] border-2 border-white"></div>
            </div>
            <span className="text-white/80">2,500+ playlists created</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[360px] rotate-5 hover:rotate-0 transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                🎵
              </div>
              <div>
                <p className="text-xs text-gray-400">Your Vibe</p>
                <p className="font-medium">Elegant & Timeless</p>
              </div>
            </div>

            <div className="mt-4 aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center">
              <span className="text-white text-6xl">🎵</span>
            </div>

            <h3 className="mt-4 font-semibold">Classic Romance Collection</h3>
            <p className="text-xs text-gray-400">30 tracks curated</p>

            <div className="mt-5 space-y-4">
              {["At Last", "Can't Help Falling in Love", "Wonderful Tonight"].map(
                (t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={MusicLogo} className="w-11 h-11 rounded-lg" />
                    <p className="text-sm font-medium">{t}</p>
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
        className="absolute bottom-0 left-0 w-full h-[220px]"
      />
    </section>
  );
}
