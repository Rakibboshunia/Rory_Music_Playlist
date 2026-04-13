import { CheckCircle } from "lucide-react";

export default function PerfectFor() {
  const items = [
    "Help choosing wedding songs without the stress",
    "A playlist that feels personal",
    "Ideas for a mixed crowd",
    "Inspiration for your DJ or band",
    "A quicker way to plan your wedding soundtrack",
  ];

  return (
    <section className="relative py-24 px-6 bg-linear-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-400 opacity-20 blur-3xl rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[350px] h-[350px] bg-pink-400 opacity-20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          Perfect For Couples <br />Who{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Want…
          </span>
        </h2>

        {/* Checklist */}
        <div className="grid md:grid-cols-2 gap-8 text-left">

          {items.map((item, i) => (
            <div
              key={i}
              className="
                group flex items-center gap-4 p-6 rounded-2xl
                bg-white/70 backdrop-blur-md
                border border-purple-300
                shadow-sm hover:shadow-2xl
                transition duration-300 hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition">
                  <CheckCircle size={18} />
                </div>
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