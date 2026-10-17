import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { Sparkles, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 bg-[#090a0e] text-[#e5e7eb] overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Scroll Reveal */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-xs font-serif tracking-[0.25em] uppercase text-[#d4af37] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>BESPOKE CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.04em] uppercase text-[#fdfbf7] text-balance"
          >
            EXPERIENCES SCALED TO <span className="gold-gradient-text">LEGEND.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[#9ca3af] text-base sm:text-lg font-light leading-relaxed max-w-2xl"
          >
            Each celebration is conceived as a singular work of spatial architecture, haute gastronomie, and sensory theater.
          </motion.p>
        </div>

        {/* Bento Grid with Asymmetric Spans and Hover Zoom */}
        <motion.div
          variants={staggerContainer(0.12, 0.25)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className={`${service.span} group relative rounded-sm overflow-hidden border border-[#21242f] bg-[#0d0f16] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#d4af37]/60 hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.8)] flex flex-col justify-between`}
            >
              {/* Background Luxury Architectural Canvas with Slow Zoom */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 transition-transform duration-700 ease-out group-hover:scale-105`}
                />

                {/* Subtle ornamental lattice lines */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Golden corner highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Top Accent Gold Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/0 to-transparent group-hover:via-[#d4af37] transition-all duration-500" />

              {/* Card Content Header */}
              <div className="relative z-10 p-7 sm:p-9 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-sm tracking-widest text-[#d4af37] font-semibold">
                    {service.number}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-[#2b2e3d] flex items-center justify-center bg-[#13151f]/60 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:border-[#d4af37]/50 group-hover:bg-[#1a1710] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#fbf7ee] group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[#d4af37]/90">
                  {service.tagline}
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#9ca3af] font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Feature deliverables */}
                <div className="mt-6 pt-6 border-t border-[#1d202b] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Venue Footer */}
              <div className="relative z-10 px-7 sm:px-9 py-4 bg-[#0a0c11]/80 border-t border-[#1a1c26] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="truncate">{service.venueExample}</span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-serif tracking-widest uppercase font-semibold text-[#d4af37] hover:text-[#fbf7ee] transition-colors py-1 cursor-pointer"
                >
                  Request Consultation →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
