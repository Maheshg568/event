import React from 'react';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactPageProps {
  initialSpace?: string;
  initialSetup?: string;
  onEnquirySuccess?: (refId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialSpace,
  initialSetup,
  onEnquirySuccess,
}) => {
  return (
    <div className="pt-20 sm:pt-24 bg-[#210404] text-[#F7F0E6]">
      {/* Header */}
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2 sm:mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
          <span>CONCIERGE DIRECTORATE</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9] mb-3 sm:mb-4">
          Connect With <span className="gold-text-shimmer italic font-normal font-serif">Mahotsava</span>
        </h1>
        <p className="text-xs sm:text-base text-[#C9B8A5] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Our senior event directors look forward to welcoming you for an unhurried consultation and private walkthrough of our sanctuary.
        </p>
      </div>

      {/* Directory Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-sm bg-[#350606] border border-[#741A18]/60 flex items-start gap-3.5 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                Sanctuary Address
              </h4>
              <p className="text-xs text-[#C9B8A5] leading-relaxed">
                {siteConfig.contact.locationCity}
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-sm bg-[#350606] border border-[#741A18]/60 flex items-start gap-3.5 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                Concierge Line
              </h4>
              <p className="text-xs text-[#C9B8A5] leading-relaxed font-mono">
                {siteConfig.contact.conciergePhone}
              </p>
              <p className="text-[11px] text-[#C8A66A] font-mono mt-0.5">
                WhatsApp: {siteConfig.contact.whatsappNumber}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-sm bg-[#350606] border border-[#741A18]/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                Consultation Hours
              </h4>
              <p className="text-xs text-[#C9B8A5] leading-relaxed">
                {siteConfig.contact.operatingHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Enquiry Form */}
      <EnquiryForm
        initialSpace={initialSpace}
        initialSetup={initialSetup}
        onEnquirySuccess={onEnquirySuccess}
      />
    </div>
  );
};
