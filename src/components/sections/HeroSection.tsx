'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [useIframe, setUseIframe] = useState(false);
  
  // Google Drive video URL - HTML5 video doesn't work due to CORS
  // File ID: 1wyylgPnYgUe-oXHvxj7CUJAwLWjSlBZL
  // Using preview URL for iframe fallback
  const googleDrivePreviewUrl = 'https://drive.google.com/file/d/1wyylgPnYgUe-oXHvxj7CUJAwLWjSlBZL/preview';
  
  // Try direct download URL first (may work in some browsers)
  const [videoSrc, setVideoSrc] = useState('https://drive.google.com/uc?export=download&id=1wyylgPnYgUe-oXHvxj7CUJAwLWjSlBZL&confirm=t');

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video loads and plays
      const handleCanPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn('Video autoplay prevented:', error);
            // Auto-play was prevented, try again on user interaction
            const handleInteraction = () => {
              video.play().catch(console.error);
              document.removeEventListener('touchstart', handleInteraction);
              document.removeEventListener('click', handleInteraction);
            };
            document.addEventListener('touchstart', handleInteraction, { once: true });
            document.addEventListener('click', handleInteraction, { once: true });
          });
        }
      };

      video.addEventListener('canplay', handleCanPlay);
      
      // Also try to play immediately
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Will be handled by canplay listener
        });
      }

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {useIframe ? (
          // Fallback to iframe if HTML5 video fails (Google Drive limitation)
          <iframe
            src={googleDrivePreviewUrl}
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ 
              pointerEvents: 'none',
              border: 'none',
              transform: 'scale(1.1)', // Scale to hide iframe borders
              width: '110%',
              height: '110%',
              margin: '-5%'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Hero background video"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ pointerEvents: 'none' }}
            onError={(e) => {
              const videoElement = e.target as HTMLVideoElement;
              console.error('Hero video failed to load:', videoSrc);
              console.error('Error code:', videoElement.error?.code, 'Message:', videoElement.error?.message);
              
              // Google Drive URLs don't work with HTML5 video due to CORS
              // Fallback to iframe
              console.warn('HTML5 video failed, switching to iframe fallback');
              setUseIframe(true);
              setVideoError(true);
            }}
            onLoadedData={() => {
              console.log('Hero video loaded successfully');
              setVideoError(false);
              // Ensure video plays after loading
              videoRef.current?.play().catch(console.warn);
            }}
            onCanPlay={() => {
              console.log('Hero video can play');
              videoRef.current?.play().catch(console.warn);
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Gradient Overlay - subtle overlay for text readability, positioned above video but below content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-[1]" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Clarity Through Motion & Film
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              We create high-quality video and motion design for brands, systems, and
              stories.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Our Services
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
