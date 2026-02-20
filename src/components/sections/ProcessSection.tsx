'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We align on goals, audience, and approach.',
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'We create and refine the visual solution.',
  },
  {
    number: '03',
    title: 'Delivery & Handover',
    description: 'We deliver final assets and support handover.',
  },
];

export default function ProcessSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-8">
      {/* Left: "Our Process" Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <div className="bg-primary text-white px-10 py-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
        </div>
      </motion.div>

      {/* Right: Linear step cards with timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full max-w-3xl"
      >
        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-primary/20" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
              <div
                className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-white shadow-lg border-2 border-white ${
                  index === 0 ? 'bg-blue-200 text-primary' : 'bg-primary'
                }`}
              >
                {step.number}
              </div>
              {/* Label card */}
              <div className="mt-4 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl px-5 py-4 shadow-md w-full">
                <h3 className="text-primary font-semibold text-base md:text-lg">
                  {step.title}
                </h3>
                <p className="text-lightBlue text-sm mt-1 leading-snug">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
