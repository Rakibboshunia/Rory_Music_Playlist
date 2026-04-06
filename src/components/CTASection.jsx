import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-white opacity-10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-white opacity-10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10 text-white">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Build Your Wedding Playlist?
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          Answer a few quick questions and discover song ideas tailored to your vibe, your guests, and the atmosphere you want to create.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/quiz")}
            className="
              group inline-flex items-center gap-3
              px-10 py-4 rounded-full
              bg-white text-purple-700 font-semibold
              shadow-xl hover:shadow-2xl
              transition duration-300
              hover:scale-105 active:scale-95
            "
          >
            Create My Playlist
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </section>
  );
}