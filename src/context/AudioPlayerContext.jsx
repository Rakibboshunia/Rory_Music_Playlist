import { createContext, useContext, useRef, useState } from "react";

const AudioPlayerContext = createContext(null);

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  // ✅ STATES
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false); // 🔥 MISSING LINE
  const [activePlaylistId, setActivePlaylistId] = useState(null);

  // ▶ PLAY TRACK
  const playTrack = (track, list = [], playlistId) => {
    if (!track) return;

    setPlaylist(list);
    setCurrentTrack(track);
    setActivePlaylistId(playlistId);

    const index = list.findIndex((t) => t.id === track.id);
    setCurrentIndex(index);

    audioRef.current.src = track.src;
    audioRef.current.play();
    setIsPlaying(true);
  };

  // ⏯ TOGGLE PLAY
  const togglePlay = () => {
    if (!currentTrack) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // ⏭ NEXT
  const playNext = () => {
    if (!playlist.length) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    playTrack(playlist[nextIndex], playlist, activePlaylistId);
  };

  // ⏮ PREV
  const playPrev = () => {
    if (!playlist.length) return;

    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;

    playTrack(playlist[prevIndex], playlist, activePlaylistId);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        activePlaylistId,
        playTrack,
        togglePlay,
        playNext,
        playPrev,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export const useAudioPlayer = () => useContext(AudioPlayerContext);
