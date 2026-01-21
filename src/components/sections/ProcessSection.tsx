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
            // Calculate position on circle
            const angleRad = (step.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);

            // Calculate label offset position based on position
            // Position labels consistently outside the circle
            let labelRadius = radius + 80;
            let labelOffsetX = 0;
            let labelOffsetY = 0;
            
            // Adjust label position based on step position
            // Bring labels closer to circles for top and bottom steps
            if (step.position === 'top') {
              labelRadius = radius + 50; // Closer to circle
              labelOffsetY = -30; // Above the circle, closer
            } else if (step.position === 'bottom') {
              labelRadius = radius + 50; // Closer to circle
              labelOffsetY = 30; // Below the circle, closer
            } else if (step.position === 'right') {
              labelOffsetX = 50; // To the right of the circle
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
                  <p className="text-primary font-semibold text-sm md:text-base text-center whitespace-nowrap bg-white/80 px-4 py-2 rounded-md shadow-sm" style={{ letterSpacing: '0.02em' }}>
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
