import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function PlaylistStyles() {
  const navigate = useNavigate();

  const styles = [
    {
      title: "Modern Wedding Party",
      desc: "Big singalongs and guaranteed floor-fillers",
    },
    {
      title: "Elegant Drinks Reception",
      desc: "Stylish tracks that create atmosphere",
    },
    {
      title: "Mixed-Age Dancefloor",
      desc: "Classics, throwbacks and modern hits",
    },
    {
      title: "Indie Meets Classics",
      desc: "A more personal blend",
    },
    {
      title: "Romantic to Upbeat Flow",
      desc: "Start stylishly and build into a party",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
          See the Kind of <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Playlists You Can Create
          </span>
        </h2>

        {/* Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

          {styles.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[320px] snap-start group 
              relative rounded-3xl overflow-hidden 
              shadow-md hover:shadow-2xl transition duration-300
              hover:-translate-y-2"
            >
              {/* Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500 opacity-90" />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">

                {/* Number badge */}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold mb-6">
                  {i + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-90">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Hover shine */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/quiz")}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold
            px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
          >
            Create My Playlist
          </button>
        </div>

      </div>
    </section>
  );
}