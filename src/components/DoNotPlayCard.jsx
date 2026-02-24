import { useState } from "react";
import toast from "react-hot-toast";
import InputField from "../components/InputField";

export default function DoNotPlayCard({
  title,
  inputCount = 1,
  required = false,
  onNext,
  onSkip,
}) {
  const [values, setValues] = useState(Array(inputCount).fill(""));

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const handleNext = () => {
    if (required && !values[0].trim()) {
      toast.error("Please fill the required field.");
      return;
    }

    onNext(values);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 text-center">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="space-y-4">
        {values.map((val, index) => (
          <InputField
            key={index}
            placeholder={
              index === 0 && required
                ? "Required singer..."
                : "Required singer ..."
            }
            value={val}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        {!required && (
          <button
            onClick={() => onSkip(values)}
            className="px-8 py-3 rounded-full border border-gray-300 cursor-pointer hover:bg-linear-to-r from-[#155DFC] to-[#9810FA] hover:text-white transition-all"
          >
            Skip
          </button>
        )}

        <button
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white cursor-pointer hover:shadow-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}