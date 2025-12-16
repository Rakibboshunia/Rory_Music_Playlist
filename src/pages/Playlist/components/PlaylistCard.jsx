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
  );
}
