import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO } from '../data/catalog';

export const GlobalExportSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    projectType: 'Furniture Retailer / Brand',
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
    <section id="contact" className="py-20 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Direct Contact Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest">
              Direct Contact & B2B Inquiries
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              Get in Touch <br />
              <span className="text-[#C83E24]">With Our Team</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              Whether you require a customized collection, product development support, or regular bulk production for an established furniture range, we work flexibly according to your requirements.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm hover:border-[#C83E24] transition-colors">
                <Phone size={22} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold text-[#6B655B] uppercase">Direct Phone / WhatsApp</h4>
                  <span className="text-base font-bold font-['Cinzel'] text-[#1C1917]">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm hover:border-[#C83E24] transition-colors">
                <Mail size={22} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold text-[#6B655B] uppercase">Official Business Email</h4>
                  <span className="text-base font-bold font-['Cinzel'] text-[#1C1917]">{CONTACT_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E6DCB9] shadow-sm">
                <MapPin size={22} className="text-[#C83E24] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold text-[#6B655B] uppercase">Manufacturing Hub & Address</h4>
                  <span className="text-sm font-bold font-['Cinzel'] text-[#1C1917]">{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Destination Flag Pills */}
            <div className="pt-4 border-t border-[#E6DCB9]">
              <span className="text-xs font-semibold text-[#6B655B] uppercase block mb-3">Serving Global Buyers</span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1C1917]">
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">Furniture Brands</span>
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">Retailers & Distributors</span>
                <span className="px-3 py-1 bg-white border border-[#E6DCB9] rounded-full">Architects & Interior Designers</span>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E6DCB9] shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 size={56} className="text-[#C83E24] mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-['Cinzel'] text-[#1C1917]">Inquiry Sent to Mr. Manan Jangid!</h3>
                <p className="text-sm text-[#6B655B] max-w-md mx-auto">
                  Thank you for reaching out to KEVAY INTERNATIONAL. Our team will review your specs and contact you at {formData.email} shortly.
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
                  <h3 className="text-xl font-bold font-['Cinzel'] text-[#1C1917]">Start Your Manufacturing Inquiry</h3>
                  <p className="text-xs text-[#6B655B] mt-1">Discuss sampling, CAD specs, or bulk production timeline.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Company / Brand *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Urban Home Furniture"
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
                      placeholder="john@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">Location / Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. USA, UK, UAE, India"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">Client Category</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                  >
                    <option value="Furniture Retailer / Brand">Furniture Retailer / Brand</option>
                    <option value="Architect / Interior Designer">Architect / Interior Designer</option>
                    <option value="Hospitality Resort Buyer">Hospitality & Resort Buyer</option>
                    <option value="Wholesale Distributor">Wholesale Importer / Distributor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">Project Notes & CAD Specifications</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on target product ranges, solid wood species, upholstery, or sampling deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E6DCB9] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C83E24]"
                  />
                </div>

                <button type="submit" className="btn-brush w-full justify-center">
                  <Send size={16} />
                  <span>Submit Inquiry to Kevay International</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
