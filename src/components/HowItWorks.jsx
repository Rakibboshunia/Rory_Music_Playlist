import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Tell Us Your Vibe",
      desc: "Answer a few quick questions about your music taste and the atmosphere you want to create.",
    },
    {
      title: "Get Matched With Your Playlist",
      desc: "We generate personalised song suggestions based on your answers.",
    },
    {
      title: "Unlock Your Playlist",
      desc: "Enter your email and receive your free 15-song playlist instantly.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden cursor-pointer">

      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Your Wedding Playlist, Sorted <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            in 3 Simple Steps
          </span>
        </h2>

        {/* Steps */}
        <div className="relative mt-20">

          {/* 🔥 Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-10 relative">

            {steps.map((step, i) => (
              <div
                key={i}
                className="
                  group relative p-8 rounded-3xl
                  bg-white/70 backdrop-blur-md
                  border border-gray-100
                  shadow-md hover:shadow-2xl
                  transition duration-300 hover:-translate-y-2
                "
              >
                {/* Glow hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition" />

                {/* Step number */}
                <div
                  className="
                    absolute -top-6 left-1/2 -translate-x-1/2
                    w-14 h-14 flex items-center justify-center
                    rounded-full
                    bg-gradient-to-r from-purple-600 to-pink-500
                    text-white font-bold text-lg
                    shadow-lg group-hover:scale-110 transition
                  "
                >
                  {i + 1}
                </div>

                {/* Content */}
                <h3 className="mt-8 text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <button
            onClick={() => navigate("/quiz")}
            className="
              group px-8 py-4 rounded-2xl
              bg-gradient-to-r from-purple-600 to-pink-500
              text-white text-lg font-semibold
              shadow-xl hover:shadow-2xl
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