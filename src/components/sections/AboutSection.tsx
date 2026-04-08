'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Image - Grass Plains */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Grass plains landscape"
          fill
          className="object-cover opacity-10"
          unoptimized
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-64 lg:h-96 flex items-center justify-center relative rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
              alt="Creative studio workspace"
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm text-primary font-semibold uppercase tracking-wider mb-3 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Who We Are
              </h2>
            </div>
            
            <p className="text-lg text-lightBlue leading-relaxed">
              Shepherd Studios is a visual communication studio specialising in
              motion graphics, video production, and design for organisations
              operating in complex environments.
            </p>
            <p className="text-lg text-lightBlue leading-relaxed">
              We work with companies across financial services, technology,
              consumer brands, and industrial sectors to help them explain
              systems, communicate processes, and present ideas with clarity.
            </p>
            <p className="text-lg text-lightBlue leading-relaxed">
              Our work focuses on making complex information accessible through
              clear visual storytelling that can scale across platforms, teams,
              and real-world operations.
            </p>
            
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
