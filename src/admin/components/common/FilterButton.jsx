import { Icon } from "@iconify/react";

export default function FilterButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2
        rounded-lg
        text-lg
        flex
        items-center
        gap-1
        cursor-pointer
        text-white
        bg-linear-to-r from-[#9810FA] to-[#155DFC]
        hover:opacity-90
      "
    >
      <Icon icon="mdi:filter-variant" />
      Filter
    </button>
  );
}