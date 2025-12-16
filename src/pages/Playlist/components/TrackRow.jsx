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
    </div>
  );
}
