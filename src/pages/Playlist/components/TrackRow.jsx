import { useAudioPlayer } from "../../../context/AudioPlayerContext";

export default function TrackRow({ track, playlist, playlistId }) {
  const { playTrack } = useAudioPlayer();

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{track.title}</p>
        <p className="text-xs text-gray-500">{track.artist}</p>
      </div>

      <button
        onClick={() => playTrack(track, playlist, playlistId)}
        className="w-8 h-8 bg-blue-600 text-white rounded"
      >
        ▶
      </button>
    </div>
  );
}
