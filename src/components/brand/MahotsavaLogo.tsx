import React from 'react';

export interface MahotsavaLogoProps {
  variant?: 'full' | 'emblem-only' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
  className?: string;
  alt?: string;
}

/**
 * Sacred Lotus Insignia
 */
export const MahotsavaEmblemSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <img
    src="/images/brand/mahotsava-emblem.png?v=2"
    alt="Mahotsava Lotus Emblem"
    className={`${className} object-contain`}
    loading="eager"
  />
);

export const MahotsavaLogo: React.FC<MahotsavaLogoProps> = ({
  variant = 'full',
  size = 'md',
  showBackground = false,
  className = '',
  alt = 'Mahotsava Grandeur',
}) => {
  // Size specifications for each layout variant
  const sizeMap = {
    sm: {
      full: 'w-40 sm:w-48',
      horizontal: 'h-7 sm:h-8',
      emblem: 'w-8 h-8 sm:w-10 sm:h-10',
    },
    md: {
      full: 'w-56 sm:w-64 md:w-72',
      horizontal: 'h-9 sm:h-11 md:h-12',
      emblem: 'w-12 h-12 sm:w-14 sm:h-14',
    },
    lg: {
      full: 'w-72 sm:w-88 md:w-96',
      horizontal: 'h-13 sm:h-16',
      emblem: 'w-20 h-20 sm:w-24 sm:h-24',
    },
    xl: {
      full: 'w-72 sm:w-96 md:w-[460px] lg:w-[500px]',
      horizontal: 'h-16 sm:h-20',
      emblem: 'w-28 h-28 sm:w-36 sm:h-36',
    },
  };

  const currentSize = sizeMap[size];

  // 1. Emblem only variant (Icon / Badge / Mobile)
  if (variant === 'emblem-only') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <img
          src="/images/brand/mahotsava-emblem.png?v=2"
          alt={alt}
          className={`${currentSize.emblem} object-contain drop-shadow-[0_2px_12px_rgba(200,166,106,0.3)] transition-transform duration-300 hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  // 2. Horizontal lockup variant (Navbar / Footer / Header)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/brand/mahotsava-horizontal.png?v=2"
          alt={alt}
          className={`${currentSize.horizontal} w-auto object-contain drop-shadow-[0_2px_8px_rgba(200,166,106,0.25)] transition-all duration-300 hover:brightness-105`}
          loading="eager"
        />
      </div>
    );
  }

  // 3. Full stacked authentic logo artwork variant with background
  if (showBackground) {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none max-w-full overflow-hidden rounded-sm border border-[#741A18]/50 shadow-[0_12px_40px_rgba(33,4,4,0.8)] ${className}`}
      >
        <img
          src="/images/brand/mahotsava-logo-card.jpg?v=2"
          alt={alt}
          className={`${currentSize.full} h-auto object-contain block`}
          loading="eager"
        />
      </div>
    );
  }

  // Default Full Stacked: Clean transparent gold insignia & typography
  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center text-center select-none max-w-full px-2 ${className}`}
    >
      <img
        src="/images/brand/mahotsava-logo-gold.png?v=2"
        alt={alt}
        className={`${currentSize.full} h-auto object-contain drop-shadow-[0_4px_25px_rgba(200,166,106,0.35)] filter hover:brightness-110 transition-all duration-300`}
        loading="eager"
      />
    </div>
  );
};
