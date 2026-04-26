import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getGuestPlaylistApi } from "../../api/playlistApi";
import { useAuth } from "../../context/AuthContext";

import PlaylistAccordion from "./components/PlaylistAccordion";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";
import TrustBar from "../../components/TrustBar";
import HowItWorks from "../../components/HowItWorks";
import AwardsSection from "../../components/AwardsSection";
import PlaylistVideoCTA from "./components/PlaylistVideoCTA";
import toast from "react-hot-toast";

export default function PlaylistResult() {
  const [playlistData, setPlaylistData] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
  if (!id) {
    toast.error("Invalid playlist ID");
    return;
  }

  const fetchPlaylistData = async () => {
    try {
      const response = await getGuestPlaylistApi(id);

      const data = response.data?.data;

      if (!data) {
        toast.info("No playlist found");
      } else {
        toast.success("Playlist loaded successfully");
      }

      setPlaylistData([data]);
    } catch (error) {

      toast.error(
        error?.response?.data?.message ||
          "Failed to load playlist. Please try again."
      );
    }
  };

  fetchPlaylistData();
}, [id]);

  return (
    <div>
      <div className="min-h-screen pb-15">
        <div className="max-w-3xl mx-auto px-4 sm:px-4">
          <div className="flex justify-center mb-5">
            <span className="px-6 py-3 text-xs sm:text-sm rounded-full bg-white border border-purple-300 shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          <h1 className="pb-2 sm:text-4xl lg:text-5xl font-semibold text-center capitalize">
            {(() => {
              const name = (user?.name || playlistData?.[0]?.name)?.split(' ')?.[0];
              return name ? `${name}'s Playlist is ready` : "Your Playlist is ready";
            })()}
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            {playlistData?.[0]?.description ||
              "A personalised playlist crafted just for your event."}
          </p>

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

          <PlaylistAccordion playlistData={playlistData} />
          <PlaylistVideoCTA />
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
