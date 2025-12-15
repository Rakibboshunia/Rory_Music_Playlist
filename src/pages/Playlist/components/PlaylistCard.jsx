export default function PlaylistCard({ playlist, isActive, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full px-6 py-5 flex justify-between items-center"
    >
      <div className="text-left">
        <h3 className="font-semibold text-lg">
          {playlist.title}
        </h3>
        <p className="text-sm text-gray-500">
          {playlist.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {playlist.locked && (
          <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
            Locked
          </span>
        )}
        <span className="text-xl">
          {isActive ? "−" : "+"}
        </span>
      </div>
    </button>
  );
}
