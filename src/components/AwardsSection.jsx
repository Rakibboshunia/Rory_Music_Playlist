import React from "react";
import rsvp from "../assets/img/2023.png";
import wedding from "../assets/img/2024.png";
import wedding25 from "../assets/img/2025.png";

export default function AwardsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden cursor-pointer">

      {/* Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Created by DJ & SAX<sup>®</sup> — <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Ireland’s Most Awarded <br />Wedding Entertainment Agency
            </span>
          </h2>
        </div>

        {/* AWARDS */}
        <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AwardCard img={wedding} title="2024 Winner" />
          <AwardCard img={rsvp} title="2023 Winner" />
          <AwardCard img={wedding25} title="2025 Winner" />
        </div>

        {/* Credibility Stats */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
          <span>⭐ 280+ Five-Star Google Reviews</span>
          <span>🎧 2,500+ Weddings Performed</span>
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
        group relative p-6 rounded-3xl
        bg-white/70 backdrop-blur-md
        border border-purple-200
        shadow-md hover:shadow-2xl
        transition duration-300 hover:-translate-y-2
        flex flex-col items-center justify-center
        text-center
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition" />

      {/* Image Wrapper (FIXED CENTER) */}
      <div className="w-full h-40 flex items-center justify-center relative z-10">
        <img
          src={img}
          alt={title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Title */}
      {/* <p className="mt-4 text-lg font-semibold text-gray-800 relative z-10">
        {title}
      </p> */}
    </div>
  );
}