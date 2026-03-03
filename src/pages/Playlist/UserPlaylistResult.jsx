import React, { useEffect, useState } from "react";
import PlaylistAccordion from "./components/PlaylistAccordion";
import PlaylistToggle from "./components/PlaylistToggle";
import AwardsSection from "../../components/AwardsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";

import { getUserPlaylistsApi } from "../../api/playlistApi";

export default function PlaylistResult() {
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistMode, setPlaylistMode] = useState("free");

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const response = await getUserPlaylistsApi();
        const data = response?.data?.data || [];

        console.log("All Playlists:", data);

        setPlaylistData(data);

        const hasPremium = data.some(
          (playlist) =>
            playlist.playlist_type &&
            playlist.playlist_type.toLowerCase() !== "default"
        );

        if (hasPremium) {
          setPlaylistMode("premium");
        }
      } catch (error) {
        console.error("User playlist fetch error:", error);
      }
    };

    fetchUserPlaylists();
  }, []);

  const hasPremium = playlistData.some(
    (playlist) =>
      playlist.playlist_type &&
      playlist.playlist_type.toLowerCase() !== "default"
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
            <span className="px-6 py-3 text-xs sm:text-sm rounded-full bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          <h1 className="pb-2 sm:text-4xl lg:text-5xl font-semibold text-center">
            {filteredPlaylists?.[0]?.title || "Your Custom Playlist"}
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
            {filteredPlaylists?.[0]?.description ||
              "A personalised playlist crafted just for your event."}
          </p>

          <PlaylistToggle
            playlistMode={playlistMode}
            setPlaylistMode={setPlaylistMode}
            hasPremium={hasPremium}
          />

          {filteredPlaylists.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4 capitalize">
                {playlistMode} Playlist
              </h2>

              <PlaylistAccordion
                playlistData={filteredPlaylists}
                showUpgradeButton={playlistMode === "free"}
              />
            </>
          )}
        </div>
      </div>

      <AwardsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}





// import React, { useEffect, useState } from "react";
// import PlaylistAccordion from "./components/PlaylistAccordion";
// import PlaylistToggle from "./components/PlaylistToggle";
// import AwardsSection from "../../components/AwardsSection";
// import TestimonialsSection from "../../components/TestimonialsSection";
// import CTASection from "../../components/CTASection";

// import { getUserPlaylistsApi } from "../../api/playlistApi";

// export default function PlaylistResult() {
//   const [playlistData, setPlaylistData] = useState([]);
//   const [playlistMode, setPlaylistMode] = useState("free");

//   useEffect(() => {
//     const fetchUserPlaylists = async () => {
//       try {
//         const response = await getUserPlaylistsApi();
//         const data = response.data?.data || [];
      
//         setPlaylistData(data);

//         // if premium exists, default show premium
//         const hasPremium = data.some(
//           (playlist) => playlist.playlist_type?.toLowerCase() === "premium",
//         );

//         if (hasPremium) {
//           setPlaylistMode("premium");
//         }
//       } catch (error) {
//         console.error("User playlist fetch error:", error);
//       }
//     };

//     fetchUserPlaylists();
//   }, []);

//   const hasPremium = playlistData.some(
//     (playlist) => playlist.playlist_type?.toLowerCase() === "premium",
//   );

//   const filteredPlaylists = playlistData.filter(
//     (playlist) => playlist.playlist_type?.toLowerCase() === playlistMode,
//   );

//   return (
//     <div>
//       <div className="min-h-screen pb-15">
//         <div className="max-w-3xl mx-auto px-4 sm:px-4">
//           <div className="flex justify-center mb-2">
//             <span className="px-6 py-3 text-xs sm:text-sm rounded-full bg-white shadow">
//               ✨ Your personalised soundtrack is ready
//             </span>
//           </div>

//           <h1 className="pb-2 sm:text-4xl lg:text-5xl font-semibold text-center">
//             {playlistData?.[0]?.title || "Your Custom Playlist"}
//           </h1>

//           <p className="mt-3 text-center text-gray-500 text-sm sm:text-base">
//             {playlistData?.[0]?.description ||
//               "A personalised playlist crafted just for your event."}
//           </p>

//           {/* 🔥 TOGGLE (Design unchanged component) */}
//           <PlaylistToggle
//             playlistMode={playlistMode}
//             setPlaylistMode={setPlaylistMode}
//             hasPremium={hasPremium}
//           />

//           {/* 🔥 SINGLE SECTION RENDER BASED ON TOGGLE */}
//           {filteredPlaylists.length > 0 && (
//             <>
//               <h2 className="text-2xl font-semibold mt-8 mb-4 capitalize">
//                 {playlistMode} Playlist
//               </h2>

//               <PlaylistAccordion
//                 playlistData={filteredPlaylists}
//                 showUpgradeButton={playlistMode === "free"}
//               />
//             </>
//           )}
//         </div>
//       </div>

//       <AwardsSection />
//       <TestimonialsSection />
//       <CTASection />
//     </div>
//   );
// }

