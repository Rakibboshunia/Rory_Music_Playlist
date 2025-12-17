import { useAudioPlayer } from "../../../context/AudioPlayerContext";
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
  const {
    isPlaying,
    activePlaylistId,
    currentTrack,
  } = useAudioPlayer();

  const isActivePlaylist = activePlaylistId === index;
  const hasSelectedTrack = isActivePlaylist && currentTrack;

  return (
    <div className="bg-white rounded-2xl shadow p-8">
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

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </div>

      {/* ACCORDION BODY */}
      <div
        className={`grid transition-all duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden space-y-6">
          {/* COVER */}
          <div className="rounded-xl overflow-hidden ">
            <img
              src={coverImg}
              alt="playlist cover"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* PLAYER / STATS */}
          <div className="bg-white">
            {/* STATS (no track selected yet) */}
            {isActivePlaylist && !currentTrack && (
              <div className="flex justify-between text-center py-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">{tracks.length}</p>
                  <p className="text-xs text-gray-400">Tracks</p>
                </div>
                <div>
                  <p className="font-semibold">~1h</p>
                  <p className="text-xs text-gray-400">Duration</p>
                </div>
                <div>
                  <p className="font-semibold">100%</p>
                  <p className="text-xs text-gray-400">Your vibe</p>
                </div>
              </div>
            )}

            {/* PLAYER (track selected, play or pause doesn’t matter) */}
            {hasSelectedTrack && <PlaylistPlayer />}
          </div>

          {/* TRACK LIST */}
          <div className="mt-4 space-y-4">
            {tracks.map((track) => (
              <TrackRow
                key={track.id}
                track={track}
                playlist={tracks}
                playlistId={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
