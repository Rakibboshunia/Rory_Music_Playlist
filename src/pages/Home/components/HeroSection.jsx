import React from "react";

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
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-[380px] rotate-3">
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
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/45" className="rounded-lg" />
                <div>
                  <p className="font-medium text-sm">At Last</p>
                  <p className="text-xs text-gray-500">Etta James</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/45" className="rounded-lg" />
                <div>
                  <p className="font-medium text-sm">Can't Help Falling in Love</p>
                  <p className="text-xs text-gray-500">Elvis Presley</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/45" className="rounded-lg" />
                <div>
                  <p className="font-medium text-sm">Wonderful Tonight</p>
                  <p className="text-xs text-gray-500">Eric Clapton</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM CURVE (ADDED HERE) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[180px]"
        >
          <path
            fill="#ffffff"
            d="M0,256L48,250.7C96,245,192,235,288,224C384,213,480,203,576,202.7C672,203,768,213,864,218.7C960,224,1056,224,1152,224C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

    </section>
  );
}
