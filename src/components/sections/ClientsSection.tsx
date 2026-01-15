'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Client logos - Updated to match actual file names
// Place logo images in /public/images/clients/
const clients = [
  { name: 'Fanta', logo: '/images/clients/fanta.PNG' },
  { name: 'Volvo', logo: '/images/clients/volvo.PNG' },
  { name: 'Puma', logo: '/images/clients/puma.PNG' },
  { name: 'Showmax', logo: '/images/clients/showmax.PNG' },
  { name: 'Client 5', logo: '/images/clients/client 5.PNG' },
  { name: 'Pizza Hut', logo: '/images/clients/Pizza hut.PNG' },
  { name: 'Domestos', logo: '/images/clients/Domestos.PNG' },
  { name: 'Amazon', logo: '/images/clients/Amazon.PNG' },
  { name: 'Investec', logo: '/images/clients/investec.PNG' },
  { name: 'Client 10', logo: '/images/clients/client 10.PNG' },
  { name: 'Knorr', logo: '/images/clients/knorr.PNG' },
  { name: 'SA Fashion Week', logo: '/images/clients/SA fashion week.PNG' },
  { name: 'Client 13', logo: '/images/clients/client 13.PNG' },
  { name: 'Discovery Bank', logo: '/images/clients/discovery bank.PNG' },
  { name: 'Komatsu', logo: '/images/clients/komatsu.PNG' },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: "Our Clients" Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-normal text-primary mb-2">
                Our
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Clients
              </h2>
            </div>
          </motion.div>

          {/* Right: Client Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 w-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 w-full">
              {clients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-center"
                >
                  {/* Circular Frame with Logo - Larger Size */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full border-2 border-primary p-4 md:p-5 bg-white hover:border-primary-dark hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      unoptimized
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center';
                          fallback.innerHTML = `<span class="text-primary text-xs md:text-sm font-semibold text-center px-2">${client.name}</span>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
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
