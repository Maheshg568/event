import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../../config/siteConfig';
import { Crown, Sparkles, Quote, Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const leaders = siteConfig.leadership || [];

  if (!leaders.length) return null;

  return (
    <section className="relative py-16 sm:py-24 bg-[#210404] text-[#F7F0E6] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E9D3B0]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-3">
            <Crown className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>LEADERSHIP & STEWARDSHIP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.03em] text-[#FFFDF9] mb-4">
            Founder & <span className="gold-text-shimmer italic font-normal font-serif">Executive Leadership</span>
          </h2>
          <p className="text-xs sm:text-base text-[#C9B8A5] font-light max-w-2xl mx-auto leading-relaxed">
            The visionary minds dedicated to preserving authentic cultural grandeur, uncompromising architectural excellence, and generational hospitality.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <div
              key={leader.id || index}
              className="relative rounded-sm border border-[#741A18]/80 bg-[#350606]/90 p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-[#C8A66A]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Corner decorative motif */}
              <div className="absolute top-3 right-3 text-[#C8A66A]/20 group-hover:text-[#C8A66A]/40 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>

              <div>
                {/* Header row: Portrait & Identity */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6">
                  {leader.image && (
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm overflow-hidden border-2 border-[#C8A66A] shadow-lg relative bg-[#210404]">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          style={{
                            objectPosition:
                              leader.imagePosition === 'top' ? 'center 12%' : 'center center',
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#C8A66A] text-[#210404] p-1.5 rounded-full shadow-md">
                        <Crown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                  {/* Name and Designation */}
                  <div className="text-center sm:text-left flex-1">
                    <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] font-mono uppercase tracking-widest text-[#E9D3B0] bg-[#741A18]/40 border border-[#C8A66A]/30 rounded">
                      {leader.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF9] tracking-wide">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C8A66A] font-light mt-0.5 tracking-wider uppercase font-serif">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* Quote block */}
                {leader.quote && (
                  <div className="relative mb-6 pl-4 border-l-2 border-[#C8A66A]/60 bg-[#210404]/50 py-3 pr-3 rounded-r">
                    <Quote className="w-4 h-4 text-[#C8A66A] mb-1 opacity-70" />
                    <p className="font-serif italic text-xs sm:text-sm text-[#E9D3B0] leading-relaxed">
                      {leader.quote}
                    </p>
                  </div>
                )}

                {/* Biography */}
                <p className="text-xs sm:text-sm text-[#C9B8A5] leading-relaxed font-light mb-6">
                  {leader.bio}
                </p>
              </div>

              {/* Footer Links */}
              <div className="pt-4 border-t border-[#741A18]/50 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#C8A66A]/80 tracking-wider uppercase">
                  Executive Directorate
                </span>
                <div className="flex items-center gap-2.5">
                  {leader.instagram && (
                    <a
                      href={leader.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#210404] border border-[#741A18] text-[#C9B8A5] hover:text-[#FFFDF9] hover:border-[#C8A66A] transition-colors"
                      title="Instagram Profile"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#210404] border border-[#741A18] text-[#C9B8A5] hover:text-[#FFFDF9] hover:border-[#C8A66A] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="p-2 rounded bg-[#210404] border border-[#741A18] text-[#C9B8A5] hover:text-[#FFFDF9] hover:border-[#C8A66A] transition-colors"
                      title="Direct Communication"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
