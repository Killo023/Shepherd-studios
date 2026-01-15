'use client';

import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import ParticleSystem from '@/components/3d/ParticleSystem';
import Scene3D from '@/components/3d/Scene3D';

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;d love to hear from you. Get in touch and let&apos;s start a conversation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
