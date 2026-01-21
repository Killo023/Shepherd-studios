'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Image - Farm Landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Farm landscape"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40" />
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
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Get In Touch</h2>
          <p className="text-xl text-lightBlue max-w-2xl mx-auto mb-12">
            Have a project in mind? Fill out our project brief form to provide details about your project before contacting us
          </p>
          
          {/* Google Form Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJC3rVQokSfdWbnspBrM29d3a8JDCs4R2VlT1WcWTtNChQKw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Submit Project Brief
            </a>
            <p className="text-sm text-lightBlue mt-4 max-w-md mx-auto">
              Click the button above to access our project brief form where you can answer questions related to your project
            </p>
          </motion.div>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-900 text-center">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-semibold text-gray-900 mb-3">Phone</p>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Benito:</span><br />
                  <a href="tel:+27734545317" className="hover:text-primary transition-colors">+27 73 454 5317</a>
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Samuel:</span><br />
                  <a href="tel:+27734890932" className="hover:text-primary transition-colors">+27 73 489 0932</a>
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Email</p>
              <p className="text-gray-600 text-sm">
                <a href="mailto:hey@shepherdstudios.co.za" className="hover:text-primary transition-colors">
                  hey@shepherdstudios.co.za
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Website</p>
              <p className="text-gray-600 text-sm">
                <a href="https://www.shepherdstudios.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.shepherdstudios.co.za
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
