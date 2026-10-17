export type EventCategory = 'all' | 'weddings' | 'galas' | 'milestones' | 'retreats';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
  venueExample: string;
  span: string; // for bento layout
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weddings' | 'galas' | 'milestones' | 'retreats';
  categoryLabel: string;
  location: string;
  guestCount: string;
  description: string;
  accentColor: string;
  aspect: string;
  featuredQuote: string;
  gradientTheme: string;
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  isPopular?: boolean;
  idealFor: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  eventTitle: string;
  location: string;
  quote: string;
  rating: number;
}

export type BookingStatus = 'received' | 'confirmed' | 'planning' | 'event_day' | 'completed';

export interface Booking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  destination: string;
  budget: string;
  services: string[];
  status: BookingStatus;
  createdAt: string;
  notes?: string;
  estimatedTotal?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}
