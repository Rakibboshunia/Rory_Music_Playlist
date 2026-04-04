 import yourImage from "../assets/images/Cat.jpg";

export default function Founder() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            After performing at thousands of weddings, we’ve seen first-hand how
            much the right music shapes the atmosphere of a night. We built this
            tool to help couples discover better song ideas faster, based on
            real experience of what works, what flows, and what keeps a
            dancefloor feeling right.
          </p>

          <p className="text-gray-700 font-medium leading-relaxed">
            This isn’t just a random playlist generator. It’s designed around
            how real weddings actually feel.
          </p>
        </div>

        {/* RIGHT: IMAGE / BRAND VISUAL */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-20 rounded-3xl" />

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 flex items-center justify-center">
            {/* Replace this with real image */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                <img
                  src={yourImage} // 👈 import করা image
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-semibold">DJ & SAX®</p>
              <p className="text-sm text-gray-500">
                Wedding Entertainment Brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}