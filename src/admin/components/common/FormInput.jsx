import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FormInput({ label, type = "text", ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  const placeholder = isPassword ? "••••••••" : undefined;

  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className="
            w-full
            rounded-lg
            px-3
            py-2
            pr-10
            outline-none
            border
            border-gray-300
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
          "
          {...props}
        />

        {/* Eye icon only for password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <Icon
              icon={
                showPassword
                  ? "mdi:eye-off-outline"
                  : "mdi:eye-outline"
              }
              className="text-xl"
            />
          </button>
        )}
      </div>
    </div>
  );
}