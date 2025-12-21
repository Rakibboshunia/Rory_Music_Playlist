import { Play } from "lucide-react";

export default function TrackRow({ track, spotifyUrl }) {
  const handlePlay = () => {
    if (!track.spotifyUrl) return;
    window.open(track.spotifyUrl, "_blank");
  };

  return (
    <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
      <div 
      className="
      flex items-center 
      justify-between 
      px-4 py-3 mb-4
      rounded-lg 
      bg-[#F7F8FF] hover:bg-[#EEF0FF] 
      transition 
      cursor-pointer
      ">
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{track.song}</p>
          <p className="text-xs text-gray-500 truncate">{track.artist}</p>
        </div>

        <button
          onClick={handlePlay}
          title="Play on Spotify"
          className="w-8 h-8 rounded bg-green-600 text-white flex items-center justify-center hover:bg-green-700"
        >
          <Play size={18} />
        </button>
      </div>
    </a>
  );
}
