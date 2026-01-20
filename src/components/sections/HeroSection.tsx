'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useIframe, setUseIframe] = useState(false);
  
  // Google Drive video URL
  // File ID: 1wyylgPnYgUe-oXHvxj7CUJAwLWjSlBZL
  // Try direct download URL for HTML5 video (supports autoplay/loop)
  const googleDriveDirectUrl = 'https://drive.google.com/uc?export=download&id=1wyylgPnYgUe-oXHvxj7CUJAwLWjSlBZL';
  const googleDrivePreviewUrl = 'https://drive.google.com/file/d/1wyylgPnYgUe-oXHvxj7CUJAwLWjSlBZL/preview';
  
  useEffect(() => {
    const video = videoRef.current;
    if (video && !useIframe) {
      // Ensure video plays and loops
      const ensurePlayback = () => {
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA
          video.play().catch((error) => {
            console.warn('Video autoplay failed:', error);
            // Fallback to iframe if autoplay fails
            setUseIframe(true);
          });
        }
      };
      
      video.addEventListener('loadeddata', ensurePlayback);
      video.addEventListener('canplay', ensurePlayback);
      video.addEventListener('canplaythrough', ensurePlayback);
      
      // Try playing immediately
      ensurePlayback();
      
      return () => {
        video.removeEventListener('loadeddata', ensurePlayback);
        video.removeEventListener('canplay', ensurePlayback);
        video.removeEventListener('canplaythrough', ensurePlayback);
      };
    }
  }, [useIframe]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {useIframe ? (
          // Fallback to iframe if HTML5 video fails
          <iframe
            src={googleDrivePreviewUrl}
            className="absolute inset-0 w-full h-full z-0"
            style={{ 
              border: 'none',
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
            }}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen={false}
            title="Hero background video"
            scrolling="no"
          />
        ) : (
          // HTML5 video - supports autoplay and loop
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ pointerEvents: 'none' }}
            onError={(e) => {
              console.error('HTML5 video failed, switching to iframe');
              setUseIframe(true);
            }}
            onLoadedData={() => {
              console.log('Hero video loaded - autoplay and loop enabled');
              videoRef.current?.play().catch(() => setUseIframe(true));
            }}
            onEnded={() => {
              // Ensure video loops
              videoRef.current?.play().catch(() => setUseIframe(true));
            }}
          >
            <source src={googleDriveDirectUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Subtle background overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-[1]" />
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
