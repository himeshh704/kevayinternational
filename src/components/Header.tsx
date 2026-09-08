import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { KevayLogo } from './KevayLogo';
import { CONTACT_INFO } from '../data/catalog';

interface HeaderProps {
  inquiryCount: number;
  wishlistCount: number;
  onOpenInquiry: () => void;
  onSearch: (term: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  inquiryCount,
  wishlistCount,
  onOpenInquiry,
  onSearch,
  activeSection,
  onNavigate
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Who We Are', id: 'who-we-are' },
    { name: 'Product Range', id: 'catalog' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    onNavigate('catalog');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E6DCB9]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div onClick={() => onNavigate('hero')}>
          <KevayLogo size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-[#C83E24] font-bold'
                  : 'text-[#1C1917] hover:text-[#C83E24]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C83E24] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Icons & Contact Direct Link */}
        <div className="flex items-center gap-4">
          
          {/* Quick Call Button */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1917] bg-[#E6DCB9]/50 hover:bg-[#E6DCB9] px-3 py-1.5 rounded-full transition-colors"
          >
            <Phone size={14} className="text-[#C83E24]" />
            <span>{CONTACT_INFO.phone}</span>
          </a>

          {/* Search Toggle */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center bg-white border border-[#E6DCB9] rounded-full px-3 py-1.5 shadow-sm">
                <input
                  type="text"
                  placeholder="Search chair, table, marble..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-36 sm:w-48 bg-transparent text-xs text-[#1C1917] focus:outline-none"
                  autoFocus
                />
                <button type="submit" className="text-[#C83E24] hover:opacity-80">
                  <Search size={16} />
                </button>
                <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-1 text-[#6B655B]">
                  <X size={14} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#1C1917] hover:text-[#C83E24] transition-colors rounded-full hover:bg-black/5"
                title="Search Range"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Wishlist Icon */}
          <button
            onClick={() => onNavigate('catalog')}
            className="relative p-2 text-[#1C1917] hover:text-[#C83E24] transition-colors rounded-full hover:bg-black/5"
            title="Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C83E24] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Inquiry Drawer Toggle */}
          <button
            onClick={onOpenInquiry}
            className="relative p-2 text-[#1C1917] hover:text-[#C83E24] transition-colors rounded-full hover:bg-black/5"
            title="RFQ Cart"
          >
            <ShoppingBag size={20} />
            {inquiryCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C83E24] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] hover:text-[#C83E24]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EE] border-b border-[#E6DCB9] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-base font-medium ${
                activeSection === link.id ? 'text-[#C83E24] font-bold' : 'text-[#1C1917]'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E6DCB9] flex justify-between items-center">
            <button
              onClick={() => {
                onOpenInquiry();
                setIsMobileMenuOpen(false);
              }}
              className="btn-brush text-xs"
            >
              Inquiry Bag ({inquiryCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
