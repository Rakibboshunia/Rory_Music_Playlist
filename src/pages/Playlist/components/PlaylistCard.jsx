import { useState } from "react";
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
  const [upgradeLoading, setUpgradeLoading] = useState(false);

  const handleUpgrade = async (e) => {
    e.stopPropagation();

    if (!quizId || !_id) {
      console.error("Missing quizId or playlistId");
      return;
    }

    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      setUpgradeLoading(true);

      const res = await upgradePlaylistApi({
        quizId,
        playlistId: _id,
      });

      console.log("Stripe response:", res);

      const checkoutUrl =
        res?.data?.data?.checkoutUrl || res?.data?.message?.checkoutUrl;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("Checkout URL not found in response");
      }
    } catch (err) {
      console.error("Upgrade error:", err?.response?.data || err);
    } finally {
      setUpgradeLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="mb-4 flex items-start justify-between">
        <div onClick={onToggle} className="cursor-pointer flex-1">
          <p className="font-medium text-2xl">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-4">
          {user && playlist_type?.toLowerCase() !== "premium" && (
            <button
              onClick={handleUpgrade}
              disabled={upgradeLoading}
              className="px-4 py-2 text-sm bg-white border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition flex items-center justify-center min-w-[170px] disabled:opacity-50 cursor-pointer"
            >
              {upgradeLoading ? (
                <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                "Upgrade to Premium"
              )}
            </button>
          )}

          <button
            onClick={onToggle}
            className={`transition-transform cursor-pointer ${isOpen ? "rotate-180" : ""}`}
          >
            <FiChevronDown size={25} />
          </button>
        </div>
      </div>

      {/* BODY */}
      {isOpen && (
        <div>
          <img
            src={coverImg}
            alt="playlist cover"
            className="w-full rounded-xl"
          />

          <PlaylistPlayer spotifyUrl={spotifyUrl} />

          {/* Premium PDF */}
          {playlist_type?.toLowerCase() === "premium" && <PremiumPdfCard />}

          <div className="mt-4 space-y-4">
            {tracks?.map((track, idx) => (
              <TrackRow key={idx} track={track} spotifyUrl={spotifyUrl} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
