import React from "react";

export default function TestimonialsSection() {
  return (
    // ✅ CHANGE HERE: pb-56 + bg-white
    <section className="pt-16 pb-72 bg-white">
      <div className="max-w-5xl mx-auto text-center px-5">
        
        <h2 className="text-5xl font-semibold leading-tight">
          Real Stories. Real Moments. <br /> Real Magic.
        </h2>

        <p className="pt-5 text-gray-600">
          Personalised playlists that shaped unforgettable celebrations.
        </p>
      </div>

      <div className="px-8 max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <TestimonialCard
          text="Perfectly personalised for our wedding — absolutely loved it!"
          img="https://i.pravatar.cc/80?img=5"
          name="Sarah M"
          role="Freshman, UCLA"
        />

        <TestimonialCard
          text="Guests kept dancing all night. This playlist was magic!"
          img="https://i.pravatar.cc/80?img=12"
          name="Marcus T"
          role="High School Senior, Texas"
        />

        <TestimonialCard
          text="The easiest way to create the right event energy."
          img="https://i.pravatar.cc/80?img=25"
          name="Priya K"
          role="Sophomore, MIT"
        />
      </div>
    </section>
  );
}

function TestimonialCard({ text, img, name, role }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-2xl transition border border-gray-100">
      <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>

      <p className="text-gray-700 leading-relaxed mb-6">{text}</p>

      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}