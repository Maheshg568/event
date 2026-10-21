import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { submitCustomerOrder } from '../../lib/supabase';
import { sendOrderEmailNotification } from '../../lib/email';
import { siteConfig } from '../../config/siteConfig';
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
  MapPin,
  IndianRupee,
  Instagram,
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
    eventType: initialSpace ? `Celebration (${initialSpace})` : 'Wedding Planning & Management',
    eventDate: '',
    eventLocation: 'Hubballi–Dharwad',
    estimatedBudget: '₹5 Lakhs – ₹10 Lakhs',
    guestCount: '',
    additionalRequirements: '',
    preferredSpace: initialSpace || '',
    preferredSetup: initialSetup || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceId: string;
    submittedAt: string;
  } | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    // Email is optional per requirements
    if (formData.email.trim() && !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.eventType) errs.eventType = 'Please select the type of event';
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

      // Assemble structured metadata into message to ensure zero database schema rejection
      const compiledDirectives = [
        formData.eventLocation ? `Event Location: ${formData.eventLocation}` : '',
        formData.estimatedBudget ? `Estimated Budget: ${formData.estimatedBudget}` : '',
        formData.guestCount ? `Guests: ${formData.guestCount}` : '',
        formData.preferredSpace ? `Preferred Venue: ${formData.preferredSpace} (${formData.preferredSetup})` : '',
        formData.additionalRequirements ? `Requirements: ${formData.additionalRequirements}` : '',
      ]
        .filter(Boolean)
        .join(' | ');

      // 1. Insert customer celebration order directly into Supabase 'orders' table
      await submitCustomerOrder({
        reference_id: refId,
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email || '',
        occasion_type: formData.eventType,
        preferred_date: formData.eventDate || new Date().toISOString().split('T')[0],
        guest_count: Number(formData.guestCount) || 0,
        message: compiledDirectives || 'Standard event inquiry',
        status: 'new',
      });

      // 2. Dispatch instant email notification to mahotsavagrandeur@gmail.com
      sendOrderEmailNotification({
        referenceId: refId,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        occasionType: formData.eventType,
        preferredDate: formData.eventDate || 'To be scheduled',
        eventLocation: formData.eventLocation,
        estimatedBudget: formData.estimatedBudget,
        guestCount: formData.guestCount ? Number(formData.guestCount) : undefined,
        space: formData.preferredSpace,
        setup: formData.preferredSetup,
        message: formData.additionalRequirements,
      }).catch((err) => console.warn('Email dispatch warning:', err));

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
          'Failed to transmit enquiry. Please connect directly via WhatsApp or phone.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-[#210404] text-[#F7F0E6] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E9D3B0]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#E9D3B0] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            <span>CONTACT &amp; EVENT BOOKING</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.04em] text-[#FFFDF9]">
            Plan Your Event <br />
            <span className="gold-text-shimmer italic font-normal font-serif">With Mahotsava Grandeur</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#C9B8A5] font-light max-w-xl mx-auto">
            Share your event vision, dates, and requirements with our team. We plan, coordinate, and execute every occasion with creativity, precision, and grandeur.
          </p>

          {/* Quick WhatsApp Contact Pill */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/916363116158?text=Namaste%20Mahotsava%20Grandeur%2C%20inquiry%20regarding%20event%20planning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-[#0A2614] font-serif text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Instant WhatsApp Enquiry (+91 6363116158)</span>
            </a>

            <a
              href="tel:+916363116158"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#350606] border border-[#C8A66A]/60 text-[#E9D3B0] font-mono text-xs hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A66A]" />
              <span>Call Us: +91 6363116158</span>
            </a>
          </div>
        </div>

        {/* Form Container */}
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
              {/* Checkmark icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C8A66A] bg-[#210404] flex items-center justify-center text-[#E9D3B0] mb-4 sm:mb-6 shadow-[0_0_30px_rgba(200,166,106,0.35)]">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#C8A66A]" />
              </div>

              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A66A] mb-1">
                EVENT ENQUIRY RECEIVED
              </span>
              <h3 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold uppercase text-[#FFFDF9] mb-3 sm:mb-4">
                Thank You, {formData.fullName}
              </h3>

              {/* Reference ID card */}
              <div className="p-3.5 sm:p-4 rounded-xs bg-[#210404] border border-[#C8A66A]/40 inline-flex flex-col items-center mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#C9B8A5] uppercase tracking-wider">
                  Enquiry Reference Code
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#E9D3B0] mt-0.5">
                  {submittedBooking.referenceId}
                </span>
              </div>

              <p className="max-w-md text-xs sm:text-sm text-[#C9B8A5] leading-relaxed mb-6 sm:mb-8 px-2 font-light">
                Our event management team has logged your enquiry for <strong className="text-white">{formData.eventType}</strong> in {formData.eventLocation}. We will connect with you via phone / WhatsApp shortly.
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
                  Submit Another Enquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kulkarni / Dr. Priya Patil"
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

                {/* 2. Phone Number */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
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

                {/* 3. Email Address (Optional) */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Email Address <span className="text-[#C9B8A5] font-normal text-[11px]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com (optional)"
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

                {/* 4. Type of Event */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Type of Event <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#210404] border border-[#741A18] focus:border-[#C8A66A] text-base sm:text-sm text-[#FFFDF9] px-3.5 py-3 rounded-xs outline-none"
                  >
                    <option value="Wedding Planning & Management">A. Wedding Planning &amp; Management</option>
                    <option value="Engagements & Pre-Wedding Celebrations">B. Engagements &amp; Pre-Wedding (Haldi, Mehendi, Sangeet)</option>
                    <option value="Birthday Parties & Private Celebrations">C. Birthday Parties &amp; Private Celebrations</option>
                    <option value="Corporate Events">D. Corporate Events, Summits &amp; Annual Meets</option>
                    <option value="Cultural Events & Mahotsavas">E. Cultural Events, Festivals &amp; Mahotsavas</option>
                    <option value="Concerts & Artist Management">F. Concerts &amp; Celebrity Artist Management</option>
                    <option value="Hospitality & Event Logistics">G. Hospitality &amp; Event Logistics</option>
                    <option value="Stage, Decoration & Production">H. Stage Design, Floral &amp; Production</option>
                    <option value="Inaugurations & Special Occasions">I. Inaugurations, Office Launch &amp; Traditional Rites</option>
                    <option value="Custom Bespoke Celebration">Other Custom Celebration</option>
                  </select>
                </div>

                {/* 5. Event Date */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border border-[#741A18] focus:border-[#C8A66A] outline-none"
                    />
                  </div>
                </div>

                {/* 6. Event Location */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Event Location / City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.eventLocation}
                      onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                      placeholder="e.g. Hubballi–Dharwad, Belagavi, Bengaluru, etc."
                      className="w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border border-[#741A18] focus:border-[#C8A66A] outline-none"
                    />
                  </div>
                </div>

                {/* 7. Estimated Budget */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Estimated Budget Range
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border border-[#741A18] focus:border-[#C8A66A] outline-none"
                    >
                      <option value="Under ₹2 Lakhs">Under ₹2 Lakhs (Intimate / Specific Service)</option>
                      <option value="₹2 Lakhs – ₹5 Lakhs">₹2 Lakhs – ₹5 Lakhs</option>
                      <option value="₹5 Lakhs – ₹10 Lakhs">₹5 Lakhs – ₹10 Lakhs</option>
                      <option value="₹10 Lakhs – ₹25 Lakhs">₹10 Lakhs – ₹25 Lakhs</option>
                      <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                      <option value="₹50 Lakhs+ Grand Scale">₹50 Lakhs+ Grand Scale</option>
                      <option value="Custom / Undecided">Custom / Open to Recommendation</option>
                    </select>
                  </div>
                </div>

                {/* 8. Number of Guests (Optional) */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                    Number of Guests <span className="text-[#C9B8A5] font-normal text-[11px]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#C8A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min="10"
                      max="10000"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      placeholder="e.g. 100, 500, 2000 (optional)"
                      className="w-full bg-[#210404] pl-10 pr-4 py-3 text-base sm:text-sm text-[#FFFDF9] rounded-xs border border-[#741A18] focus:border-[#C8A66A] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* 9. Additional Requirements */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#E9D3B0] mb-1.5 font-semibold">
                  Additional Requirements &amp; Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  placeholder="Tell us about specific decor themes, stage preferences, artist requirements, mandap style, food service coordination..."
                  className="w-full bg-[#210404] border border-[#741A18] focus:border-[#C8A66A] text-base sm:text-sm text-[#FFFDF9] p-3.5 rounded-xs outline-none"
                />
              </div>

              {/* Error notice if submit fails */}
              {errors.submit && (
                <div className="p-3.5 bg-rose-950/80 border border-rose-500/60 rounded-xs text-rose-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errors.submit}</span>
                </div>
              )}

              {/* Action Buttons: Submit Form & WhatsApp Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-4 rounded-xs text-xs font-serif uppercase tracking-[0.22em] font-bold text-[#210404] bg-gradient-to-r from-[#C8A66A] via-[#E9D3B0] to-[#C8A66A] hover:shadow-[0_8px_30px_rgba(200,166,106,0.4)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#210404]" />
                      <span>Submit Event Enquiry</span>
                    </>
                  )}
                </button>

                <a
                  href="https://wa.me/916363116158?text=Namaste%20Mahotsava%20Grandeur%2C%20inquiry%20regarding%20event%20planning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xs text-xs font-serif uppercase tracking-[0.18em] font-bold text-white bg-[#25D366] hover:bg-[#20b858] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Official Contact Details Card */}
              <div className="mt-8 pt-6 border-t border-[#741A18]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#C9B8A5]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E9D3B0] block mb-1">
                    Phone / WhatsApp:
                  </span>
                  <a href="tel:+916363116158" className="hover:text-white font-mono block">
                    +91 6363116158
                  </a>
                  <a href="tel:+918310525917" className="hover:text-white font-mono text-[11px] block mt-0.5">
                    Alt: +91 8310525917
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E9D3B0] block mb-1">
                    Official Email:
                  </span>
                  <a href="mailto:mahotsavagrandeur@gmail.com" className="hover:text-white font-mono break-all">
                    mahotsavagrandeur@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E9D3B0] block mb-1">
                    Operations Hub:
                  </span>
                  <span className="font-light">
                    Hubballi–Dharwad, Karnataka – 580020
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E9D3B0] block mb-1">
                    Instagram:
                  </span>
                  <a
                    href="https://www.instagram.com/mahotsava_grandeur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E9D3B0] flex items-center gap-1 font-mono"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C8A66A]" />
                    <span>@mahotsava_grandeur</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
