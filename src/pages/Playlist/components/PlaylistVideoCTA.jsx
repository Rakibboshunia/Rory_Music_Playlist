import React from "react";

export default function PlaylistVideoCTA() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Want This Energy at Your Wedding?
        </h2>

        {/* Video */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-[500px] rounded-2xl"
            src="https://www.youtube.com/embed/YZq_9oWRWNA"
            title="Wedding Dancefloor Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.djandsax.ie/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-purple-600 to-pink-500
              text-white font-semibold
              shadow-xl hover:shadow-2xl
              transition duration-300
              hover:scale-105 active:scale-95
            "
          >
            Check DJ & SAX Availability
          </a>
        </div>

      </div>
    </section>
  );
}