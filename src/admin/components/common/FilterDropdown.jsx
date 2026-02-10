import { useRef, useEffect } from "react";

export default function FilterDropdown({
  open,
  onClose,
  selected,
  onChange,
}) {
  const ref = useRef(null);

  // outside click close
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-xl z-50 cursor-pointer"
    >
      {["", "Free", "Paid"].map((item) => (
        <button
          key={item || "all"}
          onClick={() => {
            onChange(item);
            onClose();
          }}
          className={`w-full text-left px-4 py-4 text-md border border-gray-100 hover:bg-blue-100 cursor-pointer overflow-hidden z-20 ${
            selected === item ? "bg-gray-100 font-medium" : ""
          }`}
        >
          {item === "" ? "All" : item}
        </button>
      ))}
    </div>
  );
}