import React from 'react';
import type { HandicraftItem } from '../data/catalog';
import { X, ShoppingBag, ShieldCheck, MapPin, Scale, Maximize2 } from 'lucide-react';

interface ProductModalProps {
  item: HandicraftItem | null;
  onClose: () => void;
  onAddToInquiry: (item: HandicraftItem) => void;
  isInInquiry: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  onAddToInquiry,
  isInInquiry
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 drawer-backdrop overflow-y-auto">
      <div className="bg-white rounded-3xl border border-[#E6DCB9] shadow-2xl max-w-3xl w-full overflow-hidden relative animate-float">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1C1917] hover:text-[#C83E24] bg-white/80 rounded-full backdrop-blur-md z-10"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image View */}
          <div className="relative bg-[#FAF6EE] p-6 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-96 object-contain rounded-xl shadow-md"
            />
            {item.tag && (
              <span className="absolute top-6 left-6 bg-[#C83E24] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                {item.tag}
              </span>
            )}
          </div>

          {/* Item Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest">
                {item.category}
              </span>

              <h3 className="text-2xl font-bold font-['Cinzel'] text-[#1C1917]">
                {item.title}
              </h3>

              <p className="text-xs text-[#6B655B] leading-relaxed font-['Plus_Jakarta_Sans']">
                {item.description}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="bg-[#FAF6EE] p-4 rounded-xl space-y-2 border border-[#E6DCB9] text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#6B655B] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#C83E24]" /> Manufacturing Origin
                </span>
                <span className="font-semibold text-[#1C1917]">{item.origin}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B655B] flex items-center gap-1.5">
                  <Maximize2 size={14} className="text-[#C83E24]" /> Standard Dimensions
                </span>
                <span className="font-semibold text-[#1C1917]">{item.dimensions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B655B] flex items-center gap-1.5">
                  <Scale size={14} className="text-[#C83E24]" /> Unit Weight
                </span>
                <span className="font-semibold text-[#1C1917]">{item.weight}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B655B] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#C83E24]" /> Primary Material
                </span>
                <span className="font-semibold text-[#1C1917]">{item.material}</span>
              </div>
            </div>

            {/* Action Row (NO PRICE DISPLAY) */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] text-[#6B655B] uppercase">Export MOQ</span>
                <span className="text-base font-bold font-['Cinzel'] text-[#1C1917]">{item.moq}</span>
              </div>

              <button
                onClick={() => {
                  onAddToInquiry(item);
                  onClose();
                }}
                className="btn-brush text-xs"
              >
                <ShoppingBag size={16} />
                <span>{isInInquiry ? 'Added to Inquiry' : 'Add to Inquiry Bag'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
