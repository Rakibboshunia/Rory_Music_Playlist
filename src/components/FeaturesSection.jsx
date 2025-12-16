import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* TITLE */}
        <h2 className="text-4xl font-bold leading-tight">
          Your night. Your energy. <br /> Your soundtrack.
        </h2>

        <p className="mt-3 text-gray-500">
          From vision to reality in three simple steps
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div
        className="
          max-w-6xl mx-auto
          mt-10 sm:mt-14
          px-4 sm:px-6 lg:px-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
        "
      >
        <FeatureCard
          number="1"
          iconBg="from-pink-500 to-purple-500"
          icon="🎧"
          title="Discover Your Vibe"
          desc="Answer fun questions about your style, energy, and music taste in just 60 seconds."
        />

        <FeatureCard
          number="2"
          iconBg="from-sky-500 to-blue-500"
          icon="📄"
          title="Get Your Playlist"
          desc="Receive an AI-curated soundtrack that matches your vibe and unique vision."
        />

        <FeatureCard
          number="3"
          iconBg="from-yellow-500 to-orange-500"
          icon="🎤"
          title="Bring It to Life"
          desc="Book DJ & SAX® to transform your playlist into an unforgettable live performance."
        />
      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/quiz")}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-xl transition flex items-center gap-2 cursor-pointer"
        >
          Find My Soundtrack 🎵
        </button>
      </div>
    </section>
  );
}

function FeatureCard({ number, iconBg, icon, title, desc }) {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition">
      <div
        className={`absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r ${iconBg} text-white flex items-center justify-center text-sm font-semibold`}
      >
        {number}
      </div>

      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${iconBg} flex items-center justify-center text-2xl text-white`}
      >
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
