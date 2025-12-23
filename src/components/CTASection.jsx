import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className=" bg-white py-10 sm:py-0 pb-18 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl text-center text-white py-16 px-6 sm:px-10 shadow-2xl">

          <p className="text-sm sm:text-xl opacity-90">
            👥 Join 2,500+ happy clients
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold mt-4">
            Ready to discover your perfect soundtrack?
          </h2>

          <p className="mt-3 opacity-90 text-sm sm:text-base">
            Take the quiz now and get your personalised playlist in 60 seconds
          </p>

          <div className="mt-8">
            <button
              onClick={() => navigate("/quiz")}
              className="
                px-4 py-3
                bg-white text-blue-700
                hover:bg-linear-to-r from-[#9810FA] to-[#155DFC] hover:text-white
                font-medium rounded-full
                shadow-md
                transition-all duration-300 ease-out
                hover:scale-[1.03] 
                hover:shadow-xl active:scale-[0.98]
                cursor-pointer
                flex items-center justify-center gap-2
                mx-auto
              "
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
