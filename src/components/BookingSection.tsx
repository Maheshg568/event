import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking, BookingStatus } from '../types';
import { Sparkles, Check, ArrowRight, ArrowLeft, Calendar, Users, MapPin, DollarSign, Mail, Phone, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface BookingSectionProps {
  onBookingSubmitted: (booking: Booking) => void;
  onTrackBooking: (bookingId: string) => void;
  initialService?: string;
  initialPackage?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  onBookingSubmitted,
  onTrackBooking,
  initialService,
  initialPackage,
}) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Form State
  const [formData, setFormData] = useState({
    eventType: initialService || 'Royal Wedding (3-Day)',
    eventDate: '2026-11-20',
    guestCount: 250,
    destination: 'Lake Como, Italy',
    budget: initialPackage ? `$${initialPackage}` : '$100,000 - $250,000',
    services: [
      'Spatial Architecture & CAD Design',
      'Artistic Floral Direction',
      'Haute Gastronomie Collaboration',
    ],
    clientName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [shakeFields, setShakeFields] = useState<{ [key: string]: boolean }>({});
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);
  const [isCelebrationActive, setIsCelebrationActive] = useState(false);

  const availableServices = [
    'Spatial Architecture & CAD Design',
    'Artistic Floral Direction & Scenography',
    'Haute Gastronomie Collaboration',
    'Royal Symphony & Headline Booking',
    'Diplomatic Protocol & VIP Protection',
    'Feature-Film Cinematography & Drone Show',
    'Private Aviation & Superyacht Charters',
    'Scent Architecture & Custom Crystalware',
  ];

  const handleServiceToggle = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== svc) };
      } else {
        return { ...prev, services: [...prev.services, svc] };
      }
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!formData.eventType) newErrors.eventType = 'Please specify the event type';
      if (!formData.destination) newErrors.destination = 'Please provide destination city or venue';
      if (formData.guestCount <= 0) newErrors.guestCount = 'Guest count must be at least 1';
    } else if (currentStep === 2) {
      if (formData.services.length === 0) newErrors.services = 'Please select at least 1 bespoke service';
    } else if (currentStep === 3) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Full Name or Title is required';
      if (!formData.email.trim() || !formData.email.includes('@')) {
        newErrors.email = 'Valid email address is required';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Contact telephone is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const shakes: { [key: string]: boolean } = {};
      Object.keys(newErrors).forEach((key) => {
        shakes[key] = true;
      });
      setShakeFields(shakes);
      setTimeout(() => setShakeFields({}), 600);
      return false;
    }

    return true;
  };

  const goToNextStep = () => {
    if (!validateStep(step)) return;
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    // Generate distinctive booking ID
    const randomNum = Math.floor(100 + Math.random() * 900);
    const bookingId = `RA-2026-${randomNum}`;

    const newBooking: Booking = {
      id: bookingId,
      clientName: formData.clientName,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      eventDate: formData.eventDate,
      guestCount: Number(formData.guestCount),
      destination: formData.destination,
      budget: formData.budget,
      services: formData.services,
      status: 'received',
      createdAt: new Date().toISOString().split('T')[0],
      notes: formData.notes,
      estimatedTotal: formData.budget,
    };

    setSubmittedBooking(newBooking);
    setIsCelebrationActive(true);
    onBookingSubmitted(newBooking);

    // Auto-stop heavy celebration particles after 2.5s
    setTimeout(() => {
      setIsCelebrationActive(false);
    }, 2800);
  };

  const resetForm = () => {
    setSubmittedBooking(null);
    setStep(1);
    setFormData({
      eventType: 'Royal Wedding (3-Day)',
      eventDate: '2026-11-20',
      guestCount: 250,
      destination: 'Lake Como, Italy',
      budget: '$100,000 - $250,000',
      services: ['Spatial Architecture & CAD Design', 'Artistic Floral Direction'],
      clientName: '',
      email: '',
      phone: '',
      notes: '',
    });
  };

  // Step transitions
  const stepVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section id="booking" className="relative py-28 bg-[#07080b] text-[#fbf7ee] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#d4af37]/4 blur-[180px] pointer-events-none" />

      {/* Celebration Gold Particles Burst upon successful booking */}
      {isCelebrationActive && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: (Math.random() - 0.5) * window.innerWidth * 0.8,
                y: (Math.random() - 0.5) * window.innerHeight * 0.8,
                scale: Math.random() * 1.5 + 0.5,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: Math.random() * 1.5 + 1.2,
                ease: 'easeOut',
              }}
              className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fae6a6] to-[#d4af37] shadow-[0_0_12px_#d4af37]"
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif tracking-[0.25em] uppercase text-[#d4af37] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>EXECUTIVE CONCIERGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.04em] uppercase text-[#fdfbf7]">
            RESERVE YOUR <span className="gold-gradient-text">OCCASION</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9ca3af] font-light max-w-lg mx-auto">
            Initiate private consultations with our senior creative director. Discrete and strictly confidential.
          </p>
        </div>

        {/* Outer Card Container */}
        <div className="relative rounded-sm border border-[#262838] bg-[#0c0e15] p-6 sm:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]">
          {/* Top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

          {/* If already submitted, show 18. BOOKING SUCCESS ANIMATION */}
          {submittedBooking ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 flex flex-col items-center text-center"
            >
              {/* Checkmark Draws Itself Animation */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* Expanding Glowing Circle */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-full border-2 border-[#d4af37] bg-[#1a1710] shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                />

                {/* Self-drawing SVG checkmark */}
                <svg
                  className="w-12 h-12 text-[#d4af37] relative z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M20 6L9 17L4 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                  />
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] block mb-1">
                  Commission Transmitted
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#fbf7ee]">
                  Booking Request Received
                </h3>

                <div className="mt-4 p-4 rounded bg-[#131520] border border-[#d4af37]/40 inline-flex flex-col items-center">
                  <span className="text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider">
                    Official Reference Code
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#fae6a6] mt-0.5">
                    {submittedBooking.id}
                  </span>
                </div>

                <p className="mt-6 text-sm text-[#9ca3af] max-w-md mx-auto leading-relaxed">
                  Our Managing Director has received your request for <strong className="text-white">{submittedBooking.eventType}</strong> in {submittedBooking.destination}. A formal dossier and call invitation will follow within 4 business hours.
                </p>
              </motion.div>

              {/* Action Buttons: Track Booking / WhatsApp / New */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <button
                  onClick={() => onTrackBooking(submittedBooking.id)}
                  className="px-6 py-3 text-xs font-serif tracking-[0.16em] uppercase font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] to-[#fae6a6] rounded-sm hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg cursor-pointer"
                >
                  Track Booking Timeline
                </button>

                <a
                  href={`https://wa.me/?text=Hello%20RoyalAura%2C%20inquiring%20about%20booking%20${submittedBooking.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-serif tracking-[0.16em] uppercase font-semibold text-[#fbf7ee] hover:text-[#d4af37] border border-[#2e3244] hover:border-[#d4af37]/60 bg-[#12141d] rounded-sm transition-all"
                >
                  WhatsApp Concierge
                </a>

                <button
                  onClick={resetForm}
                  className="px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#6b7280] hover:text-white transition-colors"
                >
                  New Commission
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <div>
              {/* 17. MULTI-STEP PROGRESS INDICATOR */}
              <div className="mb-10">
                <div className="flex items-center justify-between max-w-md mx-auto relative">
                  {/* Connecting background track */}
                  <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-[#1f2230]" />

                  {/* Animated Gold Progress Line */}
                  <motion.div
                    className="absolute top-1/2 left-4 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#fae6a6]"
                    initial={false}
                    animate={{
                      width: `${((step - 1) / 3) * 100}%`,
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Step Nodes */}
                  {[
                    { num: 1, label: 'Vision' },
                    { num: 2, label: 'Services' },
                    { num: 3, label: 'Patron' },
                    { num: 4, label: 'Review' },
                  ].map((node) => {
                    const isPassed = step > node.num;
                    const isCurrent = step === node.num;
                    return (
                      <div key={node.num} className="relative z-10 flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-xs font-bold transition-all duration-300 ${
                            isCurrent
                              ? 'bg-[#d4af37] text-[#090a0d] shadow-[0_0_15px_rgba(212,175,55,0.6)] scale-110'
                              : isPassed
                              ? 'bg-[#1b1810] border border-[#d4af37] text-[#d4af37]'
                              : 'bg-[#141620] border border-[#2b2e3e] text-[#6b7280]'
                          }`}
                        >
                          {isPassed ? <Check className="w-3.5 h-3.5" /> : node.num}
                        </div>
                        <span
                          className={`mt-2 text-[10px] uppercase tracking-wider font-mono transition-colors ${
                            isCurrent
                              ? 'text-[#d4af37] font-semibold'
                              : isPassed
                              ? 'text-[#e5e7eb]'
                              : 'text-[#6b7280]'
                          }`}
                        >
                          {node.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Multi-step Content with Sliding Animation */}
              <div className="overflow-hidden min-h-[340px]">
                <AnimatePresence mode="wait" custom={direction}>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#1f2230] pb-3 mb-6">
                        <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-[#fbf7ee]">
                          Step 1: Event Dimensions & Setting
                        </h3>
                        <p className="text-xs text-[#9ca3af]">
                          Outline the scale, destination, and core nature of your celebration.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Event Type */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                            Celebration Type
                          </label>
                          <select
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            className="w-full bg-[#131520] border border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#fbf7ee] px-4 py-3 rounded-sm outline-none transition-all"
                          >
                            <option value="Royal Wedding (3-Day)">Royal Wedding (3-Day)</option>
                            <option value="Executive Gala & Global Summit">Executive Gala & Global Summit</option>
                            <option value="Private Island Milestone Soirée">Private Island Milestone Soirée</option>
                            <option value="Heritage Palace Conclave">Heritage Palace Conclave</option>
                            <option value="Bespoke Sovereign Celebration">Bespoke Sovereign Celebration</option>
                          </select>
                        </div>

                        {/* Destination */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                            Destination / Desired Venue
                          </label>
                          <div
                            className={`relative ${
                              shakeFields.destination ? 'animate-shake' : ''
                            }`}
                          >
                            <MapPin className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={formData.destination}
                              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                              placeholder="e.g., Lake Como, Monaco, Paris, Udaipur"
                              className={`w-full bg-[#131520] pl-10 pr-4 py-3 text-sm text-[#fbf7ee] rounded-sm outline-none border transition-all ${
                                errors.destination
                                  ? 'border-red-500'
                                  : 'border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                              }`}
                            />
                          </div>
                          {errors.destination && (
                            <span className="text-[11px] text-red-400 mt-1 block">
                              {errors.destination}
                            </span>
                          )}
                        </div>

                        {/* Event Date */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                            Anticipated Date
                          </label>
                          <div className="relative">
                            <Calendar className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="date"
                              value={formData.eventDate}
                              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                              className="w-full bg-[#131520] pl-10 pr-4 py-3 text-sm text-[#fbf7ee] rounded-sm border border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                            />
                          </div>
                        </div>

                        {/* Guest Count */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                            Estimated Guest Count
                          </label>
                          <div className="relative">
                            <Users className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="number"
                              min="10"
                              max="3000"
                              value={formData.guestCount}
                              onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                              className="w-full bg-[#131520] pl-10 pr-4 py-3 text-sm text-[#fbf7ee] rounded-sm border border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                          Production Budget Framework
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#131520] border border-[#2a2e40] focus:border-[#d4af37] text-sm text-[#fbf7ee] px-4 py-3 rounded-sm outline-none"
                        >
                          <option value="$50,000 - $100,000">$50,000 - $100,000 (Signature Intimate)</option>
                          <option value="$100,000 - $250,000">$100,000 - $250,000 (Royal Grandeur)</option>
                          <option value="$250,000 - $500,000">$250,000 - $500,000 (Imperial Multi-Day)</option>
                          <option value="$500,000+">$500,000+ (Sovereign Bespoke / Island Takeover)</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#1f2230] pb-3 mb-6">
                        <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-[#fbf7ee]">
                          Step 2: Bespoke Services & Elements
                        </h3>
                        <p className="text-xs text-[#9ca3af]">
                          Select the disciplines you wish RoyalAura to orchestrate.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {availableServices.map((svc) => {
                          const isSelected = formData.services.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => handleServiceToggle(svc)}
                              className={`p-4 rounded-sm border text-left transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                                isSelected
                                  ? 'border-[#d4af37] bg-[#1a1710] text-[#fbf7ee] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                                  : 'border-[#262838] bg-[#12141d] text-[#9ca3af] hover:border-[#3d4257]'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-sm flex items-center justify-center mt-0.5 border ${
                                  isSelected
                                    ? 'border-[#d4af37] bg-[#d4af37] text-[#090a0d]'
                                    : 'border-[#393d50]'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="text-xs font-serif tracking-wide">{svc}</span>
                            </button>
                          );
                        })}
                      </div>

                      {errors.services && (
                        <span className="text-xs text-red-400 block">{errors.services}</span>
                      )}
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#1f2230] pb-3 mb-6">
                        <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-[#fbf7ee]">
                          Step 3: Patron Confidential Information
                        </h3>
                        <p className="text-xs text-[#9ca3af]">
                          All communications remain protected under standard non-disclosure protocol.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                            Full Name / Title
                          </label>
                          <div className={`relative ${shakeFields.clientName ? 'animate-shake' : ''}`}>
                            <User className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={formData.clientName}
                              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                              placeholder="e.g., Lady Victoria Sterling"
                              className={`w-full bg-[#131520] pl-10 pr-4 py-3 text-sm text-[#fbf7ee] rounded-sm outline-none border transition-all ${
                                errors.clientName
                                  ? 'border-red-500'
                                  : 'border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                              }`}
                            />
                          </div>
                          {errors.clientName && (
                            <span className="text-[11px] text-red-400 mt-1 block">
                              {errors.clientName}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                            Private Email
                          </label>
                          <div className={`relative ${shakeFields.email ? 'animate-shake' : ''}`}>
                            <Mail className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="v.sterling@domain.com"
                              className={`w-full bg-[#131520] pl-10 pr-4 py-3 text-sm text-[#fbf7ee] rounded-sm outline-none border transition-all ${
                                errors.email
                                  ? 'border-red-500'
                                  : 'border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                          Telephone (Direct / Assistant)
                        </label>
                        <div className={`relative ${shakeFields.phone ? 'animate-shake' : ''}`}>
                          <Phone className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+44 20 7946 0912"
                            className={`w-full bg-[#131520] pl-10 pr-4 py-3 text-sm text-[#fbf7ee] rounded-sm outline-none border transition-all ${
                              errors.phone
                                ? 'border-red-500'
                                : 'border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-2">
                          Bespoke Notes & Special Invocations
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Include dietary directives, secret security requests, or private artist preferences..."
                          className="w-full bg-[#131520] border border-[#2a2e40] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#fbf7ee] p-4 rounded-sm outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#1f2230] pb-3 mb-6">
                        <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-[#fbf7ee]">
                          Step 4: Review & Transmit Commission
                        </h3>
                        <p className="text-xs text-[#9ca3af]">
                          Please verify your commission dossier before transmitting to our directors.
                        </p>
                      </div>

                      <div className="bg-[#12141e] border border-[#242738] rounded-sm p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-[#9ca3af] font-mono block">Event Type</span>
                            <span className="font-serif font-bold text-[#fbf7ee] text-sm mt-0.5 block">
                              {formData.eventType}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9ca3af] font-mono block">Setting / Destination</span>
                            <span className="font-serif font-bold text-[#fbf7ee] text-sm mt-0.5 block">
                              {formData.destination}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9ca3af] font-mono block">Anticipated Date</span>
                            <span className="font-serif font-bold text-[#fbf7ee] text-sm mt-0.5 block">
                              {formData.eventDate}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9ca3af] font-mono block">Estimated Guests</span>
                            <span className="font-serif font-bold text-[#fbf7ee] text-sm mt-0.5 block">
                              {formData.guestCount} Patrons
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9ca3af] font-mono block">Budget Framework</span>
                            <span className="font-serif font-bold text-[#d4af37] text-sm mt-0.5 block">
                              {formData.budget}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9ca3af] font-mono block">Patron Contact</span>
                            <span className="font-serif font-bold text-[#fbf7ee] text-sm mt-0.5 block">
                              {formData.clientName} ({formData.phone})
                            </span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#1d202e]">
                          <span className="text-[#9ca3af] font-mono text-xs block mb-2">
                            Selected Disciplines ({formData.services.length})
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {formData.services.map((s, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-mono text-[#cbd5e1] bg-[#1a1c29] px-2.5 py-1 rounded border border-[#2b2e40]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="mt-10 pt-6 border-t border-[#1c1f2d] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="px-5 py-2.5 text-xs font-serif uppercase tracking-wider text-[#9ca3af] hover:text-[#fbf7ee] border border-[#282b3a] rounded-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="px-7 py-3 text-xs font-serif uppercase tracking-[0.16em] font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] to-[#fae6a6] rounded-sm hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Proceed to Step {step + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-8 py-3.5 text-xs font-serif uppercase tracking-[0.18em] font-bold text-[#090a0d] bg-gradient-to-r from-[#d4af37] via-[#fae6a6] to-[#d4af37] rounded-sm hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2.5 shadow-[0_4px_25px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#090a0d]" />
                    <span>Transmit Commission Request</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
