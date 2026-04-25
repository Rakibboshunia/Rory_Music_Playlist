import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import coverImg from "../../../assets/img/playlist.png";
import PlaylistPlayer from "./PlaylistPlayer";
import TrackRow from "./TrackRow";
import PremiumPdfCard from "./PremiumPdfCard";
import toast from "react-hot-toast";

import { upgradePlaylistApi } from "../../../api/playlistApi";
import Spinner from "../../../components/Spinner";

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
  const navigate = useNavigate();

  const [upgradeLoading, setUpgradeLoading] = useState(false);

  const handleUpgrade = (e) => {
    e.stopPropagation();

    // Guest → redirect to login
    if (!user) {
      toast("Please login first");
      navigate("/login");
      return;
    }

    if (!quizId || !_id) {
      return;
    }

    upgradeHandler();
  };

  const upgradeHandler = async () => {
    try {
      setUpgradeLoading(true);

      toast.loading("Processing upgrade...");

      const res = await upgradePlaylistApi({
        quizId,
        playlistId: _id,
      });

      const checkoutUrl =
        res?.data?.data?.checkoutUrl || res?.data?.message?.checkoutUrl;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("Checkout URL not found");
        toast.error("Failed to process payment link. Please try again.");
      }
    } catch (err) {
      console.error("Upgrade error:", err?.response?.data || err);
      toast.error(err?.response?.data?.message || "Failed to upgrade playlist.");
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
          {playlist_type?.toLowerCase() !== "premium" && (
            <button
              onClick={handleUpgrade}
              disabled={upgradeLoading}
              className="px-4 py-2 text-sm bg-white border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition flex items-center justify-center min-w-[170px] disabled:opacity-50 cursor-pointer"
            >
              {upgradeLoading ? (
                <Spinner size="xs" color="purple" />
              ) : user ? (
                "Upgrade to Premium"
              ) : (
                "Login to Upgrade"
              )}
            </button>
          )}

          <button
            onClick={onToggle}
            className={`transition-transform cursor-pointer ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FiChevronDown size={25} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div>
          <img
            src={coverImg}
            alt="playlist cover"
            className="w-full rounded-xl"
          />

          <PlaylistPlayer spotifyUrl={spotifyUrl} />

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