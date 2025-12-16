import { useState, useEffect } from "react";
import { useAudioPlayer } from "../../../context/AudioPlayerContext";
import PlaylistCard from "./PlaylistCard";

const playlists = [
  {
    title: "Electric Party Mix",
    subtitle: "Upbeat party anthems to ignite the dance floor.",
    tracks: [
      {
        id: 1,
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        src: "/demo/audio1.mp3",
      },
      {
        id: 2,
        title: "At Last",
        artist: "Etta James",
        src: "/demo/audio2.mp3",
      },
      {
        id: 3,
        title: "Just like Heaven",
        artist: "Smithereens",
        src: "/demo/audio2.mp3",
      },
    ],
  },
  {
    title: "Golden Dance Night",
    subtitle: "Smooth tracks for elegant evenings.",
    tracks: [
      {
        id: 1,
        title: "Fly Me to the Moon",
        artist: "Frank Sinatra",
        src: "/demo/audio1.mp3",
      },
      {
        id: 2,
        title: "The Way You Look Tonight",
        artist: "Frank Sinatra",
        src: "/demo/audio1.mp3",
      },
      {
        id: 3,
        title: "Come Fly with Me",
        artist: "Frank Sinatra",
        src: "/demo/audio1.mp3",
      },
    ],
  },
  {
    title: "Romantic Sax Vibes",
    subtitle: "Soft sax melodies for intimate moments.",
    tracks: [
      {
        id: 1,
        title: "Careless Whisper",
        artist: "George Michael",
        src: "/demo/audio1.mp3",
      },
      {
        id: 2,
        title: "Last Christmas",
        artist: "Wham!",
        src: "/demo/audio1.mp3",
      },
      {
        id: 3,
        title: "Faith",
        artist: "George Michael",
        src: "/demo/audio1.mp3",
      },
    ],
  },
  {
    title: "Your Play list",
    subtitle: "Here's the soundtrack crafted just for your event.",
    tracks: [
      {
        id: 1,
        title: "Careless Whisper",
        artist: "George Michael",
        src: "/demo/audio1.mp3",
      },
      {
        id: 2,
        title: "Last Christmas",
        artist: "Wham!",
        src: "/demo/audio1.mp3",
      },
      {
        id: 3,
        title: "Faith",
        artist: "George Michael",
        src: "/demo/audio1.mp3",
      },
    ],
  },
];

export default function PlaylistAccordion() {
  // 🔥 1st playlist open by default
  const [activeIndex, setActiveIndex] = useState(0);
  const { playTrack } = useAudioPlayer();

  // 🔥 AUTO-PLAY first track when playlist opens
  useEffect(() => {
    const playlist = playlists[activeIndex];
    if (!playlist || !playlist.tracks.length) return;

    playTrack(
      playlist.tracks[0],   // first track
      playlist.tracks,      // full playlist
      activeIndex + 1       // playlistId (matches PlaylistCard index)
    );
  }, [activeIndex, playTrack]);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="space-y-4">
      {playlists.map((list, i) => (
        <PlaylistCard
          key={i}
          index={i + 1}
          title={list.title}
          subtitle={list.subtitle}
          tracks={list.tracks}
          isOpen={activeIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
