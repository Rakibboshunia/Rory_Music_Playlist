import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function ImagineDancefloor() {
  const navigate = useNavigate();

  const points = [
    "Every generation on the dancefloor",
    "Your favourite songs at the perfect moment",
    "Hands-in-the-air singalongs",
    "The energy building all night",
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[350px] h-[350px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Imagine Your{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Wedding Dancefloor
          </span>
          <br />
          <span className="text-gray-800">Like This</span>
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Picture the moments, the energy, and the songs that bring everyone together.
        </p>

        {/* Bullet Cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="
                group p-7 rounded-3xl
                bg-white/70 backdrop-blur-md
                border border-purple-300
                shadow-sm hover:shadow-2xl
                transition duration-300
                hover:-translate-y-2
                flex items-center gap-4 text-left
              "
            >
              {/* Icon */}
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition">
                ✓
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting */}
        <p className="mt-12 text-lg text-gray-600 font-medium">
          The right soundtrack makes all the difference.
        </p>

        {/* CTA */}
        <div className="mt-14">
          <button
            onClick={() => navigate("/quiz")}
            className="
              group px-6 py-4 rounded-2xl
              bg-gradient-to-r from-purple-600 to-pink-500
              text-white font-bold text-lg
              shadow-xl hover:shadow-2xl
              transition duration-300
              hover:scale-105 active:scale-95
              flex items-center gap-3 mx-auto
            "
          >
            Create My Wedding Playlist
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </section>
  );
}