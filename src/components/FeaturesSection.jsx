// import React from "react";
// import { Sparkles, ListMusic, Mic } from "lucide-react";
// import { useNavigate } from "react-router-dom";


// export default function FeaturesSection() {
//   const navigate = useNavigate();

//   return (
//     <section
//       id="features-section"
//       className="border-t border-gray-200 py-17 bg-white"
//     >
      
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-18">
//           <h2 className="text-4xl sm:text-4xl lg:text-5xl pb-2 font-semibold bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
//             Your Wedding Playlist, <br />Sorted in 3 Simple Steps
//           </h2>
          
//         </div>

//         <div
//           className="max-w-6xl mx-auto mt-12 sm:mt-16
//           px-4 sm:px-6
//           grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
//           gap-6 sm:gap-8"
//         >
//           <FeatureCard
//             number="1"
//             title="Tell us your vibe"
//             desc=" Answer a few quick questions about your music taste, crowd, and the kind of atmosphere you want on the night."
//             icon={<Sparkles size={22} />}
//             bg="from-pink-500 to-purple-500"
//           />

//           <FeatureCard
//             number="2"
//             title="Get matched with your playlist"
//             desc="We instantly generate personalised song suggestions based on your answers, so your playlist feels relevant and genuinely useful."
//             icon={<ListMusic size={22} />}
//             bg="from-blue-500 to-cyan-500"
//           />

//           <FeatureCard
//             number="3"
//             title=" Unlock your playlist"
//             desc="Complete the quiz, enter your email, and get your free 15-song playlist sent straight to your inbox."
//             icon={<Mic size={22} />}
//             bg="from-orange-500 to-yellow-500"
//           />
//         </div>
//       </div>
//       <div className="mt-10">
//         <button
//           onClick={() => navigate("/quiz")}
//           className="
//             px-4 py-2 text-white
//             bg-linear-to-r from-[#9810FA] to-[#155DFC] hover:text-white border border-transparent
//             font-medium rounded-full shadow-md
//             transition-all duration-300 ease-out
//             hover:scale-[1.03] 
//             hover:shadow-xl active:scale-[0.98]
//             cursor-pointer hover:border-white/80
//             flex items-center justify-center mx-auto"
//         >
//           <img 
//           label="Build My Playlist"
//           className="h-[2.0em] w-auto" 
//           />
//           Build My Playlist
//         </button>
//       </div>
//     </section>
//   );
// }

// function FeatureCard({ number, title, desc, icon, bg }) {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-lg p-8 pt-14 hover:shadow-xl transition">
//       <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-linear-to-r from-[#9810FA] to-[#155DFC] text-white text-sm font-semibold flex items-center justify-center shadow">
//         {number}
//       </div>

//       <div
//         className={`absolute top-6 left-6 w-10 h-10 rounded-xl bg-linear-to-br ${bg} text-white flex items-center justify-center shadow-md`}
//       >
//         {icon}
//       </div>

//       <h3 className="mt-4 text-lg font-semibold">{title}</h3>
//       <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
//     </div>
//   );
// }
