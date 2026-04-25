export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}) {
  return (
    <div>
      {label && (
        <label className="block text-gray-600 mb-1 text-sm">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-6 py-4 border border-purple-100 rounded-2xl 
          focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
          transition-all duration-200 shadow-sm
          ${disabled ? "bg-gray-50 text-gray-400" : "bg-white hover:border-purple-200"}
        `}
      />
    </div>
  );
}