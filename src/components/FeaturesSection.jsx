import React from "react";
import { Sparkles, ListMusic, Mic } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-17 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-18">
          <h2 className="text-5xl pb-2 font-smibold">
            Your night. Your energy.
            <br /> Your soundtrack.
          </h2>
          <p className="mt-3 text-gray-600">
            From vision to reality in three simple steps
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-13 ">
          {/* CARD 1 */}
          <FeatureCard
            number="1"
            title="Discover Your Vibe"
            desc="Answer fun questions about your style, energy, and music taste in just 60 seconds."
            icon={<Sparkles size={22} />}
            bg="from-pink-500 to-purple-500"
          />

          {/* CARD 2 */}
          <FeatureCard
            number="2"
            title="Get Your Playlist"
            desc="Receive an AI-curated soundtrack that perfectly matches your unique vibe and vision."
            icon={<ListMusic size={22} />}
            bg="from-blue-500 to-cyan-500"
          />

          {/* CARD 3 */}
          <FeatureCard
            number="3"
            title="Bring It to Life"
            desc="Book DJ & SAX® to transform your playlist into an unforgettable live performance."
            icon={<Mic size={22} />}
            bg="from-orange-500 to-yellow-500"
          />
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              const el = document.getElementById("cta-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition"
          >
            Find My Soundtrack →
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FEATURE CARD
========================= */
function FeatureCard({ number, title, desc, icon, bg }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 pt-14 hover:shadow-xl transition">
      {/* NUMBER BADGE */}
      <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-indigo-600 text-white text-sm font-semibold flex items-center justify-center shadow">
        {number}
      </div>

      {/* ICON BADGE (MARKED PART) */}
      <div
        className={`absolute top-6 left-6 w-10 h-10 rounded-xl bg-gradient-to-br ${bg} text-white flex items-center justify-center shadow-md`}
      >
        {icon}
      </div>

      {/* CONTENT */}
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
