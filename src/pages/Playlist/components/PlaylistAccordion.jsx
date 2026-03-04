import { useState } from "react";
import PlaylistCard from "./PlaylistCard";

export default function PlaylistAccordion({ playlistData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log("all playlist", playlistData);

  return (
    <div className="space-y-4">
      {playlistData &&
        playlistData.map((playlist, index) => (
          <PlaylistCard
            key={playlist._id}
            _id={playlist._id}
            quizId={playlist.quizId}
            title={playlist.title}
            subtitle={playlist.description}
            tracks={playlist.tracks}
            isOpen={activeIndex === index}
            spotifyUrl={playlist.spotify_url}
            playlist_type={playlist.playlist_type}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
    </div>
  );
}
