import { useNavigate } from "react-router-dom";

export default function BackNextButtons({
  backPath = "/",
  nextPath,
  onNext,
  disabled = false,
  showBack = true,
  showNext = true,
  backText = "← Back",
  nextText = "Next →",
}) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (nextPath) {
      navigate(nextPath);
    }
  };

  return (
    <div className="flex justify-between items-center mt-6">

      {showBack && (
        <button
          onClick={() => navigate(backPath)}
          className="px-5 py-2 rounded-full text-white 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          {backText}
        </button>
      )}

      {showNext && (
        <button
          disabled={disabled}
          onClick={handleNext}
          className="px-5 py-2 rounded-full text-white 
          bg-gradient-to-r from-[#155DFC] to-[#9810FA] 
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          {nextText}
        </button>
      )}

    </div>
  );
}