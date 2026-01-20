'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface FeaturedVideoProps {
  title: string;
  description?: string;
  videoUrl: string;
  thumbnail: string;
}

export default function FeaturedVideo({
  title,
  description,
  videoUrl,
  thumbnail,
}: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showVideoThumbnail, setShowVideoThumbnail] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);

  // Reset video state when videoUrl changes
  useEffect(() => {
    setIsPlaying(false);
    setHasError(false);
    setShowVideoThumbnail(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (thumbnailVideoRef.current) {
      thumbnailVideoRef.current.currentTime = 0;
    }
  }, [videoUrl]);

  // Load thumbnail from video
  useEffect(() => {
    const video = thumbnailVideoRef.current;
    if (!video || isPlaying) return;

    const handleLoadedData = () => {
      // Seek to 1 second to get a good frame
      if (video.duration > 1) {
        video.currentTime = 1;
      } else if (video.duration > 0) {
        video.currentTime = video.duration * 0.1;
      }
    };

    const handleSeeked = () => {
      setShowVideoThumbnail(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [videoUrl, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasError(false);
    videoRef.current?.play().catch((error) => {
      console.error('Error playing video:', error);
      setHasError(true);
      setIsPlaying(false);
    });
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  // Encode the video URL to handle spaces and special characters
  const encodedVideoUrl = encodeURI(videoUrl);

  return (
    <div className="w-full mb-12">
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            {showVideoThumbnail ? (
              <video
                ref={thumbnailVideoRef}
                src={encodedVideoUrl}
                className="object-cover w-full h-full"
                muted
                playsInline
                preload="metadata"
                style={{ pointerEvents: 'none' }}
              />
            ) : thumbnail && thumbnail !== '/images/videos/placeholder.svg' ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <>
                <video
                  ref={thumbnailVideoRef}
                  src={encodedVideoUrl}
                  className="hidden"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white text-4xl font-bold">
                  {title.charAt(0)}
                </div>
              </>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <button
                onClick={handlePlay}
                className="mb-4 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                aria-label="Play video"
              >
                <svg
                  className="w-10 h-10 text-primary ml-1 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
              {description && (
                <p className="text-white/90 max-w-2xl text-center px-4">
                  {description}
                </p>
              )}
              {hasError && (
                <p className="text-red-300 text-sm mt-2">
                  Error loading video. Please try again.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <video
              key={videoUrl}
              ref={videoRef}
              src={encodedVideoUrl}
              controls
              className="w-full h-full"
              onPause={handlePause}
              onEnded={() => setIsPlaying(false)}
              onError={() => {
                console.error('Video error:', encodedVideoUrl);
                setHasError(true);
                setIsPlaying(false);
              }}
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
