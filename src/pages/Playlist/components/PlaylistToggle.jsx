import React from "react";

export default function PlaylistToggle({
  playlistMode,
  setPlaylistMode,
  hasPremium,
}) {
  return (
    <div className="flex justify-center mt-8 mb-8">
      <div className="flex items-center border border-purple-500 rounded-full p-1 w-[300px] bg-white shadow-sm">

        {/* FREE */}
        <button
          onClick={() => setPlaylistMode("free")}
          className={`flex-1 py-2 text-sm rounded-full transition-all duration-300 cursor-pointer ${
            playlistMode === "free"
              ? "bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white"
              : "text-gray-600"
          }`}
        >
          Free Playlist
        </button>

        {/* PREMIUM */}
        <button
          onClick={() => hasPremium && setPlaylistMode("premium")}
          disabled={!hasPremium}
          className={`flex-1 py-2 text-sm rounded-full transition-all duration-300 cursor-pointer ${
            playlistMode === "premium"
              ? "bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white"
              : hasPremium
              ? "text-gray-600"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          Premium Playlist
        </button>

      </div>
    </div>
  );
}