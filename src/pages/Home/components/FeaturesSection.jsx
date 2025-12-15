import React from "react";

export default function FeaturesSection() {
  return (
    <section className="py-25 bg-white">
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
      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <FeatureCard
          number="1"
          iconBg="from-pink-500 to-purple-500"
          icon="🎧"
          title="Discover Your Vibe"
          desc="Answer fun questions about your style, energy, and music taste in just 60 seconds."
        />

        {/* CARD 2 */}
        <FeatureCard
          number="2"
          iconBg="from-sky-500 to-blue-500"
          icon="📄"
          title="Get Your Playlist"
          desc="Receive an AI-curated soundtrack that matches your vibe and unique vision."
        />

        {/* CARD 3 */}
        <FeatureCard
          number="3"
          iconBg="from-yellow-500 to-orange-500"
          icon="🎤"
          title="Bring It to Life"
          desc="Book DJ & SAX® to transform your playlist into an unforgettable live performance."
        />

      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-15">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-xl transition flex items-center gap-2">
          Find My Soundtrack 🎵
        </button>
      </div>
    </section>
  );
}

/* FEATURE CARD COMPONENT */
function FeatureCard({ number, iconBg, icon, title, desc }) {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition">

      {/* NUMBER BADGE */}
      <div
        className={`absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r ${iconBg} text-white flex items-center justify-center text-sm font-semibold`}
      >
        {number}
      </div>

      {/* ICON BLOCK */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${iconBg} flex items-center justify-center text-2xl text-white`}
      >
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-gray-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
