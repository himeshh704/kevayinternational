import React from 'react';
import { KevayLogo } from './KevayLogo';
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

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
              <strong>{CONTACT_INFO.company}</strong> — {CONTACT_INFO.tagline}. Based in Tanawara, Jodhpur, we specialize in solid-wood and mixed-material furniture manufacturing for global brands and retail partners.
            </p>
            
            <div className="pt-2 flex items-center gap-4 text-[#E6DCB9]">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C83E24] hover:text-white transition-colors" title="Social Media">
                <Share2 size={18} />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="p-2 bg-white/5 rounded-full hover:bg-[#C83E24] hover:text-white transition-colors" title="Direct Email">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-['Cinzel'] uppercase tracking-wider text-[#C59B27]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E6DCB9]/80">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#C83E24] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#C83E24] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-choose-us')} className="hover:text-[#C83E24] transition-colors">
                  Why Choose Us (7 Pillars)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('who-we-are')} className="hover:text-[#C83E24] transition-colors">
                  Who We Are (Family Legacy)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-[#C83E24] transition-colors">
                  Product Range
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold font-['Cinzel'] uppercase tracking-wider text-[#C59B27]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#E6DCB9]/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C83E24] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#C83E24] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C83E24] shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
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
          <p>© 2026 Kevay International. Crafted for Brands. Designed for Living.</p>
          <div className="flex gap-6">
            <span>Mr. Manan Jangid (Founder & Director)</span>
            <span>Mr. Rajesh Kumar Jangid (Leadership)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
