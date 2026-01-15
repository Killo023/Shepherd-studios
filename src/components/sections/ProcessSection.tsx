'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    position: 'top',
    bgColor: 'bg-blue-200',
    textColor: 'text-primary',
    angle: -90, // Top
  },
  {
    number: '02',
    title: 'Design & Development',
    position: 'right',
    bgColor: 'bg-accent',
    textColor: 'text-white',
    angle: 0, // Right
  },
  {
    number: '03',
    title: 'Delivery & Handover',
    position: 'bottom',
    bgColor: 'bg-primary',
    textColor: 'text-white',
    angle: 90, // Bottom
  },
];

export default function ProcessSection() {
  const radius = 150;
  const centerX = 200;
  const centerY = 200;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-8">
      {/* Left: "Our Process" Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <div className="bg-primary text-white px-10 py-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
        </div>
      </motion.div>

      {/* Right: Circular Process Flow */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-2xl flex-shrink-0"
      >
        {/* Circular Container */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
          {/* Circular Path Line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="#1a5f7a"
              strokeWidth="2"
            />
          </svg>

          {/* Process Steps */}
          {processSteps.map((step, index) => {
            // Calculate position on circle
            const angleRad = (step.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);

            // Label positioning
            let labelClasses = '';
            if (step.position === 'top') {
              labelClasses = 'top-16 left-1/2 -translate-x-1/2';
            } else if (step.position === 'right') {
              labelClasses = 'right-16 top-1/2 -translate-y-1/2';
            } else if (step.position === 'bottom') {
              labelClasses = 'bottom-16 left-1/2 -translate-x-1/2';
            }

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="absolute"
                style={{
                  left: `${(x / 400) * 100}%`,
                  top: `${(y / 400) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Step Circle */}
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 ${step.bgColor} rounded-full flex items-center justify-center ${step.textColor} font-bold text-lg md:text-xl shadow-lg border-2 border-white`}
                >
                  {step.number}
                </div>
              </motion.div>
            );
          })}

          {/* Step Labels - Positioned separately for better visibility */}
          {processSteps.map((step, index) => {
            let labelClasses = '';
            let labelTextAlign = 'text-center';

            if (step.position === 'top') {
              labelClasses = 'top-20 left-1/2 -translate-x-1/2';
              labelTextAlign = 'text-center';
            } else if (step.position === 'right') {
              labelClasses = 'right-20 top-1/2 -translate-y-1/2';
              labelTextAlign = 'text-right';
            } else if (step.position === 'bottom') {
              labelClasses = 'bottom-20 left-1/2 -translate-x-1/2';
              labelTextAlign = 'text-center';
            }

            return (
              <div
                key={`label-${step.number}`}
                className={`absolute ${labelClasses}`}
              >
                <p className={`text-primary font-semibold text-sm md:text-base ${labelTextAlign} whitespace-nowrap`}>
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
