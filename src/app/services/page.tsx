'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProcessSection from '@/components/sections/ProcessSection';

const services = [
  {
    title: 'Motion Graphics',
    description: 'Engaging motion graphics that bring stories to life with dynamic visuals and animations. We create compelling motion ads that capture and retain attention better than static visuals.',
    features: [
      'Animated Brand Videos',
      'Social Media Motion Content',
      'Explainer Animations',
      'Motion Graphics for Ads',
    ],
  },
  {
    title: 'Videography & Media',
    description: 'Professional video production and media services to showcase your brand. From concept to final cut, we deliver high-quality video content that makes a lasting impression.',
    features: [
      'Commercial Videography',
      'Corporate Video Production',
      'Event Coverage',
      'Post-Production Editing',
    ],
  },
  {
    title: 'Graphic Design',
    description: 'Creative graphic design solutions that help your brand stand out and be memorable. We craft visual identities that resonate with your audience and communicate your message effectively.',
    features: [
      'Brand Identity Design',
      'Print & Digital Graphics',
      'Marketing Materials',
      'Visual Communication',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-[280px] md:pt-[300px] pb-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Farm landscape"
            fill
            className="object-cover opacity-15"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 pt-0"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Our Services
            </h1>
            <p className="text-xl text-lightBlue max-w-3xl mx-auto">
              Multi-media design studio focused on motion graphics, videography, and graphic design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
            alt="Sheep in field"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Service Card */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-primary transition-all duration-300 hover:shadow-xl">
                  {/* Service Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  
                  {/* Service Content */}
                  <div className="pt-4">
                    <h2 className="text-3xl font-bold mb-4 text-primary group-hover:text-primary-dark transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-lightBlue mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Problem & Solution */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Grass plains"
            fill
            className="object-cover opacity-12"
            unoptimized
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Column - "Why Us?" */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="text-center lg:text-left">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary inline-block">
                    Why
                  </h2>
                  <h2 className="text-4xl md:text-5xl font-normal text-primary inline-block ml-2">
                    Us?
                  </h2>
                </div>
              </motion.div>

              {/* Vertical Divider */}
              <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-primary" />

              {/* Right Column - Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* The Problem */}
                <div className="bg-blue-100 rounded-2xl p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    The Problem
                  </h3>
                  <p className="text-primary text-lg leading-relaxed">
                    In today&apos;s digital jungle, businesses are like peacocks trying to show off their feathers to get noticed. But here&apos;s the thing: even the brightest feathers can lose their shine quickly. That&apos;s why many smart companies are leaving behind old-style graphic design and choosing new ways to keep people interested.
                  </p>
                </div>

                {/* Our Solution */}
                <div className="bg-white border-2 border-primary rounded-2xl p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Our Solution
                  </h3>
                  <p className="text-primary text-lg leading-relaxed">
                    Spice up your graphic design with a dash of motion and animation magic to make your company stand out from the crowd! Energetic animations and interactive content transform your brand into a captivating spectacle, mesmerizing audiences and keeping their eyes glued to the screen.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
            alt="Sheep in field"
            fill
            className="object-cover opacity-15"
            unoptimized
          />
          <div className="absolute inset-0 bg-gray-50/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSection />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Farm landscape"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Choose Shepherd Studios?</h2>
            <p className="text-xl text-lightBlue max-w-2xl mx-auto">
              We bring stories to life with engaging visuals that create lasting impressions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Quality Motion Design',
                description: 'Professional motion graphics that capture attention and create memorable brand experiences.',
              },
              {
                title: 'Creative Excellence',
                description: 'Innovative designs that help your brand stand out in a crowded marketplace.',
              },
              {
                title: 'End-to-End Service',
                description: 'From concept to delivery, we handle every aspect of your project with care and precision.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-lightBlue leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life with engaging motion graphics and creative design
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
