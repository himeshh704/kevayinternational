import React from 'react';
import { STATS } from '../data/catalog';

export const StatsBannerSection: React.FC = () => {
  return (
    <section className="bg-[#C83E24] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-2xl">
      
      {/* Abstract Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FAF6EE 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        
        {/* Banner Headline */}
        <div>
          <span className="text-xs uppercase tracking-widest text-[#FAF6EE]/80 font-bold">
            Worldwide B2B & Retail Distribution
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Cinzel'] mt-2 text-white">
            Exporting Unique Heritage Handicrafts & Artworks
          </h2>
        </div>

        {/* 4 Counter Columns with Vertical Dividers (Matching Reference Image 1 Section 3) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="pt-6 md:pt-0 px-4 text-center space-y-2">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90">
                {stat.label}
              </h3>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Cinzel'] tracking-tight text-[#FAF6EE]">
                {stat.count}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
