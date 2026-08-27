"use client";
import React, { useState, useEffect, useRef } from "react";
import { useVideo, FALLBACK_VIDEOS } from "../_context/VideoContext";

// Map granular types to VideoData properties
type PlayerType = 'banner' | 'short' | 'short-1' | 'short-2' | 'short-3' | 'short-4' | '360';

interface DynamicVideoPlayerProps {
  videos?: string | string[] | (string | string[])[];
  className?: string;
  type?: PlayerType;
}

export default function DynamicVideoPlayer({
  videos: manualVideos,
  className = "absolute inset-0 w-full h-full object-cover",
  type = 'short'
}: DynamicVideoPlayerProps) {
  const { videos: contextVideos } = useVideo();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Normalize dynamic videos into a flat array of strings
  const activeVideos = React.useMemo(() => {
    let source: any = manualVideos;

    // 1. If no manual override, resolve from context using type
    if (!source && contextVideos) {
      if (type === 'banner') {
        source = contextVideos.banner;
      } else if (type === '360') {
        source = contextVideos.videos360;
      } else if (type.startsWith('short')) {
        const indexStr = type.split('-')[1];
        if (indexStr !== undefined) {
          const index = parseInt(indexStr) - 1; // Map short-1 to index 0
          source = contextVideos.shortVideo?.[index];
        } else {
          source = contextVideos.shortVideo?.[0];
        }
      }
    }

    // 2. If still empty, resolve from FALLBACK_VIDEOS as true globals
    if (!source || (Array.isArray(source) && source.length === 0)) {
      if (type === 'banner') {
        source = FALLBACK_VIDEOS.banner;
      } else if (type === '360') {
        source = FALLBACK_VIDEOS.videos360;
      } else if (type.startsWith('short')) {
        const indexStr = type.split('-')[1];
        const index = indexStr !== undefined ? parseInt(indexStr) - 1 : 0; // Map short-1 to index 0
        source = FALLBACK_VIDEOS.shortVideo?.[index] || FALLBACK_VIDEOS.shortVideo?.[0];
      }
    }

    // Flatten nested arrays and remove non-string or empty entries
    const flattened = Array.isArray(source) ? source.flat() : [source];
    const valid = flattened.filter((v): v is string => typeof v === 'string' && v.trim() !== '');

    return valid;
  }, [manualVideos, contextVideos, type]);

  const handleVideoEnd = () => {
    if (activeVideos.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % activeVideos.length);
    }
  };

  // Reset index if content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeVideos]);

  // Handle Safari autoplay by enforcing muted state and explicitly calling play() when src changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute("muted", "true");
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.play()
        .then(() => setAutoplayBlocked(false))
        .catch((error) => {
          console.warn("Autoplay blocked:", error);
          setAutoplayBlocked(true);
        });
    }
  }, [currentIndex, activeVideos]);

  const attemptPlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setAutoplayBlocked(false))
        .catch((error) => {
          console.warn("Autoplay blocked on canplay:", error);
          setAutoplayBlocked(true);
        });
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setAutoplayBlocked(false))
        .catch((err) => console.error("Manual play failed:", err));
    }
  };

  // The "Invisible Autoplay" Hack for iOS:
  // If iOS blocks autoplay, we listen for the user's VERY FIRST tap or swipe anywhere on the screen.
  // The moment they touch the screen to scroll, we trigger play(), satisfying iOS's gesture rule invisibly.
  useEffect(() => {
    if (!autoplayBlocked) return;

    const unlockVideo = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play()
          .then(() => {
            setAutoplayBlocked(false);
            window.removeEventListener("touchstart", unlockVideo);
            window.removeEventListener("click", unlockVideo);
          })
          .catch(() => {});
      }
    };

    window.addEventListener("touchstart", unlockVideo, { passive: true });
    window.addEventListener("click", unlockVideo, { passive: true });

    return () => {
      window.removeEventListener("touchstart", unlockVideo);
      window.removeEventListener("click", unlockVideo);
    };
  }, [autoplayBlocked]);

  if (activeVideos.length === 0) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="auto"
      onCanPlay={attemptPlay}
      loop={activeVideos.length === 1}
      onEnded={handleVideoEnd}
      className={className}
      src={activeVideos[currentIndex]}
      // Prevent right-click context menu
      onContextMenu={(e) => e.preventDefault()}
      // Prevent drag-to-save
      onDragStart={(e) => e.preventDefault()}
      // Remove download controls (if controls are ever enabled)
      controlsList="nodownload"
      // Disables picture-in-picture (harder to screen record)
      disablePictureInPicture
    />
  );
}

