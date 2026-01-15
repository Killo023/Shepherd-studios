'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const graphicDesignProjects = [
  {
    id: 1,
    title: 'Komatsu',
    client: 'Komatsu',
    category: 'Branding & Marketing',
    description: 'Smart Construction 3D Machine Guidance promotional materials featuring innovative construction technology branding.',
    images: [
      '/images/portfolio/graphic-design/komatsu1.PNG',
      '/images/portfolio/graphic-design/komatsu2.PNG',
    ],
    tags: ['Branding', 'Marketing Materials', 'Construction'],
    color: '#1a5f7a', // Dark blue
  },
  {
    id: 2,
    title: 'FA Charity Organisation',
    client: 'FA Charity Organisation',
    category: 'Non-Profit Design',
    description: 'Comprehensive donation campaign materials with banking details and impactful visual storytelling.',
    images: [
      '/images/portfolio/graphic-design/FA charity 1.PNG',
      '/images/portfolio/graphic-design/FA charity 2.PNG',
      '/images/portfolio/graphic-design/FA charity 3.PNG',
    ],
    tags: ['Campaign Design', 'Print Materials', 'Social Impact'],
    color: '#2a7fa0', // Teal
  },
  {
    id: 3,
    title: 'DRC Government',
    client: 'Democratic Republic of Congo',
    category: 'Government & Public Sector',
    description: 'Formal government presentation design for Lualaba Province featuring national and provincial symbols.',
    images: [
      '/images/portfolio/graphic-design/DRC government.PNG',
    ],
    tags: ['Government Design', 'Presentation', 'Brand Identity'],
    color: '#dc2626', // Red
  },
  {
    id: 4,
    title: 'Bahati Transit',
    client: 'Bahati Transit',
    category: 'Transportation Branding',
    description: 'Complete brand identity and marketing materials for transportation services, including app launch designs.',
    images: [
      '/images/portfolio/graphic-design/Bahati transit 1.PNG',
      '/images/portfolio/graphic-design/Bahati transit 2.PNG',
      '/images/portfolio/graphic-design/bahati transit 3.PNG',
      '/images/portfolio/graphic-design/bahati transit 4.PNG',
      '/images/portfolio/graphic-design/bahati transit 5.PNG',
      '/images/portfolio/graphic-design/bahati transit 6.PNG',
      '/images/portfolio/graphic-design/bahati transit 7.PNG',
      '/images/portfolio/graphic-design/bahati transit 8.PNG',
      '/images/portfolio/graphic-design/bahati transit 9.PNG',
    ],
    tags: ['Brand Identity', 'Marketing', 'App Design'],
    color: '#f97316', // Orange/Coral
  },
  {
    id: 5,
    title: 'Molende Sports',
    client: 'Molende Sports',
    category: 'Sports & Academy',
    description: 'Dynamic sports academy branding and training program materials with energetic visual design.',
    images: [
      '/images/portfolio/graphic-design/Molende sports 1.PNG',
      '/images/portfolio/graphic-design/Molende sports 2.PNG',
      '/images/portfolio/graphic-design/Molende sports 3.PNG',
      '/images/portfolio/graphic-design/Molende sports 4.PNG',
      '/images/portfolio/graphic-design/Molende sports 5.PNG',
      '/images/portfolio/graphic-design/Molende sports 6.PNG',
      '/images/portfolio/graphic-design/Molende sports 7.PNG',
    ],
    tags: ['Sports Branding', 'Training Materials', 'Academy Design'],
    color: '#84cc16', // Lime green
  },
  {
    id: 6,
    title: 'Tsori Capital',
    client: 'Tsori Capital',
    category: 'Financial Services',
    description: 'Logo redesign and brand refresh for financial services company, modernizing visual identity.',
    images: [
      '/images/portfolio/graphic-design/Tsori capital 1.PNG',
      '/images/portfolio/graphic-design/Tsori capital 2.PNG',
    ],
    tags: ['Logo Design', 'Brand Refresh', 'Financial'],
    color: '#2563eb', // Blue
  },
];

export default function GraphicDesignSection() {
  const [selectedImage, setSelectedImage] = useState<{ project: typeof graphicDesignProjects[0]; imageIndex: number } | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex flex-col items-center mb-6">
              <span className="text-2xl md:text-3xl font-normal text-lightBlue mb-2">Our</span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Graphic Design
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-lightBlue max-w-3xl mx-auto mt-6">
              Bringing brands to life through creative visual design and strategic branding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Sections */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {graphicDesignProjects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
              className="mb-24 last:mb-0"
            >
              {/* Company Header */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
                  <div>
                    <span className="text-sm text-primary font-semibold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-3">
                      {project.title}
                    </h2>
                    <p className="text-lightBlue text-lg md:text-xl max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Client Name */}
                  <div className="text-right">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Client</p>
                    <p className="text-primary font-semibold text-lg">{project.client}</p>
                  </div>
                </div>
                
                {/* Accent Line */}
                <div 
                  className="h-1 w-32"
                  style={{ backgroundColor: project.color }}
                />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage({ project, imageIndex })}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${imageIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/portfolio/placeholder.svg';
                        }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <p className="text-primary text-sm font-medium">View Full Size</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-sm text-sm font-medium border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative max-w-7xl w-full max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video bg-gray-900">
              <Image
                src={selectedImage.project.images[selectedImage.imageIndex]}
                alt={`${selectedImage.project.title} - Image ${selectedImage.imageIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/portfolio/placeholder.svg';
                }}
              />
            </div>

            {/* Navigation - Only show if more than 1 image */}
            {selectedImage.project.images.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = selectedImage.imageIndex === 0 
                      ? selectedImage.project.images.length - 1 
                      : selectedImage.imageIndex - 1;
                    setSelectedImage({ project: selectedImage.project, imageIndex: newIndex });
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-colors z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = selectedImage.imageIndex === selectedImage.project.images.length - 1
                      ? 0
                      : selectedImage.imageIndex + 1;
                    setSelectedImage({ project: selectedImage.project, imageIndex: newIndex });
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-colors z-10"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
                  {selectedImage.imageIndex + 1} / {selectedImage.project.images.length}
                </div>
              </>
            )}

            {/* Project Info */}
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {selectedImage.project.title}
              </h3>
              <p className="text-lightBlue">
                Image {selectedImage.imageIndex + 1} of {selectedImage.project.images.length}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
