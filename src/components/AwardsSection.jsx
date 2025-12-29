import React from "react";
import rsvp from "../assets/img/2023.png"
import wedding from "../assets/img/2024.png"
import wedding25 from "../assets/img/2025.png"

export default function AwardsSection() {
  return (
    <section className="py-5 bg-[#F4F8FE]">
      <div className="max-w-5xl mx-auto text-center pt-8 px-6">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
          Award-Winning <br /> Entertainment Excellence
        </h2>

        <p className="mt-3 text-gray-600">
          DJ & SAX® is trusted by Ireland's top wedding directories and event platforms.
        </p>
      </div>

      {/* AWARDS LIST */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-16
          px-4 sm:px-6 text-center
          grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3
          gap-6 sm:gap-8">

        {/* Award 1 */}
        <AwardCard
          img={rsvp}
          title="Wedding DJ Of The Year 2023"
        />

        {/* Award 2 */}
        <AwardCard
          img={wedding}
          title="Wedding DJ Of The Year 2024"
        />

        {/* Award 3 */}
        <AwardCard
          img={wedding25}
          title="Entertainment Agency Of The Year 2025"
        />
      </div>

      {/* STATS */}
            <div className="max-w-5xl mx-auto px-4 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">

                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className="text-3xl">🎵</span>
                  <h2 className="text-base sm:text-lg font-medium leading-snug">
                    Thousands of bespoke <br />
                    soundtracks created
                  </h2>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className="text-3xl">💃</span>
                  <h2 className="text-base sm:text-lg font-medium leading-snug">
                    Built on real dancefloor <br />
                    data from live celebrations
                  </h2>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className="text-3xl">⭐</span>
                  <h2 className="text-base sm:text-lg font-medium leading-snug">
                    5.0★ average Google rating <br />
                    from DJ and SAX® clients
                  </h2>
                </div>
              </div>
            </div>

          </section>
        );
      }

      /* AWARD CARD */
      function AwardCard({ img, title }) {
        return (
          <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center hover:shadow-lg transition">
            <img src={img} alt={title} className="w-40 h-40 object-contain" />
            <p className="mt-6 text-lg font-medium text-gray-700">{title}</p>
          </div>
        );
      }

      /* STAT ITEM */
      function Stat({ number, label }) {
        return (
          <div>
            <p className="text-4xl font-bold bg-linear-to-r from-[#9810FA] to-[#155DFC] text-transparent bg-clip-text items-center">{number}</p>
            <p className="mt-2 text-gray-600">{label}</p>
          </div>
        );
      }