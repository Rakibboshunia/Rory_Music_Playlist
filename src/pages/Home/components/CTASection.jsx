import React from "react";

export default function CTASection() {
  return (
    <section className="pt-10 pb-24 bg-[#F4F7FF]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-center text-white py-16 px-10 shadow-xl">
          
          <p className="text-sm opacity-90">
            👥 Join 2,500+ happy clients
          </p>

          <h2 className="text-3xl font-semibold mt-3">
            Ready to discover your perfect soundtrack?
          </h2>

          <p className="mt-3 opacity-90">
            Take the quiz now and get your personalised playlist in 60 seconds
          </p>

          <div className="mt-8">
            <button className="px-10 py-3 bg-white text-blue-700 font-medium rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 mx-auto">
              Start My Quiz Now →
            </button>
          </div>

          <p className="mt-4 text-xs opacity-80">
            No credit card required • 100% free playlist • Instant results
          </p>

        </div>
      </div>
    </section>
  );
}
