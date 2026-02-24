import PlaylistPlayer from "./PlaylistPlayer";
import TrackRow from "./TrackRow";
import coverImg from "../../../assets/img/playlist.png";
import { FiChevronDown } from "react-icons/fi";
import PremiumPdfCard from "./PremiumPdfCard";

export default function PlaylistCard({
  index,
  title,
  subtitle,
  tracks = [],
  isOpen,
  spotifyUrl,
  onToggle,
  playlist_type,
}) {

  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/your_stripe_payment_link";

  const handleUpgrade = (e) => {
    e.stopPropagation();
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div
        onClick={onToggle}
        className="mb-4 flex items-start justify-between cursor-pointer select-none"
      >
        <div>
          <p className="font-medium text-2xl pb-3 bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent duration-300 hover:opacity-80">
            {index}
            {title}
          </p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>

        <span
          className={`flex items-center gap-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >

          {playlist_type !== "premium" && (
            <button
              onClick={handleUpgrade}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition-all duration-200"
            >
              Upgrade to Premium
            </button>
          )}

          <FiChevronDown className="text-gray-500 text-xl" />
        </span>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <img
            src={coverImg}
            alt="playlist cover"
            className="w-full h-100 object-cover rounded-xl duration-300 hover:opacity-90 cursor-pointer"
          />

          <PlaylistPlayer />

          {playlist_type === "premium" && <PremiumPdfCard />}

          <div className="mt-4 space-y-6">
            {tracks.map((track, idx) => (
              <TrackRow key={idx + 1} track={track} spotifyUrl={spotifyUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}