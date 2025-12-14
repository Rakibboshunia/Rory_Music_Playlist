import React from "react";
import MusicLogo from "../../../assets/img/music-logo.png"

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-40"
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
        <div className="text-white max-w-xl">
          <h1 className="text-5xl leading-tight font-extrabold">
            What's your night's soundtrack?
          </h1>

          <p className="mt-5 text-lg opacity-90">
            Take our 60-second vibe quiz and instantly get your personalised event playlist — crafted by Ireland's Entertainment Agency of the Year 2025.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full shadow-lg hover:shadow-xl transition">
              Start My Quiz →
            </button>

            <button className="px-8 py-3 border border-white/60 text-white rounded-full backdrop-blur-sm hover:bg-white/10 transition">
              See How It Works
            </button>
          </div>

          {/* Mood Icons */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
              <div className="w-8 h-8 rounded-full bg-pink-400"></div>
              <div className="w-8 h-8 rounded-full bg-blue-300"></div>
            </div>

            <span className="text-white/80 text-sm">2,500+ playlists created</span>
          </div>
        </div>

        {/* RIGHT SECTION — Tilted Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-112 h-193 rotate-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">🎵</div>
              
              <div>
                <p className="text-xs text-gray-400">Your Vibe</p>
                <p className="font-medium">Elegant & Timeless</p>
              </div>
            </div>

            {/* Big Cover */}
            <div className="mt-4 w-full aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center">
              <span className="text-white text-6xl">🎵</span>
            </div>

            <h3 className="mt-4 font-semibold">Classic Romance Collection</h3>
            <p className="text-xs text-gray-400">30 tracks curated for your perfect evening</p>

            {/* Track list */}
            <div className="mt-5 space-y-4">
              {/* Track item */}
              <div className="flex items-center gap-4">
                <img
                  src={MusicLogo}
                  alt="track"
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">
                    At Last
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Etta James
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={MusicLogo}
                  alt="track"
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">
                    Can't Help Falling in Love
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Elvis Presley
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={MusicLogo}
                  alt="track"
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">
                    Wonderful Tonight
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Eric Clapton
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM CURVE (ADDED HERE) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 135 1440 170"
          preserveAspectRatio="none"
          className="
            w-full
            h-[180px]
            sm:h-[200px]
            md:h-[260px]
            lg:h-[275px]
          "
        >
          <path
            fill="#ffffff"
            d="
              M0,175
              C200,180 250,198 395,200
              C600,198 1080,160 1580,225
              L1440,240
              L0,800000
              Z
            "
          />
        </svg>
      </div>





    </section>
  );
}
