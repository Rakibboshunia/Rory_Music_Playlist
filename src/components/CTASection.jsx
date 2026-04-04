import { useNavigate } from "react-router-dom";
import SpotifyLogo from "../assets/img/SpotifyLogo.png";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-400 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-400 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl text-center text-white py-20 px-6 sm:px-12 shadow-2xl">

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 leading-tight">
            Ready to Build Your{" "}
            <span className="decoration-white/40">
              Wedding Playlist?
            </span>
          </h2>

          {/* Sub */}
          <p className="mt-4 opacity-90 text-sm sm:text-lg">
            Answer a few quick questions and discover song ideas tailored to your vibe, your guests, and the kind of atmosphere you want to create. 🎶
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/quiz")}
              className="
                group flex items-center gap-3 mx-auto
                px-6 py-4 rounded-full
                bg-white text-purple-700 font-semibold
                shadow-lg hover:shadow-2xl
                transition duration-300 cursor-pointer
                hover:scale-105 active:scale-95
              "
            >
              {/* <img
                src={SpotifyLogo}
                alt="Spotify"
                className="h-7 w-auto"
              /> */}

              <span>Create My Playlist</span>

              <FiArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-xs sm:text-sm opacity-90">
            No credit card required • Free 15-song playlist • Instant results
          </p>
        </div>
      </div>
    </section>
  );
}