import { useState } from "react";
import PlaylistCard from "./PlaylistCard";

export default function PlaylistAccordion({
  playlistData,
  activeIndex,
  setActiveIndex,
  urlName,
}) {
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
            name={urlName || playlist.name || playlist.guestName || playlist.quizId?.name || playlist.userId?.name || playlist.user_name || playlist.user?.name || playlist.user}
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
