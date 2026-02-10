import { Icon } from "@iconify/react";

export default function SearchBar({
  placeholder,
  onSearch,
  onFilterClick,
}) {
  return (
    <div className="relative flex items-center gap-3 bg-white rounded-xl px-4 py-3 mb-6 shadow">
      <Icon icon="mdi:magnify" className="text-gray-400 text-3xl" />

      <input
        className="flex-1 outline-none text-md"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />

      <button
        onClick={onFilterClick}
        className="px-4 py-1 rounded-lg text-lg flex items-center gap-1 cursor-pointer text-white bg-linear-to-r from-[#9810FA] to-[#155DFC]"
      >
        <Icon icon="mdi:filter-variant" />
        Filter
      </button>
    </div>
  );
}