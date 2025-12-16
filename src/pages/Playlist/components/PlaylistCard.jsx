<<<<<<< HEAD
import TrackRow from "./TrackRow";

const demoTracks = [
  { id: 1, title: "At Last", artist: "Etta James", src: "/demo/1.mp3" },
  { id: 2, title: "Can't Help Falling in Love", artist: "Elvis Presley", src: "/demo/2.mp3" },
  { id: 3, title: "Wonderful Tonight", artist: "Eric Clapton", src: "/demo/3.mp3" },
];

export default function PlaylistCard({ index, data, open, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow">
      <button
        onClick={onToggle}
        className="w-full flex justify-between px-6 py-4"
      >
        <div>
          <p className="font-medium">{index}. {data.title}</p>
          <p className="text-xs text-gray-500">{data.subtitle}</p>
        </div>
        <span>{open ? "⌃" : "⌄"}</span>
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-3">
          {demoTracks.map(track => (
            <TrackRow
              key={track.id}
              track={track}
              playlist={demoTracks}
            />
          ))}
        </div>
      )}
    </div>
=======
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
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
  );
}
