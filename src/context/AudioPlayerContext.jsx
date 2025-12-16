import { createContext, useContext, useRef, useState } from "react";

const AudioPlayerContext = createContext();

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track, list) => {
    if (!track) return;

    setPlaylist(list);
    setCurrentTrack(track);

    const index = list.findIndex(t => t.id === track.id);
    setCurrentIndex(index);

    audioRef.current.src = track.src;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!currentTrack) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (!playlist.length) return;
    const next = (currentIndex + 1) % playlist.length;
    playTrack(playlist[next], playlist);
  };

  const playPrev = () => {
    if (!playlist.length) return;
    const prev = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    playTrack(playlist[prev], playlist);
  };

  return (
    <AudioPlayerContext.Provider
      value={{ currentTrack, isPlaying, playTrack, togglePlay, playNext, playPrev }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export const useAudioPlayer = () => useContext(AudioPlayerContext);
