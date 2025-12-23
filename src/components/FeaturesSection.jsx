import React from "react";
import { Sparkles, ListMusic, Mic } from "lucide-react";


export default function FeaturesSection() {
  return (
    // ✅ ONLY ADDITION (ID)
    <section
      id="features-section"
      className="border-t border-gray-200 py-17 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl pb-2 font-semibold bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
            Your Night. Your Energy.
             <br className="hidden sm:block"/>Your Soundtrack.
          </h2>
          <p className="mt-3 text-gray-600">
            From vision to reality in three simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 sm:mt-16
          px-4 sm:px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 sm:gap-8">
          <FeatureCard
            number="1"
            title="Discover Your Vibe"
            desc="Answer fun questions about your style, energy, and music taste in just 60 seconds."
            icon={<Sparkles size={22} />}
            bg="from-pink-500 to-purple-500"
          />

          <FeatureCard
            number="2"
            title="Get Your Playlist"
            desc="Receive an AI-curated soundtrack that perfectly matches your unique vibe and vision."
            icon={<ListMusic size={22} />}
            bg="from-blue-500 to-cyan-500"
          />

          <FeatureCard
            number="3"
            title="Bring It to Life"
            desc="Book DJ & SAX® to transform your playlist into an unforgettable live performance."
            icon={<Mic size={22} />}
            bg="from-orange-500 to-yellow-500"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ number, title, desc, icon, bg }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 pt-14 hover:shadow-xl transition">
      <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-linear-to-r from-[#9810FA] to-[#155DFC] text-white text-sm font-semibold flex items-center justify-center shadow">
        {number}
      </div>

      <div
        className={`absolute top-6 left-6 w-10 h-10 rounded-xl bg-linear-to-br ${bg} text-white flex items-center justify-center shadow-md`}
      >
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
