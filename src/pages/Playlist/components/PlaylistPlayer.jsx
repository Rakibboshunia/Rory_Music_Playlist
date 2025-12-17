import { useAudioPlayer } from "../../../context/AudioPlayerContext";
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
} from "lucide-react";

export default function PlaylistPlayer() {
  const {
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
    currentTime,
    duration,
  } = useAudioPlayer();

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="px-5  py-5 border-t">
      {/* CONTROLS */}
      <div className="flex items-center justify-center gap-10">
        <button onClick={playPrev} className="text-gray-500">
          <SkipBack size={25} />
        </button>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow"
        >
          {isPlaying ? <Pause size={25} /> : <Play size={25} />}
        </button>

        <button onClick={playNext} className="text-gray-500">
          <SkipForward size={25} />
        </button>
      </div>

      {/* REAL PROGRESS */}
      <div className="mt-3">
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
