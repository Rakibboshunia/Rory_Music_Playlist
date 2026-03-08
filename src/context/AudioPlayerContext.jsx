import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

const AudioPlayerContext = createContext(null);

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePlaylistId, setActivePlaylistId] = useState(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playTrack = (track, list = [], playlistId) => {
    if (!track) return;

    if (currentTrack?.id === track.id) {
      return; 
    }


    const safeList = Array.isArray(list) ? list : [];
    const index = safeList.findIndex((t) => t.id === track.id);

    setPlaylist(safeList);
    setCurrentTrack(track);
    setActivePlaylistId(playlistId);
    setCurrentIndex(index >= 0 ? index : 0);

    audioRef.current.src = track.src;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const setTrackOnly = (track, list = [], playlistId) => {
    if (!track) return;

    const safeList = Array.isArray(list) ? list : [];
    const index = safeList.findIndex((t) => t.id === track.id);

    setPlaylist(safeList);
    setCurrentTrack(track);
    setActivePlaylistId(playlistId);
    setCurrentIndex(index >= 0 ? index : 0);

    audioRef.current.src = track.src;
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
  };

  const togglePlay = () => {
    if (!currentTrack) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const playNext = () => {
    if (!playlist.length) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    playTrack(playlist[nextIndex], playlist, activePlaylistId);
  };

  const playPrev = () => {
    if (!playlist.length) return;

    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;

    playTrack(playlist[prevIndex], playlist, activePlaylistId);
  };


  useEffect(() => {
    const audio = audioRef.current;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const onEnded = () => {
      playNext();
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [playlist, currentIndex]);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        activePlaylistId,
        currentTime,
        duration,
        playTrack,
        setTrackOnly,
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
