import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="pt-6 sm:pt-10 pb-16 sm:pb-32 bg-white">
      
      {/* ======================
          SECTION HEADER
      ====================== */}
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-5">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
          Real Stories.<br /> Real Moments.
          Real Magic.
        </h2>

        <p className="pt-4 text-gray-600 text-sm sm:text-base">
          Personalised playlists that shaped unforgettable celebrations.
        </p>
      </div>

      {/* ======================
          TESTIMONIAL CARDS
      ====================== */}
      <div
        className="
          max-w-6xl mx-auto mt-12 sm:mt-16
          px-4 sm:px-6 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 sm:gap-8
        "
      >
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

/* ======================
   SINGLE TESTIMONIAL CARD
====================== */
function TestimonialCard({ text, name, role }) {
  return (
    <div
      className="
        bg-white border border-gray-100
        rounded-2xl
        p-6 sm:p-8
        shadow-sm hover:shadow-lg
        transition duration-300
      "
    >
      {/* Stars */}
      <div className="flex text-yellow-400 mb-3 text-lg ">
        ★★★★★
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
        {text}
      </p>

      {/* User Info (NO IMAGE, NO ICON, NO PLACEHOLDER) */}
      <div className="flex flex-col">
        <p className="font-semibold text-gray-800 text-sm">
          {name}
        </p>
        <p className="text-gray-500 text-xs">
          {role}
        </p>
      </div>
    </div>
  );
}
