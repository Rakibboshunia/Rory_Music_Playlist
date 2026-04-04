import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Tell us your vibe",
      desc: "Answer a few quick questions about your music taste, crowd, and the kind of atmosphere you want on the night.",
    },
    {
      title: "Get matched with your playlist",
      desc: "We instantly generate personalised song suggestions based on your answers, so your playlist feels relevant and genuinely useful.",
    },
    {
      title: "Unlock your playlist",
      desc: "Complete the quiz, enter your email, and get your free 15-song playlist sent straight to your inbox.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden cursor-pointer">
      
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Wedding Playlist, <br />Sorted in{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            3 Simple Steps
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-gray-100 
              shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 
              w-12 h-12 flex items-center justify-center 
              rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg">
                {i + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button
            onClick={() => navigate("/quiz")}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white 
            px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
          >
            Build My Playlist
          </button>
        </div>
      </div>
    </section>
  );
}