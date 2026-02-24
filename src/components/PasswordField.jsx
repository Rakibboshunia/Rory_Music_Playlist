import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordField({
  label,
  value,
  onChange,
  placeholder,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-gray-600 mb-1 text-sm">
          {label}
        </label>
      )}

      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-10 text-gray-500"
      >
        {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
      </button>
    </div>
  );
}