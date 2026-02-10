import { Icon } from "@iconify/react";

export default function StatsCard({ icon, value, label, trend }) {
  return (
    <div
      className="
        bg-white rounded-2xl
        p-4 sm:p-5 md:p-6
        flex flex-col justify-between
        min-h-37 sm:min-h-42 md:min-h-45
        shadow
      "
    >
      {/* Top row: icon (left) + trend (right) */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <Icon
            icon={icon}
            className="text-xl sm:text-2xl text-blue-600"
          />
        </div>

        {/* Trend */}
        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
          <Icon icon="mdi:trending-up" className="text-base" />
          {trend}
        </div>
      </div>

      {/* Bottom content */}
      <div className="mt-6">
        <div className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          {value}
        </div>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}