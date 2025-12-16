<<<<<<< HEAD
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
=======
export default function AudioPlayerBar({ track }) {
  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-4 flex items-center gap-4 z-50">
      <img
        src={track.cover}
        className="w-12 h-12 rounded-lg"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">
          {track.title}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {track.artist}
        </p>
      </div>

      <audio controls className="w-64">
        <source src={track.audio} type="audio/mpeg" />
      </audio>
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
    </div>
  );
}
