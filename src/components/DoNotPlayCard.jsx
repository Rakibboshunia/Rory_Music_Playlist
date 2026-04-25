import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiSkipForward, FiMusic, FiXCircle } from "react-icons/fi";
import InputField from "../components/InputField";

export default function DoNotPlayCard({
  title,
  inputCount = 1,
  required = false,
  onNext,
  onSkip,
  onBack,
  onSkipAll,
}) {
  const [values, setValues] = useState(Array(inputCount).fill(""));

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const handleBack = () => {
    if (onBack) onBack(values);
  };

  const handleNext = () => {
    if (required && !values[0].trim()) return;
    if (onNext) onNext(values);
  };

  const handleSkip = () => {
    if (onSkip) onSkip(values);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 space-y-8 text-center border border-purple-100 shadow-xl">
      {/* Icon & Header */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center text-red-500 shadow-inner">
            <FiMusic size={32} />
          </div>
          <div className="absolute -top-2 -right-2 text-red-600 bg-white rounded-full">
            <FiXCircle size={24} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm mt-1">Is there any music you definitely want to avoid?</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        {values.map((val, index) => (
          <div key={index} className="relative group">
            <InputField
              placeholder={
                index === 0 && required
                  ? "Required Artist..."
                  : `Enter Artist Name...`
              }
              value={val}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-red-400 transition-colors">
              <FiXCircle size={18} />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
        <button
          onClick={handleBack}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full 
          bg-gray-100 text-gray-600 font-semibold cursor-pointer hover:bg-gray-200 transition-all active:scale-95"
        >
          <FiArrowLeft size={18} />
          Back
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!required && (
            <button
              onClick={handleSkip}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-purple-100 
              text-purple-600 font-semibold cursor-pointer hover:bg-purple-50 transition-all active:scale-95"
            >
              Skip
              <FiSkipForward size={18} />
            </button>
          )}

          <button
            onClick={handleNext}
            className="flex-[2] sm:flex-none flex items-center justify-center gap-2 px-10 py-3 rounded-full 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            text-white font-bold cursor-pointer hover:shadow-lg hover:shadow-purple-200 transition-all active:scale-95"
          >
            Finish
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 italic">
        * Don't worry, you can always update these later
      </p>
    </div>
  );
}
