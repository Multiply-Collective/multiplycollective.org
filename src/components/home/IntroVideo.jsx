import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export default function IntroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const value = Number(e.target.value);
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
  };

  const formatTime = (seconds) => {
    if (!seconds || !isFinite(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleLoaded = () => setDuration(video.duration);
    video.addEventListener('loadedmetadata', handleLoaded);
    return () => video.removeEventListener('loadedmetadata', handleLoaded);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-center mb-12"
    >
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden ring-1 ring-sanctuary/15 bg-sanctuary/5 group">
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover cursor-pointer"
          src="https://media.base44.com/videos/public/69f91c5d31dad328146ca459/ab912925a_MultiplyCollectiveIntro.mp4"
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          playsInline
          preload="metadata"
        />

        {/* Play / Pause control */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
        >
          <span className="w-16 h-16 rounded-full bg-blue flex items-center justify-center shadow-lg pointer-events-auto">
            {isPlaying
              ? <Pause className="w-7 h-7 text-white fill-white" />
              : <Play className="w-7 h-7 text-white fill-white ml-1" />}
          </span>
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="text-white/90 hover:text-white transition-colors flex-shrink-0"
            >
              {isPlaying
                ? <Pause className="w-5 h-5 fill-white" />
                : <Play className="w-5 h-5 fill-white" />}
            </button>
            <span className="text-xs font-body text-white/70 tabular-nums flex-shrink-0">
              {formatTime(videoRef.current?.currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleSeek}
              aria-label="Video progress"
              className="w-full h-1.5 appearance-none bg-white/25 rounded-full cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3
                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
              style={{
                background: `linear-gradient(to right, hsl(214, 84%, 46%) ${progress}%, rgba(255,255,255,0.25) ${progress}%)`
              }}
            />
            <span className="text-xs font-body text-white/70 tabular-nums flex-shrink-0">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}