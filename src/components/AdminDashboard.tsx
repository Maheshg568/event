import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking, BookingStatus } from '../types';
import {
  LayoutDashboard,
  Calendar,
  Users,
  DollarSign,
  Bell,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  FileText,
  ChevronDown,
  X,
  Menu,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onUpdateStatus: (bookingId: string, newStatus: BookingStatus) => void;
  onGenerateInvoice: (booking: Booking) => void;
  onToast: (title: string, message: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  bookings,
  onUpdateStatus,
  onGenerateInvoice,
  onToast,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'confirmed' | 'planning' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 'n1', text: 'New commission dossier received: Aria & Devendra Singhania', time: '10m ago', unread: true },
    { id: 'n2', text: 'Lake Como villa contract countersigned by Countess Sophia', time: '1h ago', unread: true },
    { id: 'n3', text: 'Michelin culinary lineup approved for Monte Carlo Gala', time: '3h ago', unread: false },
  ]);

  if (!isOpen) return null;

  // Filter Bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.destination.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return b.status === 'received';
    if (activeTab === 'confirmed') return b.status === 'confirmed';
    if (activeTab === 'planning') return b.status === 'planning';
    if (activeTab === 'completed') return b.status === 'completed';
    return true;
  });

  const totalBookingsCount = bookings.length;
  const pendingCount = bookings.filter((b) => b.status === 'received').length;
  const confirmedCount = bookings.filter((b) => b.status === 'confirmed').length;
  const planningCount = bookings.filter((b) => b.status === 'planning').length;
  const completedCount = bookings.filter((b) => b.status === 'completed').length;

  const handleStatusChange = (bookingId: string, newStatus: BookingStatus) => {
    onUpdateStatus(bookingId, newStatus);
    onToast('Status Updated', `Booking ${bookingId} transitioned to ${newStatus.toUpperCase()}`);
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const unreadNotificationsCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="fixed inset-0 z-50 flex bg-[#07080a] text-[#e5e7eb] overflow-hidden">
      {/* 21. ADMIN SIDEBAR (Responsive drawer on mobile, static on desktop) */}
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-30 lg:hidden backdrop-blur-xs"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed lg:static top-0 bottom-0 left-0 w-64 bg-[#0a0c12] border-r border-[#1a1d29] z-40 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Logo Brand */}
          <div className="p-6 border-b border-[#181a24] flex items-center justify-between">
            <div>
              <span className="font-serif text-lg font-bold tracking-[0.2em] uppercase text-[#fbf7ee] block">
                ROYALAURA
              </span>
              <span className="text-[10px] tracking-[0.3em] font-mono text-[#d4af37] uppercase">
                ADMIN CONCIERGE
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-[#9ca3af] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-serif tracking-wider uppercase transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#181a26] text-[#d4af37] border-l-2 border-[#d4af37]'
                  : 'text-[#9ca3af] hover:text-white hover:bg-[#12141e]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4 text-[#d4af37]" />
                All Commissions
              </span>
              <span className="text-[10px] font-mono bg-[#1f2233] px-2 py-0.5 rounded text-[#cbd5e1]">
                {totalBookingsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pending')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-serif tracking-wider uppercase transition-colors ${
                activeTab === 'pending'
                  ? 'bg-[#181a26] text-[#d4af37] border-l-2 border-[#d4af37]'
                  : 'text-[#9ca3af] hover:text-white hover:bg-[#12141e]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                Pending Review
              </span>
              <span className="text-[10px] font-mono bg-[#1f2233] px-2 py-0.5 rounded text-amber-400">
                {pendingCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('confirmed')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-serif tracking-wider uppercase transition-colors ${
                activeTab === 'confirmed'
                  ? 'bg-[#181a26] text-[#d4af37] border-l-2 border-[#d4af37]'
                  : 'text-[#9ca3af] hover:text-white hover:bg-[#12141e]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Confirmed
              </span>
              <span className="text-[10px] font-mono bg-[#1f2233] px-2 py-0.5 rounded text-emerald-400">
                {confirmedCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('planning')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-serif tracking-wider uppercase transition-colors ${
                activeTab === 'planning'
                  ? 'bg-[#181a26] text-[#d4af37] border-l-2 border-[#d4af37]'
                  : 'text-[#9ca3af] hover:text-white hover:bg-[#12141e]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-sky-400" />
                In Production
              </span>
              <span className="text-[10px] font-mono bg-[#1f2233] px-2 py-0.5 rounded text-sky-400">
                {planningCount}
              </span>
            </button>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#181a24] flex items-center justify-between text-xs text-[#6b7280]">
          <span className="font-mono">Security Level: Tier 1</span>
          <button
            onClick={onClose}
            className="text-[#d4af37] hover:underline font-serif uppercase tracking-wider"
          >
            Exit Portal
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Bar with Search & Notifications */}
        <header className="p-4 sm:p-6 border-b border-[#1a1d29] bg-[#090b10] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-[#9ca3af] hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative max-w-xs sm:max-w-md w-full">
              <Search className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by client, ID, city..."
                className="w-full bg-[#11131c] pl-10 pr-4 py-2 text-xs rounded text-[#fbf7ee] placeholder-[#6b7280] border border-[#202330] focus:border-[#d4af37] outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 relative">
            {/* 23. NOTIFICATION BADGE & DRAWER */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative p-2.5 rounded-full bg-[#12141e] border border-[#222533] hover:border-[#d4af37] text-[#9ca3af] hover:text-white cursor-pointer"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadNotificationsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0.7 }}
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d4af37] text-[#090a0d] text-[9px] font-bold flex items-center justify-center font-mono shadow-[0_0_8px_#d4af37]"
                  >
                    {unreadNotificationsCount}
                  </motion.span>
                )}
              </button>

              {/* Notification Drawer (slides down from top/right) */}
              <AnimatePresence>
                {notificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 top-12 w-80 sm:w-96 rounded-sm bg-[#0e1017] border border-[#2b2f40] shadow-2xl z-50 p-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[#1c1f2b] mb-3">
                      <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#fbf7ee]">
                        Concierge Notifications
                      </span>
                      {unreadNotificationsCount > 0 && (
                        <button
                          onClick={markAllNotificationsRead}
                          className="text-[10px] text-[#d4af37] hover:underline"
                        >
                          Mark all read
                        </button>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      {notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`p-2.5 rounded text-xs transition-colors ${
                            n.unread
                              ? 'bg-[#181a26] border-l-2 border-[#d4af37] text-white'
                              : 'bg-[#11131a] text-[#9ca3af]'
                          }`}
                        >
                          <p>{n.text}</p>
                          <span className="text-[10px] font-mono text-[#6b7280] mt-1 block">
                            {n.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Close Portal Button */}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-serif uppercase tracking-wider font-bold text-[#090a0d] bg-[#d4af37] hover:bg-[#fae6a6] rounded-sm transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8 space-y-8 max-w-7xl">
          {/* 20. STATISTIC CARDS (Staggered Animation) */}
          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { label: 'Total Commissions', value: totalBookingsCount, change: '+18% MoM', icon: Calendar, color: 'text-white' },
              { label: 'Pending Review', value: pendingCount, change: 'Action Required', icon: Clock, color: 'text-amber-400' },
              { label: 'Active In Planning', value: planningCount, change: '3D CAD Stage', icon: Sparkles, color: 'text-sky-400' },
              { label: 'Confirmed Retained', value: confirmedCount, change: 'Contract Signed', icon: CheckCircle2, color: 'text-emerald-400' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-5 rounded-sm bg-[#0d0f16] border border-[#202330] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9ca3af]">
                    {stat.label}
                  </span>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-serif text-3xl font-bold text-[#fbf7ee] tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-[#d4af37]">
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 22. ADMIN TABLE WITH LIVE STATUS TRANSITION */}
          <div className="rounded-sm border border-[#202330] bg-[#0c0e15] overflow-hidden">
            <div className="p-5 border-b border-[#1b1e2a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-[#fbf7ee]">
                  Real-Time Event Dossiers
                </h3>
                <span className="text-xs text-[#9ca3af] font-mono">
                  Showing {filteredBookings.length} registered VIP commissions
                </span>
              </div>

              {/* Status filter buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {(['all', 'pending', 'confirmed', 'planning', 'completed'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-[#d4af37] text-[#090a0d] font-bold'
                        : 'bg-[#141620] text-[#9ca3af] hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#10121a] text-[#9ca3af] uppercase font-mono tracking-wider border-b border-[#1a1d29]">
                  <tr>
                    <th className="px-5 py-3.5">ID / Client</th>
                    <th className="px-5 py-3.5">Event Type</th>
                    <th className="px-5 py-3.5">Setting & Date</th>
                    <th className="px-5 py-3.5">Guests</th>
                    <th className="px-5 py-3.5">Status Transition</th>
                    <th className="px-5 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#181a24]">
                  <AnimatePresence mode="popLayout">
                    {filteredBookings.map((b) => (
                      <motion.tr
                        key={b.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-[#121520] transition-colors"
                      >
                        <td className="px-5 py-4">
                          <span className="font-mono text-[#d4af37] font-bold block">
                            {b.id}
                          </span>
                          <span className="text-sm font-serif font-bold text-white block mt-0.5">
                            {b.clientName}
                          </span>
                          <span className="text-[11px] text-[#9ca3af]">{b.email}</span>
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-white font-serif">{b.eventType}</span>
                          <span className="text-[11px] text-[#9ca3af] block font-mono">
                            Budget: {b.budget}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-[#cbd5e1] block">{b.destination}</span>
                          <span className="text-[11px] text-[#9ca3af] font-mono">{b.eventDate}</span>
                        </td>

                        <td className="px-5 py-4 font-mono text-[#cbd5e1]">
                          {b.guestCount}
                        </td>

                        {/* Interactive Status Switcher with smooth transition badge */}
                        <td className="px-5 py-4">
                          <select
                            value={b.status}
                            onChange={(e) =>
                              handleStatusChange(b.id, e.target.value as BookingStatus)
                            }
                            className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider font-semibold outline-none cursor-pointer border transition-all ${
                              b.status === 'received'
                                ? 'bg-amber-950/40 text-amber-300 border-amber-700/50'
                                : b.status === 'confirmed'
                                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-700/50'
                                : b.status === 'planning'
                                ? 'bg-sky-950/40 text-sky-300 border-sky-700/50'
                                : 'bg-purple-950/40 text-purple-300 border-purple-700/50'
                            }`}
                          >
                            <option value="received">Received</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="planning">Planning</option>
                            <option value="event_day">Event Day</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={() => onGenerateInvoice(b)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-serif uppercase tracking-wider rounded border border-[#2b2f42] text-[#cbd5e1] hover:text-[#d4af37] hover:border-[#d4af37]/60 bg-[#141622] transition-colors"
                          >
                            <FileText className="w-3 h-3 text-[#d4af37]" />
                            <span>Invoice</span>
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
