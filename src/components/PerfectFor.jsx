import { CheckCircle } from "lucide-react";

export default function PerfectFor() {
  const items = [
    "Help choosing wedding songs without the stress",
    "A playlist that feels personal, not generic",
    "Ideas for a mixed crowd",
    "Inspiration for your DJ, band, or evening party",
    "A quicker way to plan the soundtrack to their wedding day",
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 leading-tight">
          Perfect For Couples Who{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Want…
          </span>
        </h2>

        {/* Grid Checklist */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                group flex items-start gap-4 p-6 rounded-2xl
                bg-white/70 backdrop-blur-md
                border border-gray-100
                shadow-sm hover:shadow-xl
                transition duration-300 hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div className="mt-1 flex-shrink-0">
                <CheckCircle
                  className="text-purple-600 group-hover:scale-110 transition"
                  size={24}
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}