'use client';

import { motion } from 'framer-motion';
import TeamSection from '@/components/sections/TeamSection';

export default function AboutPage() {
  return (
    <div className="pt-20">
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
                reality, and we're committed to delivering excellence in every
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
                boundaries of what's possible.
              </p>
              <p className="text-lg text-lightBlue leading-relaxed">
                Through innovation, creativity, and dedication, we strive to be
                the leading force in digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <TeamSection />

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
