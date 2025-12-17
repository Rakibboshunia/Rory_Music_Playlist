import { useAudioPlayer } from "../../../context/AudioPlayerContext";
import { Play } from "lucide-react";

export default function TrackRow({ track, playlist = [], playlistId }) {
  const { setTrackOnly, currentTrack } = useAudioPlayer();

  const isActive = currentTrack?.id === track.id;

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-lg transition
        ${
          isActive
            ? "bg-[#E8EBFF]"
            : "bg-[#F7F8FF] hover:bg-[#EEF0FF]"
        }
      `}
    >
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">{track.title}</p>
        <p className="text-xs text-gray-500 truncate">{track.artist}</p>
      </div>

      {/* 🔥 ONLY SELECT TRACK */}
      <button
        onClick={() =>
          setTrackOnly(track, playlist, playlistId)
        }
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
      >
        <Play size={14} />
      </button>
    </div>
  );
}
