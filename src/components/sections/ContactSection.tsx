'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <p className="text-xl text-lightBlue max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Phone</p>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-medium">Benito:</span> <a href="tel:+27734545317" className="hover:text-primary transition-colors">+27 73 454 5317</a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Samuel:</span> <a href="tel:+27734890932" className="hover:text-primary transition-colors">+27 73 489 0932</a>
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Email</p>
                <p className="text-gray-600">
                  <a href="mailto:hey@shepherdstudios.co.za" className="hover:text-primary transition-colors">
                    hey@shepherdstudios.co.za
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Website</p>
                <p className="text-gray-600">
                  <a href="https://www.shepherdstudios.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    www.shepherdstudios.co.za
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
