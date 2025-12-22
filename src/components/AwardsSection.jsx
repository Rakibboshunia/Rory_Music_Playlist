import React from "react";
import rsvp from "../assets/img/rsvp23.jpg"
import wedding from "../assets/img/winner24.jpg"
import wedding25 from "../assets/img/winner25.jpg"

export default function AwardsSection() {
  return (
    <section className="border-t border-gray-200 py-5 bg-[#F4F8FE]">
      <div className="max-w-5xl mx-auto text-center pt-8 px-6">

        {/* Title */}
        <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Award-Winning <br /> Entertainment Excellence
        </h2>

        <p className="mt-3 text-gray-600">
          DJ & SAX® is trusted by Ireland's top wedding directories and event platforms.
        </p>
      </div>

      {/* AWARDS LIST */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Award 1 */}
        <AwardCard
          img={rsvp}
          title="RSVP Awards 2023"
        />

        {/* Award 2 */}
        <AwardCard
          img={wedding}
          title="Weddingsuppliers Awards 2024"
        />

        {/* Award 3 */}
        <AwardCard
          img={wedding25}
          title="Wedding Awards 2025"
        />
      </div>

      {/* STATS */}
      <div className="max-w-3xl mx-auto mt-15 px-6 pb-10 grid grid-cols-1 md:grid-cols-3 text-center gap-20">

        <Stat number="2,500+" label="Playlists Created" />
        <Stat number="1,000+" label="Events Performed" />
        <Stat number="5.0⭐" label="Google Rating" />

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
      <p className="text-4xl font-bold bg-linear-to-r from-[#9810FA] to-[#155DFC] text-transparent bg-clip-text">{number}</p>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}