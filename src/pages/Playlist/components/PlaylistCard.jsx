import { FiChevronDown } from "react-icons/fi";
import { useAuth } from "../../../context/AuthContext";
import coverImg from "../../../assets/img/playlist.png";
import PlaylistPlayer from "./PlaylistPlayer";
import TrackRow from "./TrackRow";
import PremiumPdfCard from "./PremiumPdfCard";
import { upgradePlaylistApi } from "../../../api/playlistApi";

export default function PlaylistCard({
  title,
  subtitle,
  tracks = [],
  isOpen,
  spotifyUrl,
  onToggle,
  playlist_type,
  quizId,
  _id,
}) {

  const { user } = useAuth();

  const handleUpgrade = async (e) => {
    e.stopPropagation();

    try {
      const res = await upgradePlaylistApi({
        quizId,
        playlistId: _id,
      });

      const checkoutUrl = res?.data?.data?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (err) {
      console.error("Upgrade error:", err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      {/* Header Section */}
      <div className="mb-4 flex items-start justify-between">

        {/* Title Section */}
        <div onClick={onToggle} className="cursor-pointer flex-1">
          <p className="font-medium text-2xl">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">

          {/* Show only for FREE users */}
          {user?.role === "free" && playlist_type !== "premium" && (
            <button
              onClick={handleUpgrade}
              className="px-4 py-2 text-sm bg-white border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition"
            >
              Upgrade to Premium
            </button>
          )}

          {/* Toggle Arrow */}
          <button
            onClick={onToggle}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <FiChevronDown size={20} />
          </button>

        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div>
          <img
            src={coverImg}
            alt="playlist cover"
            className="w-full rounded-xl"
          />

          <PlaylistPlayer spotifyUrl={spotifyUrl} />

          {/* Premium Only PDF */}
          {playlist_type === "premium" && <PremiumPdfCard />}

          <div className="mt-4 space-y-4">
            {tracks.map((track, idx) => (
              <TrackRow key={idx} track={track} spotifyUrl={spotifyUrl} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}