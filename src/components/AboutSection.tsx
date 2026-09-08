import React from 'react';
import { Sparkles, CheckCircle2, Factory } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const materials = [
    'Solid Wood (Teak, Sheesham, Acacia, Mango)',
    'Natural Wood Veneers',
    'Marble & Natural Stone Inlays',
    'Premium Surface Finishes & Patinas',
    'Custom Upholstery (Leather, Velvet, Cane)',
    'Metal Detailing & Brass Accents'
  ];

  return (
    <section id="about" className="py-20 bg-[#F3EBDD]/60 border-y border-[#E6DCB9]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              About Kevay International
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              Crafted for Brands. <br />
              <span className="text-[#C83E24]">Designed for Living.</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              <strong>KEVAY INTERNATIONAL</strong> is a Jodhpur-based furniture manufacturing company specializing in the development and production of premium solid wood and mixed-material furniture.
            </p>

            <p className="text-sm text-[#6B655B] leading-relaxed">
              Located in the heart of one of India's most renowned furniture manufacturing hubs, we combine skilled craftsmanship with contemporary design and modern manufacturing capabilities. We work closely with furniture brands, retailers, architects, interior designers, and buyers to transform design concepts into high-quality, production-ready furniture.
            </p>

            {/* Goal Highlight Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#E6DCB9] shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">Our Mission & Goal</span>
              <p className="text-sm font-semibold font-['Cinzel'] text-[#1C1917] leading-snug">
                "To become a reliable manufacturing partner for furniture brands looking for quality craftsmanship, flexible customization, and dependable production."
              </p>
            </div>

            {/* Materials Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                Materials & Finishing Expertise:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#1C1917]">
                {materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#C83E24] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E6DCB9] shadow-xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#C83E24]/10 text-[#C83E24] flex items-center justify-center">
              <Factory size={26} />
            </div>

            <h3 className="text-xl font-bold font-['Cinzel'] text-[#1C1917]">
              From Concept to Bulk Production
            </h3>

            <p className="text-xs text-[#6B655B] leading-relaxed">
              From initial sketches, CAD drawings, or reference imagery to prototype sampling and final containerized bulk production, KEVAY INTERNATIONAL provides complete end-to-end manufacturing management.
            </p>

            <div className="pt-4 border-t border-[#E6DCB9] space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#6B655B]">Manufacturing Hub</span>
                <span className="font-bold text-[#1C1917]">Jodhpur, Rajasthan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B655B]">Product Scope</span>
                <span className="font-bold text-[#1C1917]">Chairs, Tables, Consoles, Seating</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B655B]">Customization</span>
                <span className="font-bold text-[#C83E24]">Full OEM / Custom Specs</span>
              </div>
            </div>

            <a href="#contact" className="btn-brush w-full justify-center text-xs">
              <span>Partner With Us</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
