import React from "react";
import cardImg from "../../../assets/cardbg.webp"; // your app mockup

export default function MockupCard() {
  return (
    <div className="w-80 lg:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-4 bg-gradient-to-br from-pink-400 to-indigo-500 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs opacity-90">Playlist</div>
            <div className="font-semibold">Chill Vibes • 68 tracks</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">AL</div>
        </div>
      </div>

      <div className="p-4">
        <img src={cardImg} alt="mockup cover" className="w-full rounded-md mb-3" />
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <div>
              <div className="font-medium">Midnight Drive</div>
              <div className="text-sm text-gray-500">Neon Echoes</div>
            </div>
            <div className="text-sm text-gray-400">3:42</div>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <div className="font-medium">Sunset Loop</div>
              <div className="text-sm text-gray-500">Luna Streams</div>
            </div>
            <div className="text-sm text-gray-400">4:05</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
