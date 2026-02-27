import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PlaylistAccordion from "./components/PlaylistAccordion";
import PlaylistToggle from "./components/PlaylistToggle"; 

import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

export default function PlaylistResult() {
  const [playlistData, setPlaylistData] = useState(null);
  const [playlistMode, setPlaylistMode] = useState("free");
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchPlaylistData = async () => {
      try {
        const response = await axios(
          `${import.meta.env.VITE_BACKEND_URL}/playlists/guest/playlist/${id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = response.data?.data;

        setPlaylistData([data]);

      } catch (error) {
        console.error("Guest playlist fetch error:", error);
      }
    };

    fetchPlaylistData();
  }, [id]);

  const hasPremium = true;

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
            {playlistData?.[0]?.title || "Your Custom Playlist"}
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            {playlistData?.[0]?.description ||
              "A personalised playlist crafted just for your event."}
          </p>

          <PlaylistToggle
            playlistMode={playlistMode}
            setPlaylistMode={setPlaylistMode}
            hasPremium={hasPremium}
          />

          <div className="flex items-center justify-between mt-8 mb-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">
                Your Playlist
              </h3>
              <p className="text-xs text-gray-500">
                Here's the soundtrack crafted just for your event.
              </p>
            </div>
          </div>

          <PlaylistAccordion
            playlistData={
              playlistData?.filter(
                (playlist) => playlist.playlist_type === playlistMode
              )
            }
          />

        </div>
      </div>

      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}