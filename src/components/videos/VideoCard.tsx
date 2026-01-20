'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface VideoCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
  onClick?: () => void;
}

export default function VideoCard({
  title,
  description,
  thumbnail,
  videoUrl,
  duration,
  onClick,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideoThumbnail, setShowVideoThumbnail] = useState(false);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = thumbnailVideoRef.current;
    if (!video) return;

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
        {showVideoThumbnail ? (
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
            <video
              ref={thumbnailVideoRef}
              src={videoUrl}
              className="hidden"
              muted
              playsInline
              preload="metadata"
            />
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white text-2xl font-bold">
              {title.charAt(0)}
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
