'use client';

import { motion } from 'framer-motion';

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Testimonial Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl"
          >
            {/* Light Blue Bubble Shape - Organic rounded shape */}
            <div className="relative bg-blue-100 rounded-[4rem] md:rounded-[5rem] p-10 md:p-14 lg:p-20 pr-16 md:pr-20 lg:pr-24">
              {/* Opening Quotation Mark - Large and stylized */}
              <div className="absolute top-6 left-8 md:top-8 md:left-12">
                <span className="text-7xl md:text-9xl font-serif text-primary opacity-40 leading-none">
                  &quot;
                </span>
              </div>
              
              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-primary text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-normal pl-4 md:pl-6">
                  Shepherd Studios&apos; expertise transformed our ngo. Amateur materials became professional, boosting credibility. Visual storytelling in proposals deepened donor connections, significantly improving fundraising results.
                </p>
                
                {/* Attribution */}
                <div className="flex items-center mt-10 pl-4 md:pl-6">
                  <span className="text-primary mr-3 text-xl">—</span>
                  <p className="text-primary font-semibold text-base md:text-lg">
                    Joel Maniaki, CEO
                  </p>
                </div>
              </div>
              
              {/* Closing Quotation Mark - Bottom right */}
              <div className="absolute bottom-6 right-10 md:bottom-8 md:right-14">
                <span className="text-7xl md:text-9xl font-serif text-primary opacity-40 leading-none">
                  &quot;
                </span>
              </div>
            </div>
            
            {/* Dark Blue Partial Circle - Right Side, overlapping */}
            <div className="hidden lg:block absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
