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
  const scaleMap = {
    sm: { height: '38px' },
    md: { height: '54px' },
    lg: { height: '72px' }
  };

  const config = scaleMap[size];

  return (
    <div className={`inline-flex items-center select-none cursor-pointer transition-transform hover:scale-102 ${className}`}>
      <img
        src="/assets/kevay_logo.jpg"
        alt="Kevay International Logo"
        style={{
          height: config.height,
          width: 'auto',
          objectFit: 'contain',
          borderRadius: '6px',
          // If in dark footer, invert slightly or keep clean
          filter: variant === 'light' ? 'brightness(1.1) contrast(1.05)' : 'none',
          mixBlendMode: variant === 'dark' ? 'multiply' : 'normal'
        }}
      />
    </div>
  );
};
