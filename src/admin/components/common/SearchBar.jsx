import { Icon } from "@iconify/react";

export default function SearchBar({
  placeholder,
  onSearch,
  onFilterClick,
}) {
  return (
    <div className="bg-blue-100/50 flex items-center justify-between p-8 rounded-xl">

      <div className="flex border border-gray-300 items-center gap-3 w-[75%] bg-white px-4 py-3 rounded-lg">
        <Icon icon="mdi:magnify" className="text-gray-400 text-2xl" />

        <input
          className="w-full outline-none text-md bg-transparent"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <button
        onClick={onFilterClick}
        className="px-5 py-3 rounded-lg text-md flex items-center gap-2 cursor-pointer text-white bg-gradient-to-r from-[#9810FA] to-[#155DFC] hover:opacity-90 transition"
      >
        <Icon icon="mdi:filter-variant" />
        Filter
      </button>

    </div>
  );
}
