import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

export default function FreeVsFull() {
  const navigate = useNavigate();

  const free = [
    "15 personalised song suggestions",
    "Instant inspiration",
    "A great starting point for your wedding music planning",
    "Ideal for couples beginning to shape their soundtrack",
  ];

  const full = [
    "Full 50-song extended playlist",
    "Better variety, stronger flow, and more depth",
    "More personalised recommendations",
    "Extra crowd-pleasers and hidden gems",
    "Ideal for couples who want a fuller soundtrack for the night",
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 cursor-pointer">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Start Free, Upgrade{" "} <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            When You’re Ready
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FREE */}
          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">
              Free Playlist
            </h3>

            <ul className="space-y-4 text-left">
              {free.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="text-green-500 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FULL (HIGHLIGHTED) */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-2xl scale-105">

            {/* Badge */}
            <div className="absolute -top-4 right-6 bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-medium shadow">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold mb-6">
              Full Playlist
            </h3>

            <ul className="space-y-4 text-left">
              {full.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="text-white mt-1" size={18} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <button
            onClick={() => navigate("/quiz")}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-2xl shadow-xl cursor-pointer
            hover:scale-105 transition"
          >
            Start With My Free Playlist
          </button>
        </div>

      </div>
    </section>
  );
}