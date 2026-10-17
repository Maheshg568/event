import React from 'react';

interface MahotsavaLogoProps {
  variant?: 'full' | 'emblem-only' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
  className?: string;
}

export const MahotsavaEmblemSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="mahotsavaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF9" />
        <stop offset="35%" stopColor="#E9D3B0" />
        <stop offset="75%" stopColor="#C8A66A" />
        <stop offset="100%" stopColor="#A88344" />
      </linearGradient>
      <linearGradient id="mahotsavaGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E9D3B0" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#FFFDF9" stopOpacity="1" />
        <stop offset="100%" stopColor="#C8A66A" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {/* Central Lotus Petal with Silhouette (The abstract human / namaste / flame figure) */}
    {/* Outer central petal envelope */}
    <path
      d="M100 24 C107 42 118 64 116 88 C115 102 108 114 100 118 C92 114 85 102 84 88 C82 64 93 42 100 24 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Negative space cut-out forming the head and upper torso of the human silhouette inside the central petal */}
    {/* Head circle */}
    <circle cx="100" cy="52" r="5" fill="#350606" />

    {/* Torso / inner flame cavity */}
    <path
      d="M100 64 C96 64 93 72 93 84 C93 96 96 105 100 108 C104 105 107 96 107 84 C107 72 104 64 100 64 Z"
      fill="#350606"
    />

    {/* Left Inner Petal */}
    <path
      d="M82 46 C79 66 81 88 88 106 C84 101 80 92 78 80 C76 65 78 52 82 46 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Right Inner Petal */}
    <path
      d="M118 46 C121 66 119 88 112 106 C116 101 120 92 122 80 C124 65 122 52 118 46 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Left Outer Lotus Petal */}
    <path
      d="M62 55 C60 76 66 98 78 112 C72 106 67 96 64 82 C61 68 62 57 62 55 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Right Outer Lotus Petal */}
    <path
      d="M138 55 C140 76 134 98 122 112 C128 106 133 96 136 82 C139 68 138 57 138 55 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Lower Sweeping Base Petals (Lotus Calyx Base with central downward cusp) */}
    {/* Left base sweeping wing */}
    <path
      d="M100 134 C85 125 65 116 42 114 C58 124 76 130 96 132 L100 134 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Right base sweeping wing */}
    <path
      d="M100 134 C115 125 135 116 158 114 C142 124 124 130 104 132 L100 134 Z"
      fill="url(#mahotsavaGoldGrad)"
    />

    {/* Upper sculpted rim on base petals */}
    <path
      d="M44 114 C70 114 90 123 100 130 C110 123 130 114 156 114 C132 124 115 132 100 144 C85 132 68 124 44 114 Z"
      fill="url(#mahotsavaGoldGrad)"
    />
  </svg>
);

export const MahotsavaLogo: React.FC<MahotsavaLogoProps> = ({
  variant = 'full',
  size = 'md',
  showBackground = false,
  className = '',
}) => {
  const sizeMap = {
    sm: {
      emblem: 'w-10 sm:w-12 h-8 sm:h-10',
      text: 'text-sm sm:text-base tracking-[0.16em] sm:tracking-[0.22em]',
      sub: 'text-[8px] sm:text-[9.5px] tracking-[0.22em] sm:tracking-[0.3em]',
      gap: 'gap-1.5',
    },
    md: {
      emblem: 'w-14 sm:w-18 h-11 sm:h-14',
      text: 'text-xl sm:text-2xl tracking-[0.18em] sm:tracking-[0.26em]',
      sub: 'text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em]',
      gap: 'gap-2 sm:gap-2.5',
    },
    lg: {
      emblem: 'w-20 sm:w-28 md:w-36 h-16 sm:h-22 md:h-28',
      text: 'text-2xl sm:text-3xl md:text-4xl tracking-[0.18em] sm:tracking-[0.26em] md:tracking-[0.32em]',
      sub: 'text-[9.5px] sm:text-xs md:text-sm tracking-[0.26em] sm:tracking-[0.35em] md:tracking-[0.45em]',
      gap: 'gap-2.5 sm:gap-3',
    },
    xl: {
      emblem: 'w-28 sm:w-36 md:w-44 lg:w-48 h-22 sm:h-28 md:h-35 lg:h-38',
      text: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.18em] sm:tracking-[0.26em] md:tracking-[0.32em]',
      sub: 'text-[10px] sm:text-xs md:text-sm tracking-[0.28em] sm:tracking-[0.38em] md:tracking-[0.48em]',
      gap: 'gap-2.5 sm:gap-3.5 md:gap-4',
    },
  };

  const currentSize = sizeMap[size];

  if (variant === 'emblem-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MahotsavaEmblemSvg className={currentSize.emblem} />
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
        <MahotsavaEmblemSvg className="w-10 sm:w-12 h-8 sm:h-10 shrink-0" />
        <div className="flex flex-col text-left">
          <span className="font-serif font-bold text-base sm:text-xl tracking-[0.18em] sm:tracking-[0.24em] text-[#E9D3B0] uppercase leading-none">
            MAHOTSAVA
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
            <span className="h-[0.5px] w-3 sm:w-4 bg-[#C8A66A]/60" />
            <span className="font-serif text-[8.5px] sm:text-[10px] tracking-[0.32em] sm:tracking-[0.4em] text-[#C9B8A5] uppercase font-medium">
              GRANDEUR
            </span>
            <span className="h-[0.5px] w-3 sm:w-4 bg-[#C8A66A]/60" />
          </div>
        </div>
      </div>
    );
  }

  // Full stacked brand composition
  return (
    <div
      className={`relative inline-flex flex-col items-center text-center select-none max-w-full px-2 ${currentSize.gap} ${
        showBackground
          ? 'p-6 sm:p-12 rounded-sm bg-burgundy-cloudy border border-[#741A18]/40 shadow-2xl'
          : ''
      } ${className}`}
    >
      {/* Lotus & Silhouette Emblem */}
      <MahotsavaEmblemSvg className={currentSize.emblem} />

      {/* Brand Wordmark: MAHOTSAVA */}
      <div className="mt-1 w-full max-w-full overflow-hidden">
        <h1
          className={`font-serif font-bold uppercase text-[#FFFDF9] ${currentSize.text} leading-tight drop-shadow-sm whitespace-nowrap`}
          style={{
            fontFamily: "'Cormorant Garamond', 'Cinzel', Georgia, serif",
          }}
        >
          MAHOTSAVA
        </h1>
      </div>

      {/* Tagline flanked by thin horizontal rules: — GRANDEUR — */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[380px] opacity-90">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8A66A] to-[#E9D3B0]" />
        <span
          className={`font-serif font-semibold text-[#E9D3B0] uppercase whitespace-nowrap ${currentSize.sub}`}
          style={{
            fontFamily: "'Cinzel', 'Cormorant Garamond', serif",
          }}
        >
          GRANDEUR
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-r from-[#E9D3B0] via-[#C8A66A] to-transparent" />
      </div>
    </div>
  );
};
