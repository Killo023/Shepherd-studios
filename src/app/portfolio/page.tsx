'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoGallery, { Video } from '@/components/videos/VideoGallery';
import VideoModal from '@/components/videos/VideoModal';
import ParticleSystem from '@/components/3d/ParticleSystem';
import Scene3D from '@/components/3d/Scene3D';
import { videos } from '@/lib/videos';

// Use videos from centralized video data
const sampleVideos: Video[] = videos;

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-20"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
        </div>
        
        <div className="absolute inset-0 opacity-10 pointer-events-none z-[1]">
          <Scene3D className="w-full h-full">
            <ParticleSystem count={300} speed={0.2} size={0.02} color="#1a5f7a" />
          </Scene3D>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our video content showcasing our work, process, and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">All Videos</h2>
            <VideoGallery videos={sampleVideos} onVideoSelect={handleVideoSelect} />
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
