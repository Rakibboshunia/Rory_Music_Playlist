import React from "react";
import rsvp from "../assets/img/2023.png";
import wedding from "../assets/img/2024.png";
import wedding25 from "../assets/img/2025.png";
import { Badge } from "lucide-react";

export default function AwardsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden cursor-pointer">

      {/* Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Award-Winning{" "} <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Entertainment Excellence
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Powered by DJ & SAX® — Ireland’s multi award-winning entertainment team <br />Trusted by thousands of couples and recognised by Ireland’s leading wedding platforms.
          </p>
        </div>

        {/* AWARDS */}
        <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AwardCard title="Badge 1" img={rsvp}/>
          <AwardCard title="Badge 2" img={wedding} />
          <AwardCard title="Badge 3" img={wedding25} />
        </div>

        {/* STATS */}
        <div className="max-w-5xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <Stat emoji="🎵" text="Thousands of bespoke soundtracks created" />
            <Stat emoji="💃" text="Built on real dancefloor data from live events" />
            <Stat emoji="⭐" text="5.0★ average rating from happy couples" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */
function AwardCard({ img, title }) {
  return (
    <div
      className="
        group relative p-8 rounded-3xl
        bg-white/70 backdrop-blur-md
        border border-gray-100
        shadow-md hover:shadow-2xl
        transition duration-300 hover:-translate-y-2
        text-center
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition" />

      <img
        src={img}
        alt={title}
        className="w-32 h-32 object-contain mx-auto mb-6 relative z-10"
      />

      <p className="text-lg font-semibold text-gray-800 relative z-10">
        {title}
      </p>
    </div>
  );
}

/* ================= STAT ================= */
function Stat({ emoji, text }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
      <div className="text-3xl mb-3">{emoji}</div>
      <p className="text-gray-700 font-medium leading-snug">
        {text}
      </p>
    </div>
  );
}