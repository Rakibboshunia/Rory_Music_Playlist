import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

export default function FreeVsFull() {
  const navigate = useNavigate();

  const free = [
    "15 personalised song suggestions",
    "Instant inspiration",
    "Great starting point for wedding music planning",
  ];

  const full = [
    "Full 50-song extended playlist",
    "Better variety and stronger flow",
    "More personalised recommendations",
    "Extra crowd-pleasers and hidden gems",
  ];

  return (
    <section className="relative py-12 md:py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-400 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-400 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto text-start relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          Start Free, Upgrade <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            When You’re Ready
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* FREE */}
          <div className="p-10 rounded-3xl border border-purple-300 bg-white shadow-sm hover:shadow-xl transition duration-300 text-left">

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Free Playlist
            </h3>

            <ul className="space-y-4">
              {free.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="text-green-500 mt-1" size={18} />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* FULL (HIGHLIGHTED) */}
          <div className="relative p-10 rounded-3xl 
            bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-500 
            text-white shadow-2xl scale-100 md:scale-105 hover:scale-105 md:hover:scale-110 transition duration-300">

            {/* Badge */}
            <div className="absolute -top-4 right-6 bg-white text-purple-600 px-4 py-1 rounded-full text-xs font-semibold shadow">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold mb-6">
              Full Playlist
            </h3>

            <ul className="space-y-4">
              {full.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="text-white mt-1" size={18} />
                  <span className="text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => navigate("/quiz")}
            className="
              group inline-flex items-center justify-center gap-3
              px-8 py-4 rounded-2xl
              bg-gradient-to-r from-purple-600 to-pink-500
              text-white font-bold
              shadow-xl hover:shadow-2xl
              transition duration-300
              hover:scale-105 active:scale-95
            "
          >
            Start With My Free Playlist
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </section>
  );
}