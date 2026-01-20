'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoGallery, { Video } from '@/components/videos/VideoGallery';
import VideoModal from '@/components/videos/VideoModal';
import ParticleSystem from '@/components/3d/ParticleSystem';
import Scene3D from '@/components/3d/Scene3D';

// Video data from media/Videos folder
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Pizza Hut - Brand Campaign',
    description: 'Brand campaign video for Pizza Hut showcasing our creative video production capabilities',
    thumbnail: '/images/videos/placeholder.svg',
    videoUrl: '/videos/1- Pizza Hut.mp4',
    category: 'brand-campaign',
  },
  {
    id: '2',
    title: 'Puma - Brand Campaign',
    description: 'Dynamic brand campaign video for Puma featuring our high-energy video production style',
    thumbnail: '/images/videos/placeholder.svg',
    videoUrl: '/videos/2- Puma.mp4',
    category: 'brand-campaign',
  },
  {
    id: '3',
    title: 'Melrose Arch - Brand Campaign',
    description: 'Brand campaign showcasing Melrose Arch with our professional video production expertise',
    thumbnail: '/images/videos/placeholder.svg',
    videoUrl: '/videos/3- Melrose Arch.mp4',
    category: 'brand-campaign',
  },
  {
    id: '4',
    title: 'Play Energy - Brand Campaign',
    description: 'Energetic brand campaign video for Play Energy demonstrating our creative vision',
    thumbnail: '/images/videos/placeholder.svg',
    videoUrl: '/videos/4- Play Energy.mp4',
    category: 'brand-campaign',
  },
  {
    id: '5',
    title: 'Knorr Durban July Corporate Video',
    description: 'Corporate video for Knorr Durban July event, showcasing our corporate video production capabilities',
    thumbnail: '/images/videos/placeholder.svg',
    videoUrl: '/videos/1- Knorr Durban July Corporate Video.mp4',
    category: 'corporate',
  },
  {
    id: '6',
    title: 'Knorr Cook-Off Highlight Video',
    description: 'Highlight video from the Knorr Cook-Off event, capturing the excitement and energy',
    thumbnail: '/images/videos/placeholder.svg',
    videoUrl: '/videos/2- Knorr Cook-Off Highlight Video.mp4',
    category: 'corporate',
  },
];

export default function VideosPage() {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
