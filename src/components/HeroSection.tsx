import React from 'react';
import { ArrowRight, Award, Compass, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

interface HeroProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-[#FAF6EE]">
      {/* Background Concentric Arches Overlay */}
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full border border-[#C83E24]/10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full border border-[#C83E24]/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6DCB9]/40 border border-[#C59B27]/30 text-xs font-semibold text-[#1C1917] tracking-wider uppercase">
              <Sparkles size={14} className="text-[#C83E24]" />
              Jodhpur Furniture Manufacturing & Sampling
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Cinzel'] text-[#1C1917] leading-[1.15] tracking-tight">
              Crafted for Brands. <br />
              <span className="text-[#C83E24]">Designed for Living.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B655B] max-w-2xl font-['Plus_Jakarta_Sans'] leading-relaxed">
              <strong>{CONTACT_INFO.tagline}</strong>. We partner with furniture brands, retailers, architects, and interior designers to develop and manufacture distinctive solid-wood and mixed-material furniture—from concept and sampling to reliable bulk production.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onExplore} className="btn-brush group">
                <span>View Product Range</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#about"
                className="btn-brush-secondary"
              >
                <Compass size={18} />
                <span>Our Manufacturing Process</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="pt-6 border-t border-[#E6DCB9]/60 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl font-bold font-['Cinzel'] text-[#1C1917]">Concept</span>
                <span className="text-xs text-[#6B655B]">To Finished Furniture</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-['Cinzel'] text-[#1C1917]">Solid Wood</span>
                <span className="text-xs text-[#6B655B]">& Mixed Materials</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-['Cinzel'] text-[#1C1917]">Jodhpur</span>
                <span className="text-xs text-[#6B655B]">Manufacturing Hub</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Terracotta Backdrop Glow */}
            <div className="absolute -top-6 -right-6 w-72 h-72 sm:w-96 sm:h-96 bg-[#C83E24] rounded-full opacity-90 filter blur-3xl z-0" />

            <div className="relative z-10 w-full max-w-md bg-[#FAF6EE] p-4 sm:p-6 rounded-3xl border border-[#E6DCB9] shadow-xl overflow-hidden">
              
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F3EBDD] to-[#E6DCB9]/50 p-4 border border-[#E6DCB9]">
                <img
                  src="/assets/jodhpur_dining_chair.png"
                  alt="Solid Teak Dining Chair Artwork"
                  className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#E6DCB9] shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C83E24] text-white flex items-center justify-center font-bold">
                    <Award size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#1C1917] uppercase tracking-wider font-['Cinzel']">
                      Kevay Promise
                    </span>
                    <span className="text-[11px] text-[#6B655B]">Your Design. Our Craftsmanship.</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-[#C83E24] tracking-widest uppercase">
                  Product Development & Bulk Production
                </span>
                <p className="text-xs text-[#6B655B] mt-0.5">
                  Dining Chairs, Tables, Sideboards, Consoles & Custom Seating
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
