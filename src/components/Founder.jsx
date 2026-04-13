import roryImage from "../assets/img/RoryClark.jpeg";

export default function Founder() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-400 opacity-20 blur-3xl rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[350px] h-[350px] bg-pink-400 opacity-20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT: TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Built From Real{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Wedding Entertainment Experience
            </span>
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Soundtrack My Night was created by the team behind DJ & SAX®, one of
            Ireland’s most in-demand wedding entertainment brands.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            After performing at thousands of weddings, we’ve seen how much the
            right music shapes the atmosphere of a night. This tool was built to
            help couples discover better song ideas faster based on real
            experience.
          </p>

          <p className="text-gray-700 font-medium leading-relaxed">
            This isn’t just a random playlist generator. It’s designed around
            how real weddings actually feel.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow background */}
          <div className="absolute w-[260px] h-[260px] bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20 rounded-full" />

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-18 text-center hover:scale-105 transition duration-300">
            {/* IMAGE FIXED (FULL SHOW) */}
            <div className="w-45 h-45 mx-auto mb-4 rounded-full overflow-hidden shadow-lg relative">
              {/* Background fill */}
              <img
                src={roryImage}
                className="absolute inset-0 w-full h-full object-cover blur-md scale-125 opacity-30"
                alt=""
              />

              {/* Main image */}
              <img
                src={roryImage}
                alt="Founder"
               
                className="relative h-full mx-auto object-contain"
              />
            </div>

            {/* Name / Brand */}
            <p className="font-semibold text-lg text-gray-800">DJ & SAX®</p>
            <p className="text-sm text-gray-500">
              Wedding Entertainment Specialists
            </p>

            {/* Small divider */}
            <div className="w-10 h-[2px] bg-linear-to-r from-purple-600 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}