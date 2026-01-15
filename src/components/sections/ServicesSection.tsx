'use client';

import { motion } from 'framer-motion';
import ParticleSystem from '@/components/3d/ParticleSystem';
import Scene3D from '@/components/3d/Scene3D';
import Image from 'next/image';

const services = [
  {
    title: 'Motion Graphics',
    description: 'Engaging motion graphics to bring stories to life',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
  },
  {
    title: 'Videography & Media',
    description: 'Professional video production and media services',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
  },
  {
    title: 'Graphic Design',
    description: 'Creative graphic design solutions for your brand',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Image - Sheep in Field */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Sheep in field"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-gray-50/80" />
      </div>
      
      {/* Decorative 3D particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <Scene3D className="w-full h-full">
          <ParticleSystem count={200} speed={0.2} size={0.02} color="#1a5f7a" />
        </Scene3D>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold uppercase tracking-wider mb-3 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Services</h2>
          <p className="text-xl text-lightBlue max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business
            thrive in the digital world
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={service.image || '/images/placeholder.svg'}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-lightBlue leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
