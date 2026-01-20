'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Benito',
    role: 'Graphic Designer',
    image: '/images/team/Benito.PNG',
    circleColor: 'bg-blue-200', // Light blue circle
  },
  {
    name: 'Samuel',
    role: 'Videographer & Graphic Designer',
    image: '/images/team/Samuel.PNG',
    circleColor: 'bg-primary', // Dark blue circle
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: "Meet the Team" Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 relative"
          >
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/images/logo/Shepherds Logo-01.png"
                alt="Shepherd Studios Logo"
                width={400}
                height={150}
                className="h-auto w-auto max-w-[350px] md:max-w-[400px]"
                priority
              />
            </div>

            {/* Title */}
            <div className="flex flex-col mt-8">
              <h2 className="text-3xl md:text-4xl font-normal text-primary mb-2">
                Meet the
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Team
              </h2>
            </div>

            {/* Vertical Divider Line */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-blue-200" />
          </motion.div>

          {/* Right: Team Member Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  {/* Profile Picture Frame - Vertically elongated, arched */}
                  <div className="relative w-full aspect-[3/4] rounded-t-[3rem] rounded-b-[1rem] overflow-hidden border-2 border-gray-200 shadow-lg mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gray-200 flex items-center justify-center';
                          fallback.innerHTML = `<span class="text-primary text-lg font-semibold">${member.name}</span>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="text-center mt-4">
                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {member.name}
                    </h3>
                    
                    {/* Role - Full text visible */}
                    <p className="text-lightBlue text-base md:text-lg mb-4">
                      {member.role}
                    </p>
                    
                    {/* Colored Circle - Positioned below the text, centered, no overlap */}
                    <div className="flex justify-center">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 ${member.circleColor} rounded-full shadow-lg`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
