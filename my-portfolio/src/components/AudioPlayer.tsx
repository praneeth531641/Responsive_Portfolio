import { useState, useRef, useEffect } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        // Autoplay failed, user must interact
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio Element - Using a free royalty-free background music */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      {/* Floating Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 animate-bounce"
        title={isPlaying ? "Mute Music" : "Play Music"}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <FaMusic className="text-lg animate-pulse" />
        ) : (
          <FaVolumeMute className="text-lg" />
        )}
      </button>
    </>
  );
}
