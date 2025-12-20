import PlaylistPlayer from "./PlaylistPlayer";
import TrackRow from "./TrackRow";
import coverImg from "../../../assets/img/playlist.png";

export default function PlaylistCard({
  index,
  title,
  subtitle,
  tracks = [],
  isOpen,
  onToggle,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div
        onClick={onToggle}
        className="mb-4 flex items-start justify-between cursor-pointer"
      >
        <div>
          <p className="font-medium">
            {index}. {title}
          </p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </div>

      <div
        className={`grid transition-all duration-500 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <img
            src={coverImg}
            alt="playlist cover"
            className="w-full h-100 object-cover rounded-xl"
          />

          <PlaylistPlayer />

          <div className="mt-4 space-y-3">
            {tracks.map((track) => (
              <TrackRow key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
