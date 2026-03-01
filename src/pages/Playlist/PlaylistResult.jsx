import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaylistAccordion from "./components/PlaylistAccordion";
import PlaylistToggle from "./components/PlaylistToggle";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

import { getGuestPlaylistApi } from "../../api/playlistApi";

export default function PlaylistResult() {
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistMode, setPlaylistMode] = useState("free");
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchPlaylistData = async () => {
      try {
        const response = await getGuestPlaylistApi(id);
        const data = response.data?.data || [];

        const formattedData = Array.isArray(data) ? data : [data];

        setPlaylistData(formattedData);

        const hasPremium = formattedData.some(
          (playlist) =>
            playlist.playlist_type?.toLowerCase() === "premium"
        );

        setPlaylistMode(hasPremium ? "premium" : "free");
      } catch (error) {
        console.error("Guest playlist fetch error:", error);
      }
    };

    fetchPlaylistData();
  }, [id]);

  const hasPremium = playlistData.some(
    (playlist) =>
      playlist.playlist_type?.toLowerCase() === "premium"
  );

  const filteredPlaylists = playlistData.filter(
    (playlist) =>
      playlist.playlist_type?.toLowerCase() === playlistMode
  );

  return (
    <div>
      <div className="min-h-screen pb-15">
        <div className="max-w-3xl mx-auto px-4 sm:px-4">

          <div className="flex justify-center mb-2">
            <span className="px-6 py-3 text-xs sm:text-sm rounded-full bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          <h1 className="pb-2 sm:text-4xl lg:text-5xl font-semibold text-center">
            {playlistData[0]?.title || "Your Custom Playlist"}
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            {playlistData[0]?.description ||
              "A personalised playlist crafted just for your event."}
          </p>

          <PlaylistToggle
            playlistMode={playlistMode}
            setPlaylistMode={setPlaylistMode}
            hasPremium={hasPremium}
          />

          <PlaylistAccordion playlistData={filteredPlaylists} />

        </div>
      </div>

      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}