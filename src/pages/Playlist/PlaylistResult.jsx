import { useState } from "react";
import { useQuiz } from "../../context/QuizContext";
import PlaylistAccordion from "./components/PlaylistAccordion";
import AudioPlayerBar from "./components/AudioPlayerBar";

// 🔊 TEMP DEMO TRACKS (API replace later)
const demoTracks = [
  {
    id: 1,
    title: "At Last",
    artist: "Etta James",
    cover: "/demo-cover.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    cover: "/demo-cover.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Wonderful Tonight",
    artist: "Eric Clapton",
    cover: "/demo-cover.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Perfect",
    artist: "Ed Sheeran",
    cover: "/demo-cover.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    title: "All of Me",
    artist: "John Legend",
    cover: "/demo-cover.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

export default function PlaylistResult() {
  const { answers } = useQuiz();

  // 🔐 TEMP (future AuthContext)
  const isGuest = true;

  const [activePlaylist, setActivePlaylist] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  // 🎵 DEMO DATA (API-ready)
  const playlists = [
    {
      id: 1,
      title: "Classic Romance",
      subtitle: `Generated for your ${answers.eventType || "event"}`,
      locked: false,
      tracks: demoTracks.slice(0, 15),
    },
    {
      id: 2,
      title: "Luxury Evening",
      subtitle: "Upgrade to unlock full playlist",
      locked: isGuest,
      tracks: demoTracks,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-32 px-6 pb-40">
      <h1 className="text-3xl font-bold mb-2">
        Your Personalised Playlist
      </h1>

      <p className="text-gray-500 mb-8">
        Built from your quiz answers
      </p>

      {/* ACCORDIONS */}
      <div className="space-y-6">
        {playlists.map((pl) => (
          <PlaylistAccordion
            key={pl.id}
            playlist={pl}
            isActive={activePlaylist === pl.id}
            onToggle={() =>
              setActivePlaylist(
                activePlaylist === pl.id ? null : pl.id
              )
            }
            onPlayTrack={setCurrentTrack}
          />
        ))}
      </div>

      {/* 🎧 GLOBAL AUDIO BAR */}
      <AudioPlayerBar track={currentTrack} />
    </div>
  );
}
