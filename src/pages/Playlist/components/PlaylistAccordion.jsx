import PlaylistCard from "./PlaylistCard";
import TrackRow from "./TrackRow";

export default function PlaylistAccordion({
  playlist,
  isActive,
  onToggle,
  onPlayTrack,
}) {
  return (
    <div className="bg-white rounded-2xl shadow">
      <PlaylistCard
        playlist={playlist}
        isActive={isActive}
        onToggle={onToggle}
      />

      {isActive && (
        <div
          className={`px-6 pb-6 ${
            playlist.locked
              ? "opacity-40 blur-sm pointer-events-none"
              : ""
          }`}
        >
          {playlist.tracks.map((track, i) => (
            <TrackRow
              key={i}
              track={track}
              onPlay={() => onPlayTrack(track)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
