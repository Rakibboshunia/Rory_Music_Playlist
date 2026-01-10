import React from "react";
import { Sparkles, ListMusic, Mic } from "lucide-react";
import SpotifyLogo from "../assets/img/SpotifyLogo.png"
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";


export default function FeaturesSection() {
  const navigate = useNavigate();

  return (
    <section
      id="features-section"
      className="border-t border-gray-200 py-17 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-18">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl pb-2 font-semibold bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
            Your vibe. Your music.
            <br />
            Your Spotify playlist.
          </h2>
          <p className="mt-3 text-gray-600">
            From vision to reality in three simple steps
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto mt-12 sm:mt-16
          px-4 sm:px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 sm:gap-8"
        >
          <FeatureCard
            number="1"
            title="Discover Your Vibe"
            desc="Tell us the energy, genres, and moments you love — and what you don’t want played."
            icon={<Sparkles size={22} />}
            bg="from-pink-500 to-purple-500"
          />

          <FeatureCard
            number="2"
            title="We generate your Spotify playlist"
            desc="Our system creates a personalised playlist using real Spotify tracks based on your answers."
            icon={<ListMusic size={22} />}
            bg="from-blue-500 to-cyan-500"
          />

          <FeatureCard
            number="3"
            title="Listen instantly"
            desc="Open your playlist straight away and hear how your night could sound."
            icon={<Mic size={22} />}
            bg="from-orange-500 to-yellow-500"
          />
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={() => navigate("/quiz")}
          className="
            px-4 py-3 text-white
            bg-linear-to-r from-[#9810FA] to-[#155DFC] hover:text-white
            font-medium rounded-full shadow-md
            transition-all duration-300 ease-out
            hover:scale-[1.03] 
            hover:shadow-xl active:scale-[0.98]
            cursor-pointer hover:border-white/80
            flex items-center justify-center mx-auto"
        >
          <img 
          src={SpotifyLogo} 
          alt="Spotify" 
          className="h-[2.0em] w-auto" 
          />
          Generate my Spotify playlist
          <FiArrowRight size={20} />
        </button>
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
