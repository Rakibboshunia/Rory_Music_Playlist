export default function TrackItem({ title, artist }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center">
          🎶
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500">{artist}</p>
        </div>
      </div>

      <button className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm">
        ▶
      </button>
    </div>
  );
}
