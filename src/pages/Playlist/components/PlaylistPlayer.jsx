import { useAudioPlayer } from "../../../context/AudioPlayerContext";
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
} from "lucide-react";

export default function PlaylistPlayer() {
  const { isPlaying, togglePlay, playNext, playPrev } = useAudioPlayer();

  return (
    <div className="px-6 py-4 border-t">

      {/* CONTROLS */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={playPrev}
          className="text-gray-500 hover:text-gray-900"
        >
          <SkipBack size={18} />
        </button>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          onClick={playNext}
          className="text-gray-500 hover:text-gray-900"
        >
          <SkipForward size={18} />
        </button>
      </div>

      {/* PROGRESS (UI ONLY) */}
      <div className="mt-3">
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-[35%] bg-blue-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
