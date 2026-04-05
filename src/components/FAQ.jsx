import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "How does the playlist generator work?",
      a: "You answer a few quick questions about your music taste, guest mix, and the kind of atmosphere you want, and we generate personalised song suggestions based on your answers.",
    },
    {
      q: "Is it really free?",
      a: "Yes — you can get a free 15-song playlist after completing the quiz.",
    },
    {
      q: "What do I get in the full version?",
      a: "The full version gives you a 50-song playlist with more depth, variety, and stronger personalisation.",
    },
    {
      q: "Do I need Spotify to use it?",
      a: "No, but Spotify makes it easier to save and explore your playlist.",
    },
    {
      q: "Can I use this with my DJ or band?",
      a: "Yes — many couples use it to shape their music direction and send ideas to their DJ or band.",
    },
    {
      q: "Is this just for weddings?",
      a: "It’s built primarily for couples planning wedding music, but it can also work for other celebrations.",
    },
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-24 px-6 bg-white ">
      <div className="max-w-4xl mx-auto ">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked{" "} <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-medium text-gray-800">
                  {item.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}