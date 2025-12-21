import PlaylistPlayer from "./PlaylistPlayer";
import TrackRow from "./TrackRow";
import coverImg from "../../../assets/img/playlist.png";
import { FiChevronDown } from "react-icons/fi";

export default function PlaylistCard({
  index,
  title,
  subtitle,
  tracks = [],
  isOpen,
  spotifyUrl,
  onToggle,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* HEADER */}
      <div
        onClick={onToggle}
        className="mb-4 flex items-start justify-between cursor-pointer select-none"
      >
        <div>
          <p className="font-medium">
            {index}. {title}
          </p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>

        {/* ICON */}
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FiChevronDown className="text-gray-500 text-xl" />
        </span>
      </div>

      {/* COLLAPSIBLE CONTENT */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {/* COVER IMAGE */}
          <img
            src={coverImg}
            alt="playlist cover"
            className="w-full h-100 object-cover rounded-xl"
          />

          {/* PLAYER */}
          <PlaylistPlayer />

          {/* TRACK LIST */}
          <div className="mt-4 space-y-6 ">
            {tracks.map((track, idx) => (
              <TrackRow key={idx + 1} track={track} spotifyUrl={spotifyUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
