'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { isGoogleDriveUrl, getGoogleDriveThumbnailUrl } from '@/lib/videos';

interface VideoCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  videoUrl: string;
  originalVideoPath?: string; // Original Google Drive share link for thumbnail generation
  duration?: string;
  onClick?: () => void;
}

export default function VideoCard({
  title,
  description,
  thumbnail,
  videoUrl,
  originalVideoPath,
  duration,
  onClick,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideoThumbnail, setShowVideoThumbnail] = useState(false);
  const [googleDriveThumbnail, setGoogleDriveThumbnail] = useState<string | null>(null);
  const [isLoadingThumbnail, setIsLoadingThumbnail] = useState(false);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);

  // Get Google Drive thumbnail URL
  useEffect(() => {
    if (isGoogleDriveUrl(videoUrl)) {
      // Use originalVideoPath if available (original share link), otherwise use videoUrl
      // The originalVideoPath contains the share link which is better for thumbnail extraction
      const urlToUse = originalVideoPath || videoUrl;
      const fileId = urlToUse.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1];
      
      if (!fileId) {
        console.warn('Could not extract file ID from Google Drive URL:', urlToUse);
        return;
      }

      // Try multiple thumbnail URL formats
      const thumbnailUrls = [
        // Method 1: Google Drive thumbnail API
        `https://drive.google.com/thumbnail?id=${fileId}&sz=w1280-h720`,
        // Method 2: Googleusercontent direct link
        `https://lh3.googleusercontent.com/d/${fileId}=w1280-h720`,
        // Method 3: Alternative thumbnail API format
        `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`,
        // Method 4: Smaller size as fallback
        `https://drive.google.com/thumbnail?id=${fileId}&sz=w640-h360`,
      ];

      let currentIndex = 0;
      setIsLoadingThumbnail(true);

      const tryNextThumbnail = () => {
        if (currentIndex >= thumbnailUrls.length) {
          console.warn('All Google Drive thumbnail methods failed for:', fileId);
          setIsLoadingThumbnail(false);
          return;
        }

        const thumbUrl = thumbnailUrls[currentIndex];
        const img = new window.Image();
        
        // Don't set crossOrigin for Google Drive thumbnails as they may not support CORS
        img.onload = () => {
          console.log('Google Drive thumbnail loaded successfully:', thumbUrl);
          setGoogleDriveThumbnail(thumbUrl);
          setIsLoadingThumbnail(false);
        };
        
        img.onerror = () => {
          console.warn(`Google Drive thumbnail method ${currentIndex + 1} failed:`, thumbUrl);
          currentIndex++;
          tryNextThumbnail();
        };
        
        img.src = thumbUrl;
      };

      tryNextThumbnail();
    }
  }, [videoUrl, originalVideoPath]);

  useEffect(() => {
    const video = thumbnailVideoRef.current;
    if (!video || !videoUrl) return;
    
    // Skip thumbnail generation for Google Drive videos
    if (isGoogleDriveUrl(videoUrl)) {
      return;
    }

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
  }, [videoUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        {!isGoogleDriveUrl(videoUrl) && showVideoThumbnail ? (
          <video
            ref={thumbnailVideoRef}
            src={videoUrl}
            className={`object-cover w-full h-full transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            muted
            playsInline
            preload="metadata"
            style={{ pointerEvents: 'none' }}
          />
        ) : isGoogleDriveUrl(videoUrl) && googleDriveThumbnail ? (
          <Image
            src={googleDriveThumbnail}
            alt={title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            unoptimized
            onError={() => {
              // Fallback if thumbnail fails to load
              setGoogleDriveThumbnail(null);
            }}
          />
        ) : thumbnail && thumbnail !== '/images/videos/placeholder.svg' ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            unoptimized
          />
        ) : (
          <>
            {!isGoogleDriveUrl(videoUrl) && (
              <video
                ref={thumbnailVideoRef}
                src={videoUrl}
                className="hidden"
                muted
                playsInline
                preload="metadata"
              />
            )}
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white">
              {isGoogleDriveUrl(videoUrl) && isLoadingThumbnail ? (
                <>
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2"></div>
                  <span className="text-sm">Loading thumbnail...</span>
                </>
              ) : (
                <span className="text-2xl font-bold">{title.charAt(0)}</span>
              )}
            </div>
          </>
        )}
        
        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-8 h-8 text-primary ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>
        
        {/* Duration Badge */}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
