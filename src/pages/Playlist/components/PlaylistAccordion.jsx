<<<<<<< HEAD
import React, { useState } from "react";
import PlaylistCard from "./PlaylistCard";

const playlists = [
  {
    id: 1,
    title: "Electric Party Mix",
    subtitle: "Upbeat party anthems to ignite the dance floor.",
  },
  {
    id: 2,
    title: "Golden Dance Night",
    subtitle: "Smooth rhythms crafted just for your event.",
  },
  {
    id: 3,
    title: "Romantic Sax Vibes",
    subtitle: "Elegant sax melodies for intimate moments.",
  },
  {
    id: 4,
    title: "Your Play list",
    subtitle: "Here's the soundtrack crafted just for your event.",
  },
];

export default function PlaylistAccordion() {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="space-y-5">
      {playlists.map((item, index) => (
        <PlaylistCard
          key={item.id}
          index={index + 1}
          data={item}
          open={openId === item.id}
          onToggle={() =>
            setOpenId(openId === item.id ? null : item.id)
          }
        />
      ))}
=======
import PlaylistCard from "./PlaylistCard";
import TrackRow from "./TrackRow";

export default function PlaylistAccordion({
  playlist,
  isActive,
  onToggle,
  onPlayTrack,
}) {
  return (
    <div className="bg-white rounded-2xl shadow">
      <PlaylistCard
        playlist={playlist}
        isActive={isActive}
        onToggle={onToggle}
      />

      {isActive && (
        <div
          className={`px-6 pb-6 ${
            playlist.locked
              ? "opacity-40 blur-sm pointer-events-none"
              : ""
          }`}
        >
          {playlist.tracks.map((track, i) => (
            <TrackRow
              key={i}
              track={track}
              onPlay={() => onPlayTrack(track)}
            />
          ))}
        </div>
      )}
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
    </div>
  );
}
