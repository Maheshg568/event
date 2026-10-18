import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../../config/siteConfig';
import { submitCustomerOrder } from '../../lib/supabase';
import {
  Sparkles,
  Calendar,
  Users,
  User,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

interface EnquiryFormProps {
  initialSpace?: string;
  initialSetup?: string;
  onEnquirySuccess?: (referenceId: string) => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialSpace,
  initialSetup,
  onEnquirySuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    occasionType: 'Imperial Indian Wedding (3-Day)',
    preferredDate: '2026-11-20',
    guestCount: 500,
    preferredSpace: initialSpace || 'The Grand Durbar Hall',
    preferredSetup: initialSetup || 'Vedic Mandap',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceId: string;
    submittedAt: string;
  } | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name or Title is required';
    if (!formData.phone.trim()) errs.phone = 'Contact telephone is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email address is required';
    }
    if (formData.guestCount < 10) errs.guestCount = 'Guest count must be at least 10';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.submit;
      return next;
    });

    try {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const refId = `MG-2026-${randomNum}`;

      // Insert customer celebration order directly into Supabase 'orders' table
      await submitCustomerOrder({
        reference_id: refId,
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        occasion_type: formData.occasionType,
        preferred_date: formData.preferredDate,
        guest_count: formData.guestCount,
        message: formData.message || (formData.preferredSpace ? `Preferred Space: ${formData.preferredSpace} (${formData.preferredSetup})` : ''),
        status: 'new',
      });

      const submitted = {
        referenceId: refId,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      setSubmittedBooking(submitted);
      if (onEnquirySuccess) onEnquirySuccess(refId);
    } catch (err: any) {
      console.error('Failed to submit celebration enquiry to database:', err);
      setErrors((prev) => ({
        ...prev,
        submit:
          err?.message ||
          'Failed to transmit enquiry to database. Please connect directly via WhatsApp or telephone.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-[#210404] text-[#F7F0E6] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E9D3B0]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>AN INVITATION TO ENQUIRE</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9]">
            Let Us Be Part of Your <br />
            <span className="gold-text-shimmer italic font-normal font-serif">Special Day</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#C9B8A5] font-light max-w-lg mx-auto">
            Tell us about your occasion, and let us help you explore the possibilities. Our Senior Celebration Director will connect with you within 4 business hours.
          </p>
        </div>

        {/* Main Card Frame */}
        <div className="rounded-sm border border-[#741A18]/80 bg-[#350606]/95 backdrop-blur-xl p-5 sm:p-8 lg:p-12 shadow-2xl relative">
          {/* Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent" />

          {submittedBooking ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 sm:py-10 text-center flex flex-col items-center"
            >
              {/* Animated checkmark */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C8A66A] bg-[#210404] flex items-center justify-center text-[#E9D3B0] mb-4 sm:mb-6 shadow-[0_0_30px_rgba(200,166,106,0.35)]">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#C8A66A]" />
              </div>

              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A66A] mb-1">
                ENQUIRY DOSSIER TRANSMITTED
              </span>
              <h3 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold uppercase text-[#FFFDF9] mb-3 sm:mb-4">
                Celebration Request Received
              </h3>

              {/* Reference ID card */}
              <div className="p-3.5 sm:p-4 rounded-xs bg-[#210404] border border-[#C8A66A]/40 inline-flex flex-col items-center mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#C9B8A5] uppercase tracking-wider">
                  Dossier Reference Code
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#E9D3B0] mt-0.5">
                  {submittedBooking.referenceId}
                </span>
              </div>

              <p className="max-w-md text-xs sm:text-sm text-[#C9B8A5] leading-relaxed mb-6 sm:mb-8 px-2">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Our celebration directorate has registered your preferred date for <strong className="text-white">{formData.occasionType}</strong> in {formData.preferredSpace}. A formal invitation to a private walkthrough will follow shortly.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/916363116158?text=Namaste%20Mahotsava%20Grandeur%2C%20inquiry%20regarding%20booking%20${submittedBooking.referenceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xs text-xs font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] shadow-md hover:shadow-[0_8px_30px_rgba(200,166,106,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#210404]" />
                  <span>Connect On WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmittedBooking(null)}
                  className="px-5 py-3 text-xs font-mono uppercase tracking-wider text-[#C9B8A5] hover:text-white border border-[#741A18] hover:border-[#C8A66A] rounded-xs cursor-pointer transition-colors"
                >
                  New Enquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Full Name / Title <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Maharaja Vikramaditya / Dr. Ananya Sharma"
                      className={`w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border outline-none transition-all ${
                        errors.fullName ? 'border-rose-500' : 'border-[#741A18] focus:border-[#C8A66A]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Telephone */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Telephone (Direct / Office) <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 63631 16158"
                      className={`w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border outline-none transition-all ${
                        errors.phone ? 'border-rose-500' : 'border-[#741A18] focus:border-[#C8A66A]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Confidential Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="v.sharma@domain.com"
                      className={`w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border outline-none transition-all ${
                        errors.email ? 'border-rose-500' : 'border-[#741A18] focus:border-[#C8A66A]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Occasion Type */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Occasion or Celebration Type
                  </label>
                  <select
                    value={formData.occasionType}
                    onChange={(e) => setFormData({ ...formData, occasionType: e.target.value })}
                    className="w-full bg-[#210404] border border-[#741A18] focus:border-[#C8A66A] text-base sm:text-sm text-[#FFFDF9] px-3.5 py-3 rounded-xs outline-none"
                  >
                    <option value="Imperial Indian Wedding (3-Day)">Imperial Indian Wedding (3-Day)</option>
                    <option value="Sangeet & Musical Extravaganza">Sangeet & Musical Extravaganza</option>
                    <option value="Sacred Engagement & Roka Soirée">Sacred Engagement & Roka Soirée</option>
                    <option value="Royal Reception Gala">Royal Reception Gala</option>
                    <option value="Milestone Jubilee & Anniversary">Milestone Jubilee & Anniversary</option>
                    <option value="Sovereign Corporate Conclave">Sovereign Corporate Conclave</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Preferred Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border border-[#741A18] focus:border-[#C8A66A] outline-none"
                    />
                  </div>
                </div>

                {/* Estimated Guests */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Estimated Guest Count
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min="20"
                      max="3000"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border border-[#741A18] focus:border-[#C8A66A] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                  Ceremonial Directives & Special Wishes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your preference for Vedic rituals, floral colors, culinary traditions (Awadhi, Chettinad, Marwari, Pan-Asian)..."
                  className="w-full bg-[#210404] border border-[#741A18] focus:border-[#C8A66A] text-base sm:text-sm text-[#FFFDF9] p-3.5 rounded-xs outline-none"
                />
              </div>

              {/* Privacy Notice & Live Cloud Status */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#C9B8A5]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A66A]" />
                  <span>Confidential Non-Disclosure Protocol Active</span>
                </div>
                <span className="text-[#C8A66A]/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Concierge Cloud Active · Instant Reference Code</span>
                </span>
              </div>

              {errors.submit && (
                <div className="p-3.5 bg-rose-950/80 border border-rose-500/60 rounded-xs text-rose-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errors.submit}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xs text-xs font-serif uppercase tracking-[0.22em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] hover:shadow-[0_8px_30px_rgba(200,166,106,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmitting Dossier...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#210404]" />
                    <span>Submit Celebration Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
