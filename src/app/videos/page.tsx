'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FeaturedVideo from '@/components/videos/FeaturedVideo';
import VideoGallery, { Video } from '@/components/videos/VideoGallery';
import ParticleSystem from '@/components/3d/ParticleSystem';
import Scene3D from '@/components/3d/Scene3D';

// Video data - UPDATE WITH YOUR ACTUAL VIDEOS
// Add video files to /public/videos/ and thumbnails to /public/images/videos/
// For now, using placeholders - replace with your actual videos and thumbnails
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Project Showcase 2024',
    description: 'A comprehensive overview of our recent projects and achievements',
    thumbnail: '/images/videos/placeholder.svg', // Replace with '/images/videos/video-1-thumb.jpg' when you add thumbnails
    videoUrl: '/videos/video-1.mp4', // Add video to public/videos/
    duration: '5:32',
    category: 'showcase',
  },
  {
    id: '2',
    title: '3D Design Process',
    description: 'Behind the scenes look at how we create stunning 3D experiences',
    thumbnail: '/images/videos/placeholder.svg', // Replace with '/images/videos/video-2-thumb.jpg' when you add thumbnails
    videoUrl: '/videos/video-2.mp4', // Add video to public/videos/
    duration: '8:15',
    category: 'tutorial',
  },
  {
    id: '3',
    title: 'Client Testimonial',
    description: 'Hear from our satisfied clients about their experience',
    thumbnail: '/images/videos/placeholder.svg', // Replace with '/images/videos/video-3-thumb.jpg' when you add thumbnails
    videoUrl: '/videos/video-3.mp4', // Add video to public/videos/
    duration: '3:45',
    category: 'testimonial',
  },
  {
    id: '4',
    title: 'Web Development Tips',
    description: 'Expert tips for modern web development',
    thumbnail: '/images/videos/placeholder.svg', // Replace with '/images/videos/video-4-thumb.jpg' when you add thumbnails
    videoUrl: '/videos/video-4.mp4', // Add video to public/videos/
    duration: '12:20',
    category: 'tutorial',
  },
  {
    id: '5',
    title: 'Brand Identity Design',
    description: 'The process of creating a complete brand identity',
    thumbnail: '/images/videos/placeholder.svg', // Replace with '/images/videos/video-5-thumb.jpg' when you add thumbnails
    videoUrl: '/videos/video-5.mp4', // Add video to public/videos/
    duration: '6:50',
    category: 'showcase',
  },
  {
    id: '6',
    title: 'Interactive 3D Demo',
    description: 'Demonstration of our interactive 3D capabilities',
    thumbnail: '/images/videos/placeholder.svg', // Replace with '/images/videos/video-6-thumb.jpg' when you add thumbnails
    videoUrl: '/videos/video-6.mp4', // Add video to public/videos/
    duration: '4:30',
    category: 'showcase',
  },
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(
    sampleVideos[0] || null
  );

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    // Scroll to top to show featured video
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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
              Video Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our video content showcasing our work, process, and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      {selectedVideo && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Featured Video</h2>
              <FeaturedVideo
                title={selectedVideo.title}
                description={selectedVideo.description}
                videoUrl={selectedVideo.videoUrl}
                thumbnail={selectedVideo.thumbnail}
              />
            </motion.div>
          </div>
        </section>
      )}

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
    </div>
  );
}
