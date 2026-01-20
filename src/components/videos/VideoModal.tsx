'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Video } from './VideoGallery';
import { isGoogleDriveUrl, getGoogleDriveThumbnailUrl } from '@/lib/videos';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(false);
  const [googleDriveThumbnail, setGoogleDriveThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);

  // Get Google Drive thumbnail URL
  useEffect(() => {
    if (video && isGoogleDriveUrl(video.videoUrl)) {
      const thumbUrl = getGoogleDriveThumbnailUrl(video.videoUrl, 1920, 1080);
      if (thumbUrl) {
        setGoogleDriveThumbnail(thumbUrl);
      }
    } else {
      setGoogleDriveThumbnail(null);
    }
  }, [video]);

  // Reset video state when modal opens/closes or video changes
  useEffect(() => {
    if (isOpen && video) {
      setIsPlaying(false);
      setHasError(false);
      setShowThumbnail(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      if (thumbnailVideoRef.current) {
        thumbnailVideoRef.current.currentTime = 0;
      }
    } else {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen, video]);

  // Load thumbnail from video (skip for Google Drive videos)
  useEffect(() => {
    const videoElement = thumbnailVideoRef.current;
    if (!videoElement || !isOpen || isPlaying || !video) return;
    
    // Skip thumbnail generation for Google Drive videos
    if (isGoogleDriveUrl(video.videoUrl)) {
      return;
    }

    const handleLoadedData = () => {
      if (videoElement.duration > 1) {
        videoElement.currentTime = 1;
      } else if (videoElement.duration > 0) {
        videoElement.currentTime = videoElement.duration * 0.1;
      }
    };

    const handleSeeked = () => {
      setShowThumbnail(true);
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedData);
    videoElement.addEventListener('seeked', handleSeeked);

    return () => {
      videoElement.removeEventListener('loadedmetadata', handleLoadedData);
      videoElement.removeEventListener('seeked', handleSeeked);
    };
  }, [isOpen, video, isPlaying]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasError(false);
    videoRef.current?.play().catch((error) => {
      console.error('Error playing video:', error);
      setHasError(true);
      setIsPlaying(false);
    });
  };

  const handleClose = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  if (!video) return null;

  // Debug: Log video URL
  if (process.env.NODE_ENV === 'development') {
    console.log('VideoModal - Video:', {
      id: video.id,
      title: video.title,
      videoUrl: video.videoUrl,
      isGoogleDrive: isGoogleDriveUrl(video.videoUrl),
    });
  }

  // Ensure we have a valid video URL
  if (!video.videoUrl || video.videoUrl.startsWith('/videos/')) {
    console.error('Invalid video URL detected:', video.videoUrl);
    setHasError(true);
  }

  const encodedVideoUrl = encodeURI(video.videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900">
                {isGoogleDriveUrl(encodedVideoUrl) ? (
                  // Use iframe for Google Drive videos (show immediately)
                  <iframe
                    src={encodedVideoUrl}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ border: 'none' }}
                    title={video.title}
                  />
                ) : !isPlaying ? (
                  <div className="relative w-full h-full">
                    {showThumbnail ? (
                      <video
                        ref={thumbnailVideoRef}
                        src={encodedVideoUrl}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                        style={{ pointerEvents: 'none' }}
                      />
                    ) : (
                      <video
                        ref={thumbnailVideoRef}
                        src={encodedVideoUrl}
                        className="hidden"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    )}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center ${showThumbnail ? 'bg-black/60' : 'bg-gradient-to-br from-gray-800 to-gray-900'}`}>
                      {/* Play Button */}
                      <button
                        onClick={handlePlay}
                        className="mb-6 w-24 h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group z-10"
                        aria-label="Play video"
                      >
                        <svg
                          className="w-12 h-12 text-primary ml-1 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center px-4 z-10">
                        {video.title}
                      </h2>
                      {video.description && (
                        <p className="text-white/90 max-w-2xl text-center px-4 mb-4 z-10">
                          {video.description}
                        </p>
                      )}
                      {hasError && (
                        <p className="text-red-300 text-sm mt-2 z-10">
                          Error loading video. Please try again.
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src={encodedVideoUrl}
                    controls
                    autoPlay
                    className="w-full h-full"
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onError={() => {
                      console.error('Video error:', encodedVideoUrl);
                      setHasError(true);
                      setIsPlaying(false);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
