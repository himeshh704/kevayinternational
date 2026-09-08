import React from 'react';
import { WHY_CHOOSE_US_PILLARS, CONTACT_INFO } from '../data/catalog';
import { HeartHandshake } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest">
            Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917]">
            Why Choose Kevay International?
          </h2>
          <p className="text-sm sm:text-base text-[#6B655B] font-['Plus_Jakarta_Sans']">
            Standing out in the Jodhpur manufacturing hub by providing transparent communication, flexible product development, and dependable bulk production.
          </p>
        </div>

        {/* 7 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white p-7 rounded-2xl border border-[#E6DCB9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#C83E24]/10 text-[#C83E24] flex items-center justify-center font-bold font-['Cinzel'] text-sm group-hover:bg-[#C83E24] group-hover:text-white transition-colors">
                  0{pillar.id}
                </div>

                <h3 className="text-lg font-bold font-['Cinzel'] text-[#1C1917] group-hover:text-[#C83E24] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#6B655B] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* OUR PROMISE Banner */}
        <div className="mt-16 bg-[#C83E24] text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FAF6EE]/90">
            <HeartHandshake size={18} />
            Our Brand Promise
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold font-['Cinzel'] tracking-tight">
            "{CONTACT_INFO.promise}"
          </h3>

          <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto leading-relaxed">
            At KEVAY INTERNATIONAL, we don't simply manufacture furniture—we help brands bring their furniture ideas to life with personal commitment and pride in craftsmanship.
          </p>
        </div>

      </div>
    </section>
  );
};
