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
        title: "Just Like Heaven",
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
    title: "Your Playlist",
    subtitle: "Here's the soundtrack crafted just for your event.",
    tracks: [
      {
        id: 1,
        title: "Perfect",
        artist: "Ed Sheeran",
        src: "/demo/audio1.mp3",
      },
      {
        id: 2,
        title: "All of Me",
        artist: "John Legend",
        src: "/demo/audio1.mp3",
      },
      {
        id: 3,
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        src: "/demo/audio1.mp3",
      },
    ],
  },
];

export default function PlaylistAccordion() {
  // 🔥 First playlist open by default
  const [activeIndex, setActiveIndex] = useState(0);
  const { playTrack } = useAudioPlayer();

  // 🔥 Auto-play first track when playlist opens
  useEffect(() => {
    const playlist = playlists[activeIndex];
    if (!playlist || !playlist.tracks.length) return;

    playTrack(
      playlist.tracks[0], // first track
      playlist.tracks,    // full playlist
      activeIndex + 1     // playlist id
    );
  }, [activeIndex, playTrack]);

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
