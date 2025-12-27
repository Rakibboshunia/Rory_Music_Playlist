import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Global shared sections
import PlaylistAccordion from "./components/PlaylistAccordion";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";


export default function PlaylistResult() {
  const [playlistData, setPlaylistData] = useState(null);
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) return;

    const fetchUserPlaylists = async () => {
      try {
        const response = await axios(
          `${import.meta.env.VITE_BACKEND_URL}/playlists/user/playlist`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPlaylistData(response.data?.data);
      } catch (error) {
        console.error("User playlist fetch error:", error);
      }
    };

    fetchUserPlaylists();
  }, [token]);

  return (
    <div>
      {/* ===== PLAYLIST AREA ===== */}
      <div className="min-h-screen pt-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-5">
            <span className="px-8 py-2 text-xs sm:text-sm rounded-full bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          <h1 className="text-[400] sm:text-4xl lg:text-5xl font-semibold text-center">
            {playlistData?.[0]?.title || "Your Custom Playlist"}
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            {playlistData?.[0]?.description ||
              "A personalised playlist crafted just for your event."}
          </p>

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

          <PlaylistAccordion playlistData={playlistData} />
        </div>
      </div>

      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
