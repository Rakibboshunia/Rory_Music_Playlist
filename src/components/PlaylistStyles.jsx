import { useNavigate } from "react-router-dom";

export default function PlaylistStyles() {
  const navigate = useNavigate();

  const styles = [
    {
      title: "Modern Wedding Party",
      desc: "Big singalongs, modern favourites, and guaranteed floor-fillers",
    },
    {
      title: "Elegant Drinks Reception",
      desc: "Stylish, feel-good tracks that create atmosphere without overpowering the room",
    },
    {
      title: "Mixed-Age Dancefloor",
      desc: "A balanced mix of old-school classics, throwbacks, and current hits",
    },
    {
      title: "Indie Meets Classics",
      desc: "A more personal, less predictable blend for couples who want something different",
    },
    {
      title: "Romantic to Upbeat Flow",
      desc: "Start stylishly and build into a full party atmosphere",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          See the Kind of{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Playlists You Can Create
          </span>
        </h2>

        {/* Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

          {styles.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[300px] snap-start group 
              relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90" />

              {/* Overlay content */}
              <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm opacity-90">
                  {item.desc}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition" />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/quiz")}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white 
            px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            Create My Playlist
          </button>
        </div>

      </div>
    </section>
  );
}