import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'gold';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const KevayLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md'
}) => {
  const color = variant === 'light' ? '#FAF6EE' : variant === 'gold' ? '#C59B27' : '#1C1917';
  
  const scaleMap = {
    sm: { height: '36px', iconSize: 28, titleSize: '0.85rem', subSize: '0.5rem', tracking: '0.25em' },
    md: { height: '48px', iconSize: 38, titleSize: '1.05rem', subSize: '0.6rem', tracking: '0.3em' },
    lg: { height: '64px', iconSize: 52, titleSize: '1.4rem', subSize: '0.75rem', tracking: '0.35em' }
  };
  
  const config = scaleMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none cursor-pointer ${className}`}>
      {/* IK Serif Monogram Logo SVG */}
      <svg
        width={config.iconSize}
        height={config.iconSize * 1.15}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kevay Monogram Logo"
      >
        {/* 'I' Serif Stem */}
        <path
          d="M22 15 H42 V22 H34 V93 H42 V100 H22 V93 H30 V22 H22 Z"
          fill={color}
        />
        {/* 'K' Diagonal Legs intersecting with 'I' */}
        <path
          d="M45 55 L75 18 H90 L56 57 L92 97 H75 L45 61 V100 H38 V15 H45 V55 Z"
          fill={color}
        />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <span
          style={{
            color,
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: config.titleSize,
            letterSpacing: config.tracking,
            lineHeight: 1.1
          }}
        >
          KEVAY
        </span>
        <span
          style={{
            color: variant === 'light' ? '#E6DCB9' : '#6B655B',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: config.subSize,
            letterSpacing: '0.4em',
            marginTop: '2px',
            textTransform: 'uppercase'
          }}
        >
          INTERNATIONAL
        </span>
      </div>
    </div>
  );
};
