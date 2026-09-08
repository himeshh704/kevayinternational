import React, { useState } from 'react';
import type { HandicraftItem } from '../data/catalog';
import { X, Trash2, Send, CheckCircle2, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: HandicraftItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll
}) => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden drawer-backdrop">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EE] border-l border-[#E6DCB9] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E6DCB9] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#C83E24]" />
              <h3 className="text-lg font-bold font-['Cinzel'] text-[#1C1917]">
                RFQ Inquiry Bag ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#1C1917] hover:text-[#C83E24] rounded-full hover:bg-black/5"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 size={64} className="text-[#C83E24] mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold font-['Cinzel'] text-[#1C1917]">RFQ Submitted!</h4>
                <p className="text-xs text-[#6B655B]">
                  Your request for quotation has been sent to Kevay International export managers. We will email your proforma invoice and lead times shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClearAll();
                    onClose();
                  }}
                  className="btn-brush text-xs mt-4"
                >
                  Close & Done
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <ShoppingBag size={48} className="text-[#E6DCB9] mx-auto" />
                <h4 className="text-base font-bold font-['Cinzel'] text-[#1C1917]">Your Inquiry Bag is Empty</h4>
                <p className="text-xs text-[#6B655B] max-w-xs mx-auto">
                  Browse our product range and click "Add to RFQ" to request B2B pricing and prototype sampling.
                </p>
              </div>
            ) : (
              <>
                {/* Selected Items List */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-[#6B655B] uppercase">
                    <span>Selected Range</span>
                    <button
                      onClick={onClearAll}
                      className="text-[#C83E24] hover:underline text-[11px]"
                    >
                      Clear All
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-3 rounded-xl border border-[#E6DCB9] flex items-center justify-between gap-3 shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-lg bg-[#FAF6EE]"
                      />
                      <div className="flex-1 text-left space-y-0.5">
                        <h5 className="text-xs font-bold font-['Cinzel'] text-[#1C1917] line-clamp-1">
                          {item.title}
                        </h5>
                        <p className="text-[10px] text-[#6B655B]">
                          MOQ: {item.moq} | {item.dimensions}
                        </p>
                        <span className="text-[11px] font-semibold text-[#C83E24]">Custom B2B Quote</span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#6B655B] hover:text-[#C83E24]"
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* RFQ Form Inputs */}
                <form onSubmit={handleSubmit} className="pt-4 border-t border-[#E6DCB9] space-y-3">
                  <h4 className="text-xs font-bold font-['Cinzel'] uppercase text-[#1C1917]">
                    Client Inquiry Details
                  </h4>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white border border-[#E6DCB9] rounded-lg px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Business Email *"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-white border border-[#E6DCB9] rounded-lg px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-white border border-[#E6DCB9] rounded-lg px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Special customization notes or target delivery date..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-[#E6DCB9] rounded-lg px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <button type="submit" className="btn-brush w-full justify-center text-xs">
                    <Send size={16} />
                    <span>Send RFQ Quote Request</span>
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
