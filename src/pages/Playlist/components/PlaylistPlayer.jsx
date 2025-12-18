import { SkipBack, SkipForward, Play } from "lucide-react";

export default function PlaylistPlayer() {
  return (
    <div className="px-5 py-5 border-t opacity-50">
      <div className="flex items-center justify-center gap-10">
        <SkipBack size={25} />
        <div className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center">
          <Play size={20} />
        </div>
        <SkipForward size={25} />
      </div>

      <div className="mt-3">
        <div className="h-1 w-full bg-gray-200 rounded-full" />
      </div>

      <p className="text-xs text-center text-gray-400 mt-2">
        Playback happens on Spotify
      </p>
    </div>
  );
}
