import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../../config/siteConfig';
import {
  Sparkles,
  ClipboardList,
  MessageCircle,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  Trophy,
  ArrowRight,
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenEnquiry?: () => void;
}

const STEP_ICONS = [
  ClipboardList,
  MessageCircle,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  Trophy,
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenEnquiry }) => {
  const steps = siteConfig.planningProcess || [
    {
      step: '01',
      title: 'Share your event requirements',
      description: 'Share your event date, type of occasion, scale, venue ideas, and aspirations with our team.',
    },
    {
      step: '02',
      title: 'Discuss vision, preferences & budget',
      description: 'Discuss your vision, aesthetic preferences, family traditions, and realistic budget expectations in detail.',
    },
    {
      step: '03',
      title: 'Develop a customised event plan',
      description: 'We develop a bespoke event blueprint, timeline, thematic styling, and vendor allocation tailored to your needs.',
    },
    {
      step: '04',
      title: 'Coordinate services, vendors & logistics',
      description: 'Our team coordinates stage production, decor, lighting, artists, guest hospitality, transport, and catering oversight.',
    },
    {
      step: '05',
      title: 'Execute and manage the event',
      description: 'On-ground operational management ensuring clockwork precision, troubleshooting, and seamless guest experiences.',
    },
    {
      step: '06',
      title: 'Deliver a memorable celebration',
      description: 'We deliver an extraordinary, stress-free celebration that your family, guests, and community cherish for years.',
    },
  ];

  return (
    <section id="process" className="relative py-14 sm:py-20 lg:py-28 bg-[#210404] text-[#F7F0E6] overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#E9D3B0]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>OUR EVENT PLANNING PROCESS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9]">
            How We Bring Your Vision <br />
            <span className="gold-text-shimmer italic font-normal font-serif">To Grandeur</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-[#C9B8A5] font-light max-w-xl mx-auto leading-relaxed">
            From initial consultation to flawless on-ground delivery, our transparent 6-step roadmap ensures every celebration is seamless, stress-free and unforgettable.
          </p>
        </div>

        {/* 6-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {steps.map((item, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-sm p-6 sm:p-7 bg-[#350606]/90 border border-[#741A18]/70 hover:border-[#C8A66A]/60 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Top Corner Step Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full border border-[#C8A66A]/50 bg-[#210404] flex items-center justify-center font-mono text-sm font-bold text-[#E9D3B0] shadow-md group-hover:border-[#C8A66A] group-hover:scale-105 transition-all">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#350606] flex items-center justify-center text-[#C8A66A]/70 group-hover:text-[#C8A66A] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A66A] block mb-1">
                    PHASE {item.step}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wide text-[#FFFDF9] mb-2.5 group-hover:text-[#E9D3B0] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle progress line */}
                <div className="mt-6 pt-3 border-t border-[#741A18]/40 flex items-center justify-between text-[11px] font-mono text-[#C9B8A5]/60">
                  <span>Step {idx + 1} of 6</span>
                  <span className="text-[#C8A66A] opacity-0 group-hover:opacity-100 transition-opacity">
                    Managed by Mahotsava →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Call-To-Action */}
        {onOpenEnquiry && (
          <div className="mt-10 sm:mt-14 text-center">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xs text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] hover:shadow-[0_8px_30px_rgba(200,166,106,0.4)] active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              <span>Begin Your Event Planning Process</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#210404]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
