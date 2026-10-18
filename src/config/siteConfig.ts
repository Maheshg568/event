export interface LeaderMember {
  id: string;
  name: string;
  role: string;
  title: string;
  quote: string;
  bio: string;
  image?: string;
  signature?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  scope: string[];
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  eyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  businessCategory: string;
  primaryMarket: string;
  expansionGoal: string;
  vision: string;
  mission: string;
  brandPromise: string;
  whyChooseUs: string[];
  coreValues: CoreValue[];
  contact: {
    inquiryEmail: string;
    conciergePhone: string;
    alternativePhone: string;
    whatsappNumber: string;
    locationCity: string;
    state: string;
    pinCode: string;
    officeAddress: string;
    operatingHours: string;
  };
  navigation: {
    label: string;
    href: string;
    pageId: 'home' | 'story' | 'venue' | 'celebrations' | 'gallery' | 'contact';
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
  leadership: LeaderMember[];
}

export const siteConfig: SiteConfig = {
  brandName: 'MAHOTSAVA GRANDEUR',
  tagline: 'Where Every Celebration Becomes Grandeur',
  eyebrow: 'EVENT MANAGEMENT & CELEBRATION PLANNING',
  heroHeadline: 'Where Every Celebration Becomes Grandeur',
  heroDescription:
    'Hubballi–Dharwad’s premier event management brand, delivering unforgettable weddings, cultural mahotsavas, corporate summits, and bespoke celebrations with refined elegance and meticulous execution.',
  businessCategory: 'Event Management & Celebration Planning',
  primaryMarket: 'Hubballi–Dharwad and North Karnataka',
  expansionGoal: 'Across Karnataka and beyond',
  vision:
    'To establish Mahotsava Grandeur as one of Karnataka’s most trusted and recognised event management brands, known for creativity, professionalism, premium experiences and outstanding coordination.',
  mission:
    'To transform our clients’ ideas into memorable experiences through innovative planning, reliable vendor partnerships, personalised service and meticulous attention to detail.',
  brandPromise:
    'At Mahotsava Grandeur, we believe every celebration deserves a distinctive identity. From intimate gatherings to grand celebrations, we bring creativity, coordination and attention to detail together to create experiences that people cherish for years to come.',
  whyChooseUs: [
    'Personalised planning tailored to each client’s unique vision.',
    'Creative concepts with an authentic, premium aesthetic.',
    'Coordinated end-to-end vendor and event management.',
    'Thoughtful focus on guest hospitality and seamless logistics.',
    'Transparent, professional communication and organised execution.',
    'Flexible event solutions crafted for celebrations of all scales.',
  ],
  coreValues: [
    { title: 'Creativity', description: 'Bringing distinctive, bespoke ideas to every single celebration.' },
    { title: 'Professionalism', description: 'Maintaining rigorous standards of planning, decor, and execution.' },
    { title: 'Reliability', description: 'Building generational trust through accountable, responsible coordination.' },
    { title: 'Attention to Detail', description: 'Ensuring every micro-element elevates the grand guest experience.' },
    { title: 'Hospitality', description: 'Honoring Atithi Devo Bhava—making every guest feel deeply welcomed and revered.' },
    { title: 'Teamwork', description: 'Collaborating seamlessly with clients, master artisans, and vendor partners.' },
    { title: 'Integrity', description: 'Communicating with transparent honesty and punctiliously honouring commitments.' },
  ],
  contact: {
    inquiryEmail: 'mahotsavagrandeur@gmail.com',
    conciergePhone: '+91 6363116158',
    alternativePhone: '+91 8310525917',
    whatsappNumber: '+91 6363116158',
    locationCity: 'Hubballi–Dharwad',
    state: 'Karnataka',
    pinCode: '580020',
    officeAddress: 'Hubballi–Dharwad, Karnataka – 580020, India',
    operatingHours: 'Monday – Sunday, 10:00 AM – 7:00 PM IST',
  },
  navigation: [
    { label: 'Home', href: '#home', pageId: 'home' },
    { label: 'Our Story', href: '#story', pageId: 'story' },
    { label: 'The Venue', href: '#venue', pageId: 'venue' },
    { label: 'Celebrations', href: '#celebrations', pageId: 'celebrations' },
    { label: 'Gallery', href: '#gallery', pageId: 'gallery' },
    { label: 'Contact', href: '#contact', pageId: 'contact' },
  ],
  socials: [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/mahotsava_grandeur?dlrf=Y2tnNHF1Y2hiNnBv',
    },
    {
      platform: 'LinkedIn (Founder)',
      url: 'https://www.linkedin.com/in/rakesh-rathod-179154309?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/916363116158?text=Namaste%20Mahotsava%20Grandeur%2C%20inquiry%20regarding%20event%20planning',
    },
  ],
  leadership: [
    {
      id: 'founder',
      name: 'Rakesh Rathod',
      role: 'Founder & Chairman',
      title: 'Visionary Leader & Creative Strategist',
      quote:
        '“Every celebration has a story. Our vision is to transform that story into an extraordinary experience filled with elegance, emotion and unforgettable memories.”',
      bio: 'Rakesh Rathod is the Founder & Chairman of Mahotsava Grandeur, an event management brand based in Hubballi–Dharwad, Karnataka. Driven by a passion for creativity, hospitality and exceptional celebrations, he aims to build a premium event management brand that delivers memorable experiences through thoughtful planning, attention to detail and professional execution. His long-term vision is to establish Mahotsava Grandeur as a leading name in event management across Karnataka.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://www.linkedin.com/in/rakesh-rathod-179154309?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/mahotsava_grandeur/',
      email: 'mahotsavagrandeur@gmail.com',
    },
    {
      id: 'managing-director',
      name: 'Vaibhav Maddi',
      role: 'Managing Director',
      title: 'Director of Operations, Vendor Partnerships & Guest Experience',
      quote:
        '“Excellence lies in every detail. Our mission is to turn every occasion into a seamless, extraordinary and unforgettable experience.”',
      bio: 'Vaibhav Maddi serves as the Managing Director of Mahotsava Grandeur, an event management brand based in Hubballi–Dharwad, Karnataka. With a focus on operational coordination, vendor partnerships, logistics and guest experience, he contributes to the planning and execution of events. Working alongside the founding leadership, he supports the company’s vision of delivering exceptional celebrations and building a trusted event management brand across Karnataka.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      instagram: 'https://www.instagram.com/mahotsava_grandeur/',
      email: 'mahotsavagrandeur@gmail.com',
    },
  ],
};
