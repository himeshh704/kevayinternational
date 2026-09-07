import React from 'react';
import { Palette, Layers, Award } from 'lucide-react';

interface SpotlightProps {
  onOpenInquiry: () => void;
}

export const ArtisanSpotlightSection: React.FC<SpotlightProps> = ({ onOpenInquiry }) => {
  return (
    <section id="artisan" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest">
              Bespoke Artisan Guild
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              Discover Your <br />
              <span className="text-[#C83E24]">Ideal Artwork</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Every client has a unique architectural vision. Whether you require grand scale brass peacock sculptures for a palace entry, custom gilded wood frames for a luxury hotel suite, or marble inlay tables, Kevay International turns conceptual sketches into physical masterpieces.
            </p>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm flex items-start gap-3">
                <Palette size={24} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">Custom Color & Metal Finishes</h4>
                  <p className="text-xs text-[#6B655B] mt-1">Match exact pantone shades & antique patinas</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm flex items-start gap-3">
                <Layers size={24} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">Architectural CAD Integration</h4>
                  <p className="text-xs text-[#6B655B] mt-1">Scale engineering for hospitality projects</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button onClick={onOpenInquiry} className="btn-brush">
                <span>Commission Custom Craft</span>
              </button>
            </div>
          </div>

          {/* Right Graphic Collage Illustration (Matching Reference Image 1 Section 4) */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Background Graphic Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-[#E6DCB9]/60 rounded-full z-0" />
            <div className="absolute top-4 right-10 w-24 h-24 bg-[#C83E24]/10 rounded-2xl rotate-12 z-0" />

            {/* Collage Graphic Figure Card */}
            <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-3xl border border-[#E6DCB9] shadow-2xl overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F9F4EC] to-[#E6DCB9]">
                <img
                  src="/assets/surreal_artisan_figure.png"
                  alt="Surrealist Artisan Figure in Chevron Suit"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-[#1C1917] text-white text-xs font-bold font-['Cinzel'] px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <Award size={14} className="text-[#C59B27]" />
                  <span>Artisanal Heritage</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">The Visionary Craftsman</h3>
                <p className="text-xs text-[#6B655B]">Merging tradition with avant-garde modern design aesthetics</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
