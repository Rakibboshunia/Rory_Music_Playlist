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
    <section className="py-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group flex items-center gap-4 p-6 rounded-2xl border border-gray-100 
              hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              {/* ICON */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl 
              bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md
              group-hover:scale-110 transition">
                <Icon size={22} />
              </div>

              {/* TEXT */}
              <p className="text-gray-700 font-medium leading-snug">
                {item.text}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}