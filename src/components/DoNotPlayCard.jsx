import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiSkipForward } from "react-icons/fi";
import InputField from "../components/InputField";

export default function DoNotPlayCard({
  title,
  inputCount = 1,
  required = false,
  onNext,
  onSkip,
  onBack,
}) {
  const [values, setValues] = useState(Array(inputCount).fill(""));

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const handleBack = () => {
    if (required && !values[0].trim()) {
      return;
    }

    if (onBack) {
      onBack(values);
    }
  };

  const handleNext = () => {
    if (required && !values[0].trim()) {
      return;
    }

    if (onNext) {
      onNext(values);
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip(values);
    }
  };

  return (
    <div className=" rounded-2xl shadow-lg p-10 space-y-6 text-center">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="space-y-6">
        {values.map((val, index) => (
          <InputField
            key={index}
            placeholder={
              index === 0 && required
                ? "Required Artist..."
                : "Enter Artist Name..."
            }
            value={val}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        {!required && (
          <button
            onClick={handleSkip}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 
            cursor-pointer hover:bg-linear-to-r from-[#155DFC] to-[#9810FA] 
            hover:text-white transition-all"
          >
            <FiSkipForward size={18} />
            Skip
          </button>
        )}

        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-5 py-2 rounded-full 
          bg-linear-to-r from-[#155DFC] to-[#9810FA] 
          text-white cursor-pointer hover:shadow-2xl transition-all"
        >
          <FiArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-2 rounded-full 
          bg-linear-to-r from-[#155DFC] to-[#9810FA] 
          text-white cursor-pointer hover:shadow-2xl transition-all"
        >
          Next
          <FiArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}