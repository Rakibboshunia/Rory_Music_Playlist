import { useState } from "react";
import PlaylistCard from "./PlaylistCard";

const playlists = [
  {
    title: "Electric Party Mix",
    subtitle: "Upbeat party anthems to ignite the dance floor.",
    tracks: [
      {
        id: "7qEHsqek333rTcFNT9PFqLf",
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        spotifyUrl: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf",
      },
      {
        id: "1G391cbi1T3v3Cywg8T7DM1",
        title: "At Last",
        artist: "Etta James",
        spotifyUrl: "https://open.spotify.com/track/1G391cbiT3v3Cywg8T7DM1",
      },

      {
        id: "278033193451",
        title: "All of Me",
        artist: "John Legend",
        spotifyUrl: "https://open.spotify.com/track/2781019345",
      },
    ],
  },
  {
    title: "Golden Dance Night",
    subtitle: "Smooth tracks for elegant evenings.",
    tracks: [
      {
        id: "5IfBLN9VPPJOwcKmAZhdXe",
        title: "Fly Me to the Moon",
        artist: "Frank Sinatra",
        spotifyUrl: "https://open.spotify.com/track/5IfBLN9VPPJOwcKmAZhdXe",
      },

      {
        id: "2718019345",
        title: "All of Me",
        artist: "John Legend",
        spotifyUrl: "https://open.spotify.com/track/27801911345",
      },
    ],
  },
  {
    title: "Romantic Evening Vibes",
    subtitle: "Soft tunes for intimate moments.",
    tracks: [
      {
        id: "27801933445",
        title: "All of Me",
        artist: "John Legend",
        spotifyUrl: "https://open.spotify.com/track/278101911345",
      },

      {
        id: "27180179345",
        title: "All of Me",
        artist: "John Legend",
        spotifyUrl: "https://open.spotify.com/track/278019123345",
      },

    ],
  },
  {
    title: "Classic Love Songs",
    subtitle: "Timeless ballads that define romance.",
    tracks: [
      {
        id: "12780319345",
        title: "All of Me",
        artist: "John Legend",
        spotifyUrl: "https://open.spotify.com/track/27458019345",
      },

      {
        id: "27801961345",
        title: "All of Me",
        artist: "John Legend",
        spotifyUrl: "https://open.spotify.com/track/2780194212345",
      },
    ],
  },
];

export default function PlaylistAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {playlists.map((playlist, index) => (
        <PlaylistCard
          key={index}
          index={index + 1}
          title={playlist.title}
          subtitle={playlist.subtitle}
          tracks={playlist.tracks}
          isOpen={activeIndex === index}
          onToggle={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
