<<<<<<< HEAD
import React from "react";
import PlaylistAccordion from "./components/PlaylistAccordion";
import AudioPlayerBar from "./components/AudioPlayerBar";

// 🔽 existing Home components reuse (NO new file)
import TestimonialsSection from "../Home/components/TestimonialsSection";
import CTASection from "../Home/components/CTASection";
import AwardsSection from "../Home/components/AwardsSection";

export default function PlaylistResult() {
  return (
    <div className="bg-gradient-to-b from-[#F6F8FF] to-[#FBF6FF]">

      {/* ===== PLAYLIST AREA ===== */}
      <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* TOP BADGE */}
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1 text-sm rounded-full bg-white shadow">
              ✨ Your personalised soundtrack is ready
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-semibold text-center">
            Classic Romance Collection
          </h1>

          <p className="mt-3 text-center text-gray-500 text-sm">
            A sophisticated blend of timeless classics and elegant melodies.
            Perfect for creating those unforgettable moments.
          </p>

          {/* HEADER ROW */}
          <div className="flex items-center justify-between mt-10 mb-4">
            <div>
              <h3 className="font-medium">Your Play list</h3>
              <p className="text-xs text-gray-500">
                Here's the soundtrack crafted just for your event.
              </p>
            </div>

            <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              + Create Play list
            </button>
          </div>

          {/* ACCORDION */}
          <PlaylistAccordion />

          {/* AUDIO PLAYER (GLOBAL) */}
          <AudioPlayerBar />
        </div>
      </div>

      {/* ===== AWARDS (ADDED) ===== */}
      <section className="mt-24">
        <AwardsSection />
      </section>

      {/* ===== TESTIMONIALS (ADDED) ===== */}
      <section className="mt-24">
        <TestimonialsSection />
      </section>

      {/* ===== CTA (ADDED) ===== */}
      <section className="mt-20 pb-24">
        <CTASection />
      </section>

=======
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
>>>>>>> bac388b0c04d6916b3aedcfb87cfabc05b1cf7ec
    </div>
  );
}
