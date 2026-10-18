import React from 'react';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Phone, Mail, Clock, Instagram, Sparkles, MessageSquare } from 'lucide-react';

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
          <span>DIRECTORATE OF CELEBRATION PLANNING</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9] mb-3 sm:mb-4">
          Connect With <span className="gold-text-shimmer italic font-normal font-serif">Mahotsava</span>
        </h1>
        <p className="text-xs sm:text-base text-[#C9B8A5] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Headquartered in Hubballi–Dharwad. Our founding directors and event coordinators are at your service for unhurried consultations and bespoke celebration planning.
        </p>
      </div>

      {/* Directory Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Office Address */}
          <div className="p-5 rounded-sm bg-[#350606] border border-[#741A18]/60 flex flex-col justify-between">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                  Headquarters
                </h4>
                <p className="text-xs text-[#C9B8A5] leading-relaxed">
                  {siteConfig.contact.officeAddress}
                </p>
                <p className="text-[11px] text-[#C8A66A] mt-1 font-mono">
                  PIN: {siteConfig.contact.pinCode}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="p-5 rounded-sm bg-[#350606] border border-[#741A18]/60 flex flex-col justify-between">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                  Call & WhatsApp
                </h4>
                <a
                  href={`tel:${siteConfig.contact.conciergePhone}`}
                  className="block text-xs text-[#C9B8A5] hover:text-[#E9D3B0] font-mono"
                >
                  {siteConfig.contact.conciergePhone}
                </a>
                <a
                  href={`tel:${siteConfig.contact.alternativePhone}`}
                  className="block text-xs text-[#C9B8A5] hover:text-[#E9D3B0] font-mono mt-0.5"
                >
                  {siteConfig.contact.alternativePhone}
                </a>
                <a
                  href={`https://wa.me/916363116158?text=Namaste%20Mahotsava%20Grandeur`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#25D366] font-mono mt-1 hover:underline"
                >
                  <MessageSquare className="w-3 h-3" />
                  WhatsApp Active
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Business Email & Hours */}
          <div className="p-5 rounded-sm bg-[#350606] border border-[#741A18]/60 flex flex-col justify-between">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                  Official Email
                </h4>
                <a
                  href={`mailto:${siteConfig.contact.inquiryEmail}`}
                  className="text-xs text-[#C9B8A5] hover:text-[#E9D3B0] font-mono break-all"
                >
                  {siteConfig.contact.inquiryEmail}
                </a>
                <div className="flex items-center gap-1.5 text-[11px] text-[#C9B8A5]/80 mt-2 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#C8A66A]" />
                  <span>Mon – Sun, 10am – 7pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Official Instagram */}
          <div className="p-5 rounded-sm bg-[#350606] border border-[#741A18]/60 flex flex-col justify-between">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#210404] border border-[#C8A66A]/40 flex items-center justify-center text-[#E9D3B0] shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] uppercase tracking-wider mb-1">
                  Social Presence
                </h4>
                <p className="text-xs text-[#C9B8A5]">
                  Follow our celebration portfolio on Instagram.
                </p>
                <a
                  href="https://www.instagram.com/mahotsava_grandeur?dlrf=Y2tnNHF1Y2hiNnBv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-[#E9D3B0] hover:text-[#FFFDF9] font-mono mt-1.5 underline"
                >
                  @mahotsava_grandeur →
                </a>
              </div>
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
