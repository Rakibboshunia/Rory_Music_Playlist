import { useAudioPlayer } from "../../../context/AudioPlayerContext";

export default function AudioPlayerBar() {
  const { currentTrack, isPlaying, togglePlay, playNext, playPrev } =
    useAudioPlayer();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow px-6 py-3 flex justify-between z-50">
      <div>
        <p className="text-sm font-medium">{currentTrack.title}</p>
        <p className="text-xs text-gray-500">{currentTrack.artist}</p>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={playPrev}>⏮</button>
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-blue-600 text-white"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={playNext}>⏭</button>
      </div>
    </div>
  );
}
