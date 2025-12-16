import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="pt-15 pb-15 bg-[#F4F7FF]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-center text-white py-16 px-10 shadow-xl">
          
          <p className="text-xl opacity-90">
            👥 Join 2,500+ happy clients
          </p>

          <h2 className="text-4xl font-semibold mt-3">
            Ready to discover your perfect soundtrack?
          </h2>

          <p className="mt-3 opacity-90">
            Take the quiz now and get your personalised playlist in 60 seconds
          </p>

          {/* ✅ FIXED BUTTON */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/quiz")}
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 mx-auto"
            >
              Start My Quiz Now →
            </button>
          </div>

          <p className="mt-4 text-xs opacity-90">
            No credit card required • 100% free playlist • Instant results
          </p>

        </div>
      </div>
    </section>
  );
}