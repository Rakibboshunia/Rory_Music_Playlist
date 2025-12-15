import React from "react";
import MusicLogo from "../../../assets/img/music-logo.png"
import HeroCurve from "../../../assets/img/Container.png";


export default function HeroSection() {
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
            <button className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full shadow-lg hover:shadow-xl transition">
              Start My Quiz →
            </button>

            <button className="px-8 py-3 border border-white/60 text-white rounded-full backdrop-blur-sm hover:bg-white/10 transition">
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

            <span className="text-white/80 text-md">2,500+ playlists created</span>
          </div>
        </div>

        {/* RIGHT SECTION — Tilted Card */}
        <div className="flex justify-center lg:justify-end">
         <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 h-auto w-[320px] md:w-[380px] lg:w-[400px] rotate-5 md:rotate-5 lg:rotate-5">
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
              <div className="flex items-center gap-3">
                <img
                  src={MusicLogo}
                  className="w-[44px] h-[44px] rounded-lg shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">At Last</p>
                  <p className="text-xs text-gray-500 truncate">Etta James</p>
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
      <img
        src={HeroCurve}
        alt="curve"
        className="
          absolute
          bottom-0
          left-0
          w-full
          z-10
          pointer-events-none
          select-none
          mt-40
          h-[110px]
          sm:h-[150px]
          md:h-[200px]
          lg:h-[250px]
          xl:h-[300px]
        "
      />


    </section>
  );
}
