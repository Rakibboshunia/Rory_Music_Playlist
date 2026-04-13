import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="relative pt-18 pb-28 bg-linear-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Real Weddings. <br />
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Real Dance Floors.
          </span>
        </h2>

        <p className="pt-4 text-gray-600 text-base">
          🎶 Real couples. Real celebrations. Packed dance floors.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        
        <TestimonialCard
          text="The dance floor at our wedding was never empty!!"
          name="Sarah & Matthew"
          role="Powerscourt Estate"
        />

        <TestimonialCard
          text="Absolutely top class, so much fun for our wedding entertainment."
          name="Denise & Tony"
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
        bg-white/70 backdrop-blur-md
        border border-purple-300
        shadow-md hover:shadow-2xl
        transition duration-300 hover:-translate-y-2
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition duration-300" />

      {/* Stars */}
      <div className="flex text-yellow-400 mb-4 text-lg">
        {Array(5)
          .fill("★")
          .map((star, i) => (
            <span key={i}>{star}</span>
          ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 leading-relaxed text-sm mb-6 relative z-10">
        {text}
      </p>

      {/* User */}
      <div className="flex items-center gap-3 mt-6 relative z-10">

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