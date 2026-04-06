import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function PlaylistVideoCTA() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Want This Energy at{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Your Wedding?
          </span>
        </h2>

        {/* Subtle line */}
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          See how the right music transforms a night into something unforgettable.
        </p>

        {/* 🎬 Video Card */}
        <div className="mt-12 relative group">

          {/* Glow behind video */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 rounded-3xl group-hover:opacity-30 transition" />

          {/* Video container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur">

            <iframe
              className="w-full h-[520px]"
              src="https://www.youtube.com/embed/YZq_9oWRWNA"
              title="Wedding Dancefloor Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="https://www.djandsax.ie/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center gap-3
              px-5 py-4 rounded-full
              bg-gradient-to-r from-purple-600 to-pink-500
              text-white font-semibold text-lg
              shadow-xl hover:shadow-2xl
              transition duration-300
              hover:scale-105 active:scale-95
            "
          >
            Check DJ & SAX Availability
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </a>

          {/* Trust line */}
          <p className="mt-4 text-xs text-gray-500">
            Trusted by 2,500+ weddings • Award-winning entertainment
          </p>
        </div>

      </div>
    </section>
  );
}