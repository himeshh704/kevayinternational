import { KevayLogo } from './KevayLogo';
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1917] text-[#FAF6EE] pt-16 pb-12 border-t border-[#C59B27]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Bio Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-[#FAF6EE] px-3 py-2 rounded-xl border border-[#E6DCB9] shadow-sm">
              <KevayLogo variant="dark" size="lg" />
            </div>
            <p className="text-xs text-[#E6DCB9]/80 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-md pt-2">
              Kevay International is a premier global exporter of luxury handcrafted art, carved wooden frames, brass metalwork, and heritage sculptures. Dedicated to preserving authentic Indian craftsmanship for international enterprise projects.
            </p>
            
            <div className="pt-2 flex items-center gap-4 text-[#E6DCB9]">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C83E24] hover:text-white transition-colors" title="Social Media">
                <Share2 size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C83E24] hover:text-white transition-colors" title="Direct Contact">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-['Cinzel'] uppercase tracking-wider text-[#C59B27]">
              Portfolio Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#E6DCB9]/80">
              <li>
                <button onClick={() => onNavigate('frames')} className="hover:text-[#C83E24] transition-colors">
                  Carved Teakwood Frames
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-[#C83E24] transition-colors">
                  Victorian Gold Filigree
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-[#C83E24] transition-colors">
                  Brass & Meenakari Sculptures
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-[#C83E24] transition-colors">
                  Pietra Dura Marble Inlay
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('export')} className="hover:text-[#C83E24] transition-colors">
                  B2B Wholesale Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold font-['Cinzel'] uppercase tracking-wider text-[#C59B27]">
              International Export Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#E6DCB9]/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C83E24] shrink-0 mt-0.5" />
                <span>Export House, Industrial Art Zone, Rajasthan 302022, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#C83E24] shrink-0" />
                <span>exports@kevayinternational.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C83E24] shrink-0" />
                <span>+91 98290 12345 / +1 (800) 555-KEVAY</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe size={16} className="text-[#C83E24] shrink-0" />
                <span className="font-semibold text-white">www.kevayinternational.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6DCB9]/60">
          <p>© 2026 Kevay International. All rights reserved. Registered Export House.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Export Terms & Conditions</a>
            <a href="#" className="hover:underline">Fumigation Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
