'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);
  const radius = 150;
  const centerX = 200;
  const centerY = 200;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        <div className="relative w-full aspect-square max-w-[500px] mx-auto min-h-[500px]">
          {/* Circular Path Line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
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

          {/* Process Steps with Labels */}
          {processSteps.map((step, index) => {
            // Calculate position on circle - move circles outside the circle line
            const angleRad = (step.angle * Math.PI) / 180;
            // Position circles outside the circle line (radius + offset)
            // Step 01 needs more offset to be completely outside, step 03 closer but still outside
            let circleRadius = radius;
            if (step.position === 'top') {
              circleRadius = radius + 50; // Step 01: Further outside to ensure completely outside the line
            } else if (step.position === 'bottom') {
              circleRadius = radius + 7; // Step 03: Very close to line but still outside
            } else if (step.position === 'right') {
              // Step 02: On mobile, bring much closer to circle line to prevent overflow
              circleRadius = radius + (isMobile ? 0 : 20); // On the line on mobile, still outside on desktop
            } else if (step.position === 'top') {
              // On mobile, bring step 01 closer to circle line
              circleRadius = radius + (isMobile ? 30 : 50);
            } else if (step.position === 'bottom') {
              // On mobile, bring step 03 closer to circle line
              circleRadius = radius + (isMobile ? 2 : 7);
            }
            const x = centerX + circleRadius * Math.cos(angleRad);
            const y = centerY + circleRadius * Math.sin(angleRad);

            // Calculate label offset position based on position
            // Position labels consistently outside the circle
            let labelRadius = radius + 80;
            let labelOffsetX = 0;
            let labelOffsetY = 0;
            
            // Adjust label position based on step position
            // Position labels relative to the circle (which is now outside the line)
            if (step.position === 'top') {
              // On mobile, bring labels closer to circles
              labelRadius = circleRadius + (isMobile ? 8 : 15); // Closer on mobile
              labelOffsetY = isMobile ? -8 : -12; // Closer on mobile
            } else if (step.position === 'bottom') {
              // On mobile, bring labels closer to circles
              labelRadius = circleRadius + (isMobile ? 25 : 55); // Closer on mobile
              labelOffsetY = isMobile ? 15 : 30; // Closer on mobile
            } else if (step.position === 'right') {
              // Step 02 label: On mobile, bring closer to circle and adjust positioning
              labelRadius = circleRadius + (isMobile ? 12 : 50); // Much closer on mobile
              labelOffsetY = isMobile ? -10 : -20;
              labelOffsetX = isMobile ? -10 : 10; // Move left on mobile to keep it on screen
            }

            const labelX = centerX + labelRadius * Math.cos(angleRad) + labelOffsetX;
            const labelY = centerY + labelRadius * Math.sin(angleRad) + labelOffsetY;

            return (
              <div key={step.number} className="absolute inset-0">
                {/* Step Circle */}
                <motion.div
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
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 ${step.bgColor} rounded-full flex items-center justify-center ${step.textColor} font-bold text-lg md:text-xl shadow-lg border-2 border-white z-10`}
                  >
                    {step.number}
                  </div>
                </motion.div>

                {/* Step Label */}
                <div
                  className="absolute"
                  style={{
                    left: `${(labelX / 400) * 100}%`,
                    top: `${(labelY / 400) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <p className="text-primary font-semibold text-sm md:text-base text-center whitespace-nowrap bg-white/80 px-4 py-2 rounded-md shadow-sm" style={{ letterSpacing: '0.01em', wordSpacing: '0.1em' }}>
                    {step.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
