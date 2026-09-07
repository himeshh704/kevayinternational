import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FramesProps {
  onSelectCategory: (cat: string) => void;
  onOpenInquiry: () => void;
}

export const FramesCollectionSection: React.FC<FramesProps> = ({
  onSelectCategory,
  onOpenInquiry
}) => {
  return (
    <section id="frames" className="py-20 bg-[#F3EBDD]/60 border-y border-[#E6DCB9]/80 relative overflow-hidden">
      
      {/* Background Subtle Circles */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#C83E24]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Asymmetric Frame Showcase Grid (Matching Reference Image 1 Section 2) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
              
              {/* Left Column Frames */}
              <div className="space-y-4 sm:space-y-6">
                
                {/* Frame 1: Wood Carved Frame */}
                <div className="frame-wood rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-transform">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/assets/wood_carved_frame.png"
                      alt="Carved Wood Picture Frame"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#1C1917]/80 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      Teak Carved
                    </span>
                  </div>
                </div>

                {/* Frame 2: Minimal Mahogany Frame */}
                <div className="frame-minimal rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-transform">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/assets/minimal_modern_frame.png"
                      alt="Minimalist Mahogany Oriental Art Frame"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#C83E24] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      Gold Leafing
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column Frames */}
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                
                {/* Frame 3: Gold Filigree Frame (Tall Highlight) */}
                <div className="frame-gold rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-transform shadow-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src="/assets/gold_filigree_frame.png"
                      alt="Victorian Gold Filigree Frame"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-semibold font-['Cinzel']">
                        24K Gold Leaf Filigree
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Text Description Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C83E24] uppercase tracking-widest">
              <Sparkles size={14} />
              New Arrivals 2026
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              Frames <br />
              <span className="text-[#C83E24]">Collection</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Every frame created by Kevay International is a sculpted monument of tradition. Hand-carved from teakwood, brass, and gold leafing, our frames protect and accentuate fine artwork for art galleries, museums, and private estates worldwide.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#1C1917] font-medium">
                <ShieldCheck size={18} className="text-[#C83E24]" />
                <span>Custom Dimensions & Enterprise OEM Finishing</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1C1917] font-medium">
                <ShieldCheck size={18} className="text-[#C83E24]" />
                <span>Termite-Proof Treated Solid Teak & Brass Alloys</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button onClick={onOpenInquiry} className="btn-brush">
                Inquire Frames Collection
              </button>
              
              <button
                onClick={() => onSelectCategory('Filigree Frames')}
                className="inline-flex items-center gap-1 text-sm font-bold text-[#1C1917] hover:text-[#C83E24] underline underline-offset-4 transition-colors"
              >
                <span>Explore All Frames</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
