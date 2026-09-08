import React from 'react';
import { CATEGORIES } from '../data/catalog';
import type { HandicraftItem } from '../data/catalog';
import { Eye, Plus, Check, Heart, ShieldCheck } from 'lucide-react';

interface CatalogProps {
  items: HandicraftItem[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onQuickView: (item: HandicraftItem) => void;
  onAddToInquiry: (item: HandicraftItem) => void;
  onToggleWishlist: (itemId: string) => void;
  wishlistIds: string[];
  inquiryItemIds: string[];
}

export const CatalogSection: React.FC<CatalogProps> = ({
  items,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToInquiry,
  onToggleWishlist,
  wishlistIds,
  inquiryItemIds
}) => {
  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 bg-[#F3EBDD]/40 border-t border-[#E6DCB9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest">
            B2B Manufacturing Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917]">
            Product Range & Material Showcase
          </h2>
          <p className="text-sm sm:text-base text-[#6B655B] font-['Plus_Jakarta_Sans']">
            Explore our solid-wood and mixed-material range. Request B2B pricing, custom dimensions, and prototype sampling for your brand.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#C83E24] text-white shadow-md'
                  : 'bg-white text-[#1C1917] border border-[#E6DCB9] hover:border-[#C83E24] hover:text-[#C83E24]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog Items Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isWishlisted = wishlistIds.includes(item.id);
            const isInInquiry = inquiryItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E6DCB9] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#FAF6EE] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge Tag */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 bg-[#C83E24] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {item.tag}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(item.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                      isWishlisted ? 'bg-[#C83E24] text-white' : 'bg-white/80 text-[#1C1917] hover:bg-white hover:text-[#C83E24]'
                    }`}
                    title="Add to Wishlist"
                  >
                    <Heart size={16} fill={isWishlisted ? '#FFFFFF' : 'none'} />
                  </button>

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => onQuickView(item)}
                      className="bg-white text-[#1C1917] text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 hover:bg-[#FAF6EE] shadow-lg"
                    >
                      <Eye size={14} />
                      Quick Specs
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-[#6B655B]">
                      <span className="font-semibold text-[#C83E24]">{item.category}</span>
                      <span className="font-semibold text-[#C59B27]">{item.origin}</span>
                    </div>

                    <h3 className="text-lg font-bold font-['Cinzel'] text-[#1C1917] line-clamp-1 group-hover:text-[#C83E24] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#6B655B] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spec Row */}
                  <div className="pt-3 border-t border-[#E6DCB9]/60 flex items-center justify-between text-xs text-[#1C1917]">
                    <div>
                      <span className="block text-[10px] text-[#6B655B] uppercase">Dimensions</span>
                      <span className="font-medium">{item.dimensions}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-[#6B655B] uppercase">Export MOQ</span>
                      <span className="font-medium text-[#C83E24]">{item.moq}</span>
                    </div>
                  </div>

                  {/* Action Buttons (NO PRICE DISPLAY) */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1 text-xs text-[#6B655B] font-semibold">
                      <ShieldCheck size={16} className="text-[#C83E24]" />
                      <span>Custom B2B OEM</span>
                    </div>

                    <button
                      onClick={() => onAddToInquiry(item)}
                      className={`btn-brush py-2.5 px-4 text-xs ${
                        isInInquiry ? 'bg-[#1C1917] hover:bg-[#332E2A]' : ''
                      }`}
                    >
                      {isInInquiry ? (
                        <>
                          <Check size={14} />
                          <span>In Inquiry Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus size={14} />
                          <span>Add to RFQ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
