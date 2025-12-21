import { useState } from "react";
import PlaylistCard from "./PlaylistCard";

//const playlists = [
//   {
//     title: "Electric Party Mix",
//     subtitle: "Upbeat party anthems to ignite the dance floor.",
//     tracks: [
//       {
//         title: "Titanium (feat. Sia)",
//         artist: 'David Guetta',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: "I'm Not Alone - Radio Edit",
//         artist: 'Calvin Harris',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },

//       {
//         title: "Latch",
//         artist: 'Disclosure',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: "17",
//         artist: 'MK',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Imagination',
//         artist: 'Gorgon City',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Gecko (Overdrive) - Radio Edit',
//         artist: 'Oliver Heldens',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Ocean Drive',
//         artist: 'Duke Dumont',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Atlas',
//         artist: 'Lane 8',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Losing It',
//         artist: 'FISHER',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Disarm You (feat. Ilsey)',
//         artist: 'Kaskade',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'XTC',
//         artist: 'Solardo',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Cola',
//         artist: 'CamelPhat',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Deep End - SIDEPIECE Remix',
//         artist: 'John Summit',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Sugar (feat. Fransesco Yates)',
//         artist: 'Robin Schulz',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//       {
//         title: 'Say What',
//         artist: 'Rampa',
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//     ],
//   },
//   {
//     title: "Golden Dance Night",
//     subtitle: "Smooth tracks for elegant evenings.",
//     tracks: [
//       {
//         title: "Stop It",
//         artist: "FISHER",
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },

//       {
//         title: "Call On Me",
//         artist: "Eric Prydz",
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },
//     ],
//   },
//   {
//     title: "Romantic Evening Vibes",
//     subtitle: "Soft tunes for intimate moments.",
//     tracks: [
//       {
//         title: "On My Mind",
//         artist: "Diplo & SIDEPIECE",
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },

//       {
//         title: "I Got U",
//         artist: "Duke Dumont",
//         spotifyUrl: "https://open.spotify.com/playlist/6loKcrBx271COJ31FFYylN",
//       },

//     ],
//   },
// ];

export default function PlaylistAccordion({ playlistData }) {
  const [activeIndex, setActiveIndex] = useState(0);
console.log(playlistData)
  return (
    <div className="space-y-4">
      {playlistData && playlistData.map((playlist, index) => (
        <PlaylistCard
          key={index}
          title={playlist.title}
          subtitle={playlist.description}
          tracks={playlist.tracks}
          isOpen={activeIndex === index}
          spotifyUrl={playlist.spotify_url}
          onToggle={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
