'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Scene3D from '@/components/3d/Scene3D';
import ParticleSystem from '@/components/3d/ParticleSystem';

const industries = [
  'Mining',
  'Manufacturing',
  'Engineering & Construction',
  'Logistics',
  'Energy',
  'Infrastructure',
  'Corporate & Commercial',
];

export default function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Image - Industries */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/Industries.png"
          alt="Industries we work in"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-50/85" />
      </div>
      
      {/* Decorative 3D particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <Scene3D className="w-full h-full">
          <ParticleSystem count={200} speed={0.2} size={0.02} color="#1a5f7a" />
        </Scene3D>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Built to Operate Across Complex Industries
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-lightBlue leading-relaxed mb-4">
              Shepherds Studios works across industries where clarity, safety, and precision
              matter.
            </p>
            <p className="text-xl text-lightBlue leading-relaxed">
              From industrial environments to commercial and brand-led spaces, we create
              visual systems that communicate clearly, scale efficiently, and stand up to
              real-world operations.
            </p>
          </div>
        </motion.div>
        
        {/* Industry Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl cursor-default">
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300">
                    {industry}
                  </h3>
                </div>
                {/* Hover effect accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
