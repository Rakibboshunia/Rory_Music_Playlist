import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "How does the playlist generator work?",
      a: "You answer a few quick questions about your music taste, guest mix, and atmosphere. Based on your answers, we generate personalised song suggestions tailored to your wedding.",
    },
    {
      q: "Is it really free?",
      a: "Yes — you can get a free 15-song personalised playlist after completing the quiz.",
    },
    {
      q: "What do I get in the full version?",
      a: "The full version gives you a 50-song playlist with better flow, more variety, and stronger personalisation.",
    },
    {
      q: "Do I need Spotify?",
      a: "No, but Spotify makes it easier to save and explore your playlist.",
    },
    {
      q: "Can I use this with my DJ or band?",
      a: "Yes — many couples use it to guide their DJ or band and shape the music direction.",
    },
    {
      q: "Is this just for weddings?",
      a: "It’s built for weddings, but it works perfectly for other celebrations too.",
    },
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section id="faq-section" className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
          Frequently Asked <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        {/* Accordion */}
        <div className="space-y-5">

          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`
                  rounded-2xl border border-purple-300 transition duration-300
                  ${
                    isOpen
                      ? "bg-white shadow-xl border-purple-200"
                      : "bg-white/70 backdrop-blur-md border-gray-100 hover:shadow-lg"
                  }
                `}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-800">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 px-6 pb-6" : "max-h-0 px-6"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* CTA (Optional but powerful) */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/quiz")}
            className="
              px-8 py-4 rounded-2xl
              bg-linear-to-r from-purple-600 to-pink-500
              text-white font-bold
              shadow-lg hover:shadow-2xl
              transition duration-300
              hover:scale-105 active:scale-95
            "
          >
            Create My Playlist
          </button>
        </div>

      </div>
    </section>
  );
}