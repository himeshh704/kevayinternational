import { Building2, Users } from 'lucide-react';

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
              Direct In-House Manufacturer
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              15+ Years of Jodhpur <br />
              <span className="text-[#C83E24]">Solid Wood Excellence</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Based in Tanawara, Jodhpur — the handicraft capital of India — Kevay International operates 4 dedicated factory units with 50+ master woodworkers. For over 15 years, we have been trusted OEM suppliers to premier furniture brands like Urban Ladder, luxury resorts, and international exporters.
            </p>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm flex items-start gap-3">
                <Building2 size={24} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">4 Factory Manufacturing Units</h4>
                  <p className="text-xs text-[#6B655B] mt-1">Seasoning, woodcarving, lathe-turning & upholstery</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm flex items-start gap-3">
                <Users size={24} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">50+ Generational Artisans</h4>
                  <p className="text-xs text-[#6B655B] mt-1">Master woodcraft & precision joinery expertise</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button onClick={onOpenInquiry} className="btn-brush">
                <span>Request B2B Factory Catalog</span>
              </button>
            </div>
          </div>

          {/* Right Graphic Collage Illustration */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Background Graphic Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-[#E6DCB9]/60 rounded-full z-0" />
            <div className="absolute top-4 right-10 w-24 h-24 bg-[#C83E24]/10 rounded-2xl rotate-12 z-0" />

            {/* Showcase Card */}
            <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-3xl border border-[#E6DCB9] shadow-2xl overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F9F4EC] to-[#E6DCB9]">
                <img
                  src="/assets/lounge_accent_chair.png"
                  alt="Sheesham Wood Leather Lounge Chair"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-[#1C1917] text-white text-xs font-bold font-['Cinzel'] px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <span className="text-[#C59B27] font-bold">15+ Yrs</span>
                  <span>Urban Ladder Supplier</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">Sheesham & Teak Lounge Seating</h3>
                <p className="text-xs text-[#6B655B]">Hand-carved armrests with top-grain cognac leather upholstery</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
