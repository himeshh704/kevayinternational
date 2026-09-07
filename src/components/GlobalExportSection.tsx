import React, { useState } from 'react';
import { Globe, Plane, ShieldAlert, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GlobalExportSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    projectType: 'Commercial Hospitality',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setIsSubmitted(true);
  };

  return (
    <section id="export" className="py-20 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Export Overview */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest">
              Global Logistics & Accreditation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              International B2B <br />
              <span className="text-[#C83E24]">Export Standards</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Kevay International manages door-to-door international shipments across North America, Europe, Middle East, and Asia. All artwork crates undergo ISPM-15 heat-treated wood fumigation and museum-grade shockproof packaging.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <Globe size={22} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">Global Customs Compliance</h4>
                  <p className="text-xs text-[#6B655B]">IEC export license, Certificate of Origin, and Harmonized Tariff Coding provided.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Plane size={22} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">Air & Maritime Freight</h4>
                  <p className="text-xs text-[#6B655B]">FCL/LCL container consolidation with real-time GPS container tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldAlert size={22} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">Insurance & Damage Guarantee</h4>
                  <p className="text-xs text-[#6B655B]">100% transit insured shipment protection with instant replacements for damaged items.</p>
                </div>
              </div>
            </div>

            {/* Destination Flag Pills */}
            <div className="pt-6 border-t border-[#E6DCB9]">
              <span className="text-xs font-semibold text-[#6B655B] uppercase block mb-3">Primary Export Markets</span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1C1917]">
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">🇺🇸 United States</span>
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">🇬🇧 United Kingdom</span>
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">🇦🇪 UAE & GCC</span>
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">🇩🇪 Germany & EU</span>
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">🇦🇺 Australia</span>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form (Matching Reference Aesthetic) */}
          <div id="contact" className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E6DCB9] shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 size={56} className="text-[#C83E24] mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-['Cinzel'] text-[#1C1917]">Inquiry Received!</h3>
                <p className="text-sm text-[#6B655B] max-w-md mx-auto">
                  Thank you for contacting Kevay International. Our export specialist will review your project requirements and respond within 12 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-brush text-xs mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-['Cinzel'] text-[#1C1917]">Request Export Catalog & RFQ</h3>
                  <p className="text-xs text-[#6B655B] mt-1">Get custom wholesale pricing and lead times for your firm.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Company / Studio *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance Luxury Interiors"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@vancedesign.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Destination Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. USA, UK, UAE"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">Project Classification</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                  >
                    <option value="Commercial Hospitality">Commercial Hospitality / Resort</option>
                    <option value="Residential Interior">Luxury Residential Estate</option>
                    <option value="Art Gallery Retail">Art Gallery & Retail Wholesale</option>
                    <option value="Museum Commission">Museum & Heritage Restoration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">Project Notes & Specifications</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on target dimensions, craft categories, or required delivery timeframe..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                  />
                </div>

                <button type="submit" className="btn-brush w-full justify-center">
                  <Send size={16} />
                  <span>Submit Inquiry Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
