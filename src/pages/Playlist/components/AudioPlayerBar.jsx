export default function AudioPlayerBar({ track }) {
  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-4 flex items-center gap-4 z-50">
      <img
        src={track.cover}
        className="w-12 h-12 rounded-lg"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">
          {track.title}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {track.artist}
        </p>
      </div>

      <audio controls className="w-64">
        <source src={track.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
