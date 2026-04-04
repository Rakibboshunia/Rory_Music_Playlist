import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-white to-gray-50">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Real Stories. Real Moments.{" "} <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Real Magic 🎉
          </span>
        </h2>

        <p className="pt-4 text-gray-600 text-base">
          🎶 Personalised playlists that shaped unforgettable celebrations.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <TestimonialCard
          text="Couldn’t recommend more! The dance floor at our wedding was never empty!!"
          name="Sarah McCarthy"
          role="Powerscourt Estate"
        />

        <TestimonialCard
          text="Absolutely top class, so much fun for our wedding entertainment."
          name="Denise Callanan"
          role="Cloughjordan House"
        />

        <TestimonialCard
          text="We honestly couldn’t have asked for a better atmosphere at our wedding!"
          name="Ciara Lynch"
          role="The Mayson Hotel"
        />
      </div>
    </section>
  );
}

function TestimonialCard({ text, name, role }) {
  return (
    <div
      className="
        group relative cursor-pointer p-8 rounded-3xl
        p-8 rounded-3xl
        bg-white/70 backdrop-blur-md
        border border-gray-100
        shadow-md hover:shadow-2xl
        transition duration-300 hover:-translate-y-2
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition" />

      {/* Stars */}
      <div className="flex text-yellow-400 mb-4 text-lg">
        {Array(5).fill("★").map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 leading-relaxed text-sm mb-6 relative z-10">
        {text}
      </p>

      {/* User */}
      <div className="flex items-center gap-4 mt-6 relative z-10">

        <div>
          <p className="font-semibold text-gray-800 text-sm">
            {name}
          </p>
          <p className="text-gray-500 text-xs">
            {role}
          </p>
        </div>

      </div>
    </div>
  );
}