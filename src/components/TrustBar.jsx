import { Music, Users, Zap } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: Music,
      text: "Built from real wedding music experience",
    },
    {
      icon: Users,
      text: "Designed for modern couples",
    },
    {
      icon: Zap,
      text: "Fast, personalised and easy to use",
    },
  ];

  return (
    <section className="relative py-12 px-6 bg-white overflow-hidden">

      {/* Subtle glow */}
      <div className="absolute w-[250px] h-[250px] bg-purple-200 opacity-20 blur-3xl rounded-full top-[-80px] left-[-80px]" />
      <div className="absolute w-[250px] h-[250px] bg-pink-200 opacity-20 blur-3xl rounded-full bottom-[-80px] right-[-80px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">

        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="
                group flex items-center gap-4 p-5 rounded-2xl
                bg-white/70 backdrop-blur-md
                border border-purple-300
                shadow-sm hover:shadow-xl
                transition duration-300 hover:-translate-y-1
              "
            >
              {/* ICON */}
              <div
                className="
                  flex items-center justify-center w-11 h-11 rounded-xl
                  bg-gradient-to-r from-purple-600 to-pink-500
                  text-white shadow-md
                  group-hover:scale-110 transition
                "
              >
                <Icon size={20} />
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-sm sm:text-base font-medium leading-snug">
                {item.text}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}