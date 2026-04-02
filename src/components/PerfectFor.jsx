import { CheckCircle } from "lucide-react";

export default function PerfectFor() {
  const items = [
    "Help choosing wedding songs without the stress",
    "A playlist that feels personal, not generic",
    "Ideas for a mixed crowd",
    "Inspiration for your DJ, band, or evening party",
    "A quicker way to plan your wedding soundtrack",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Perfect For Couples Who{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Want…
          </span>
        </h2>

        {/* Checklist */}
        <div className="space-y-6 text-left mt-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-2xl 
              hover:bg-gray-50 transition"
            >
              {/* Icon */}
              <div className="mt-1">
                <CheckCircle className="text-purple-600" size={22} />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}