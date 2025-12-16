<<<<<<< HEAD
import { useAudioPlayer } from "../../../context/AudioPlayerContext";

export default function TrackRow({ track, playlist = [] }) {
  const { playTrack } = useAudioPlayer();

  // ✅ SAFETY GUARD (future API safe)
  const safePlaylist = Array.isArray(playlist) ? playlist : [];

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#F7F8FF]">
      <div>
        <p className="text-sm font-medium">{track.title}</p>
        <p className="text-xs text-gray-500">{track.artist}</p>
      </div>

      <button
        onClick={() => playTrack(track, safePlaylist)}
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center"
      >
        ▶
      </button>
=======
export default function TrackRow({ track, onPlay }) {
  return (
    <div
      className="flex items-center gap-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2"
      onClick={onPlay}
    >
      <img
        src={track.cover}
        className="w-12 h-12 rounded-lg object-cover"
      />

      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm truncate">
          {track.title}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {track.artist}
        </p>
      </div>

      <span className="text-sm text-gray-400">▶</span>
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
    </div>
  );
}
