import { Icon } from "@iconify/react";

export default function StatsCard({ icon, value, label, trend }) {
  return (
    <div className="bg-blue-100/40 rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm">
      
      <div
        className="
          bg-white rounded-2xl
          p-4 sm:p-5 md:p-6
          flex flex-col justify-between
          h-full
          shadow-md
          transition hover:shadow-lg
        "
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          
          {/* Icon */}
          <div className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl bg-gray-100 flex items-center justify-center">
            <Icon
              icon={icon}
              className="text-lg sm:text-xl md:text-2xl text-blue-600"
            />
          </div>

          {/* Trend */}
          <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm font-medium">
            <Icon icon="mdi:trending-up" className="text-sm sm:text-base" />
            {trend}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-4 sm:mt-6">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            {value}
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {label}
          </p>
        </div>
      </div>

    </div>
  );
}
