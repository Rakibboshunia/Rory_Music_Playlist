import { Clock, Users, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyLove() {
  const items = [
    {
      icon: Clock,
      title: "No more spending hours on Spotify",
      desc: "Get tailored wedding song ideas in minutes instead of endlessly searching playlists that don’t quite fit.",
    },
    {
      icon: Users,
      title: "Built around your crowd",
      desc: "Whether you’ve got a mixed-age guest list, party people, music lovers, or all three, your playlist is shaped around the atmosphere you want to create.",
    },
    {
      icon: Sparkles,
      title: "Discover songs you might never have found",
      desc: "Get the right mix of timeless classics, modern favourites, and dancefloor fillers without it feeling random or generic.",
    },
    {
      icon: ShieldCheck,
      title: "Feel more confident about your music choices",
      desc: "Whether you’re sending ideas to your DJ, building your own playlist, or just trying to define your style, this gives you a clear starting point.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white cursor-pointer">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Couples Love{" "} <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Soundtrack My Night
          </span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group p-8 rounded-3xl border border-gray-100 
                bg-gradient-to-br from-white to-gray-50
                hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl 
                bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md
                mb-6 group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}