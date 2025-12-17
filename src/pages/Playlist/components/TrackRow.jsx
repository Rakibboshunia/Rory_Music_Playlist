import { useAudioPlayer } from "../../../context/AudioPlayerContext";

export default function TrackRow({ track, playlist = [], playlistId }) {
  const { playTrack } = useAudioPlayer();

  // safety guard
  const safePlaylist = Array.isArray(playlist) ? playlist : [];

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#F7F8FF] hover:bg-[#EEF0FF] transition">
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">{track.title}</p>
        <p className="text-xs text-gray-500 truncate">{track.artist}</p>
      </div>

      <button
        onClick={() => playTrack(track, safePlaylist, playlistId)}
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
      >
        ▶
      </button>
    </div>
  );
}