import { useAudioPlayer } from "../../../context/AudioPlayerContext";

export default function AudioPlayerBar() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
  } = useAudioPlayer();

  // nothing selected yet
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-3 flex items-center justify-between z-50">
      {/* TRACK INFO */}
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">
          {currentTrack.title}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {currentTrack.artist}
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-4">
        <button
          onClick={playPrev}
          className="text-lg hover:scale-110 transition"
        >
          ⏮
        </button>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button
          onClick={playNext}
          className="text-lg hover:scale-110 transition"
        >
          ⏭
        </button>
      </div>
    </div>
  );
}
