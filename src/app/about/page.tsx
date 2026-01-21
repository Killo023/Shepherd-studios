'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section with Background */}
      <section className="relative pt-[140px] md:pt-[140px] pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              About Us
            </h1>
            <p className="text-xl text-lightBlue max-w-3xl mx-auto">
              Learn more about Shepherd Studios and our mission to bring stories to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section - Matching PDF Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">
              {/* Left Column - Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-normal text-lightBlue">
                    About
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                    Shepherd
                  </h1>
                  <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                    Studios.
                  </h1>
                </div>
              </motion.div>

              {/* Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 top-[20%] bottom-[20%] w-px bg-primary transform -translate-x-1/2" />

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Who is Shepherd Studios?
                </h3>
                <div className="space-y-4 text-lightBlue text-lg leading-relaxed">
                  <p>
                    Shepherds Studios is a multi-media design studio focused on motion graphics, 
                    aiming to bring stories to life with engaging visuals.
                  </p>
                  <p>
                    Motion ads capture and retain attention better than static visuals, creating 
                    lasting impressions.
                  </p>
                  <p>
                    The studio offers high-quality motion design to help brands stand out and be 
                    memorable.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Horizontal Divider at Bottom */}
            <div className="mt-12 w-full h-px bg-primary" />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-lightBlue mb-4 leading-relaxed">
                At Shepherd Studios, our mission is to empower businesses and
                individuals with cutting-edge digital solutions that drive growth
                and innovation.
              </p>
              <p className="text-lg text-lightBlue leading-relaxed">
                We believe in the power of technology to transform ideas into
                reality, and we&apos;re committed to delivering excellence in every
                project we undertake.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-lg text-lightBlue mb-4 leading-relaxed">
                We envision a future where digital experiences are seamless,
                intuitive, and transformative. Our vision drives us to push the
                boundaries of what&apos;s possible.
              </p>
              <p className="text-lg text-lightBlue leading-relaxed">
                Through innovation, creativity, and dedication, we strive to be
                the leading force in digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Grass and grazing landscape"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* Right: Our Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lightBlue text-lg leading-relaxed">
                <p>
                  Shepherd Studios was born from a passion for bringing stories to life through motion and film. 
                  We recognized that in today&apos;s fast-paced digital world, static visuals often get lost in the noise, 
                  while motion graphics and video content have the power to capture attention and create lasting impressions.
                </p>
                <p>
                  Our journey began with a simple belief: that every brand, system, and story deserves clarity through 
                  exceptional visual communication. We specialize in creating high-quality video and motion design that 
                  helps businesses stand out and connect with their audiences in meaningful ways.
                </p>
                <p>
                  What sets us apart is our commitment to quality and our understanding that motion ads capture and retain 
                  attention better than static visuals. We don&apos;t just create content—we craft experiences that resonate, 
                  inspire, and drive results.
                </p>
                <p>
                  Today, Shepherd Studios continues to push the boundaries of motion design, working with brands across 
                  various industries to bring their visions to life. We&apos;re not just a studio—we&apos;re storytellers, 
                  innovators, and partners in your creative journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Values</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative solutions',
              },
              {
                title: 'Excellence',
                description: 'We strive for perfection in every project',
              },
              {
                title: 'Collaboration',
                description: 'We work closely with clients to achieve their goals',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-lightBlue">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
