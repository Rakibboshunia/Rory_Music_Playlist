import { Clock, Users, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyLove() {
  const items = [
    {
      icon: Clock,
      title: "No more spending hours on Spotify",
      desc: "Get tailored wedding song ideas in minutes.",
    },
    {
      icon: Users,
      title: "Built around your crowd",
      desc: "Your playlist adapts to the atmosphere you want.",
    },
    {
      icon: Sparkles,
      title: "Discover songs you might never have found",
      desc: "Get the right mix of classics and modern favourites.",
    },
    {
      icon: ShieldCheck,
      title: "Feel more confident about your music choices",
      desc: "Use the playlist as inspiration for your DJ or band.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[350px] h-[350px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 leading-tight">
          Why Couples Love <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Soundtrack My Night
          </span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  group relative p-8 rounded-3xl
                  bg-white/70 backdrop-blur-md
                  border border-gray-100
                  shadow-sm hover:shadow-2xl
                  transition duration-300 hover:-translate-y-2
                "
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition duration-300" />

                {/* Icon */}
                <div
                  className="
                    w-14 h-14 flex items-center justify-center rounded-2xl
                    bg-gradient-to-r from-purple-600 to-pink-500
                    text-white shadow-md mb-6
                    group-hover:scale-110 transition
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 leading-snug text-gray-800">
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