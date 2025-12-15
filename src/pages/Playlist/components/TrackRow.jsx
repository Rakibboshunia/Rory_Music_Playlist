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
    </div>
  );
}
