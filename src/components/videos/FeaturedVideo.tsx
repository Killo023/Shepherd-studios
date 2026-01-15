'use client';

import { useState } from 'react';
import ReactPlayer from 'react-player';
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

  return (
    <div className="w-full mb-12">
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            {thumbnail.startsWith('/') || thumbnail.startsWith('http') ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white text-4xl font-bold">
                {title.charAt(0)}
              </div>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <button
                onClick={() => setIsPlaying(true)}
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
            </div>
          </div>
        ) : (
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying}
            controls
            width="100%"
            height="100%"
            className="react-player"
          />
        )}
      </div>
    </div>
  );
}
