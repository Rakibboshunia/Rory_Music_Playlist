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
          w-full px-4 py-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${disabled ? "bg-gray-100" : "bg-white"}
        `}
      />
    </div>
  );
}