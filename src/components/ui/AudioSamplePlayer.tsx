"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioSamplePlayerProps {
  src: string;
  title?: string;
  subtitle?: string;
  durationLabel?: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioSamplePlayer({
  src,
  title = "AI架電サンプル音声",
  subtitle = "受付突破からアポ取得までを実演",
  durationLabel,
}: AudioSamplePlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.error) {
      setIsAvailable(false);
    }

    const onTime = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };
    const onError = () => {
      setIsAvailable(false);
      setIsPlaying(false);
    };
    const onCanPlay = () => {
      setIsAvailable(true);
    };
    const onLoadedMetadata = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", onError);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setIsAvailable(false);
      })
      .catch(() => setIsAvailable(false));

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !isAvailable) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsAvailable(false);
      }
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl max-w-md">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          disabled={!isAvailable}
          aria-label={isPlaying ? "一時停止" : "再生"}
          className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            isAvailable
              ? "bg-gradient-to-br from-accent-500 to-accent-700 hover:scale-105 cursor-pointer shadow-accent-500/40"
              : "bg-white/20 cursor-not-allowed"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Volume2 className="w-3.5 h-3.5 text-white/60 shrink-0" />
            <span className="text-white text-sm font-semibold truncate">
              {title}
            </span>
          </div>
          <div className="text-white/60 text-xs mb-2 flex items-center gap-2">
            <span className="truncate">
              {isAvailable ? subtitle : "サンプル音声を準備中です"}
            </span>
            {isAvailable && (duration || durationLabel) && (
              <span className="text-white/40 shrink-0 tabular-nums">
                {duration
                  ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                  : durationLabel}
              </span>
            )}
          </div>
          {/* Progress Bar */}
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
