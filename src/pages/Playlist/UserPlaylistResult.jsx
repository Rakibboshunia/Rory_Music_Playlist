import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaylistAccordion from "./components/PlaylistAccordion";
import PlaylistToggle from "./components/PlaylistToggle";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

import { getUserPlaylistsApi } from "../../api/playlistApi";
import TrustBar from "../../components/TrustBar";
import HowItWorks from "../../components/HowItWorks";
import PlaylistVideoCTA from "./components/PlaylistVideoCTA";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader";

export default function PlaylistResult() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [playlistData, setPlaylistData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playlistMode, setPlaylistMode] = useState("free");

  useEffect(() => {
    setActiveIndex(0);
  }, [playlistMode]);

  useEffect(() => {
    if (authLoading) return;
    const fetchUserPlaylists = async () => {
      try {
        const response = await getUserPlaylistsApi();
        const data = response?.data?.data || [];
        setPlaylistData(data);

        const hasPremium = data.some(
          (playlist) =>
            playlist.playlist_type &&
            playlist.playlist_type.toLowerCase() !== "default",
        );

        if (hasPremium) {
          setPlaylistMode("premium");
        }
      } catch (error) {
        console.error("Failed to load playlists", error);
      }
    };

    fetchUserPlaylists();
  }, [authLoading]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader size="lg" />
      </div>
    );
  }

  const hasPremium = playlistData.some(
    (playlist) =>
      playlist.playlist_type &&
      playlist.playlist_type.toLowerCase() !== "default",
  );

  const filteredPlaylists = playlistData.filter((playlist) => {
    const type = playlist.playlist_type?.toLowerCase();

    if (playlistMode === "free") {
      return type === "default";
    } else {
      return type !== "default";
    }
  });

  return (
    <div>
      <div className="min-h-screen pb-15">
        <div className="max-w-3xl mx-auto px-4 sm:px-4">
          <div className="flex justify-center mb-2">
            <span className="px-6 py-3 text-xs sm:text-sm rounded-full border border-purple-300 bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          <h1 className="pb-2 sm:text-4xl lg:text-5xl font-semibold text-center capitalize">
            {(() => {
              const currentPlaylist = filteredPlaylists?.[activeIndex] || filteredPlaylists?.[0];
              const name = (user?.name || currentPlaylist?.name || currentPlaylist?.user)?.split(" ")[0];
              const title = currentPlaylist?.title;
              if (name && title) return `${name}'s ${title}`;
              return title || "Your Playlist is ready";
            })()}
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            {filteredPlaylists?.[activeIndex]?.description ||
              filteredPlaylists?.[0]?.description ||
              "A personalised playlist crafted just for your event."}
          </p>

          {user && (
            <PlaylistToggle
              playlistMode={playlistMode}
              setPlaylistMode={setPlaylistMode}
              hasPremium={hasPremium}
            />
          )}

          <div className="flex items-center justify-between mt-8 mb-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">
                Your Personalised Wedding Playlist
              </h3>
              <p className="text-xs text-gray-500">
                Built around your answers, this playlist is designed to match
                your vibe, suit your guests, and help create the kind of
                atmosphere that keeps the dance floor moving all night.
              </p>
            </div>
          </div>

          {filteredPlaylists.length > 0 ? (
            <>
              <PlaylistAccordion
                playlistData={filteredPlaylists}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                showUpgradeButton={playlistMode === "free"}
              />
              <PlaylistVideoCTA />
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                No Playlists Found
              </h2>
              <p className="text-gray-500 mb-8">
                Take the quiz to generate your personalised wedding soundtrack!
              </p>
              <button
                onClick={() => navigate("/quiz")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
              >
                Start Quiz
              </button>
            </div>
          )}
        </div>
      </div>

      <TrustBar />
        <HowItWorks />
          <AwardsSection />
        <TestimonialsSection />
      <CTASection />

    </div>
  );
}
