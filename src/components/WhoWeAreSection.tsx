import React from 'react';
import { Award, Sparkles, UserCheck, Shield } from 'lucide-react';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section id="who-we-are" className="py-20 bg-[#F3EBDD]/40 border-t border-[#E6DCB9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Family Legacy Overview */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#C83E24] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} />
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cinzel'] text-[#1C1917] leading-tight">
              A Family Legacy. <br />
              <span className="text-[#C83E24]">A Modern Vision.</span>
            </h2>

            <p className="text-base text-[#6B655B] font-['Plus_Jakarta_Sans'] leading-relaxed">
              KEVAY INTERNATIONAL is a family-driven furniture business built on a foundation of craftsmanship, dedication, and a passion for creating exceptional furniture.
            </p>

            {/* Leadership Profiles */}
            <div className="space-y-4 pt-2">
              
              {/* Leader 1: Mr. Rajesh Kumar Jangid */}
              <div className="p-5 rounded-2xl bg-white border border-[#E6DCB9] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center font-bold shrink-0 mt-1">
                  <Shield size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-['Cinzel'] text-[#1C1917]">
                    Mr. Rajesh Kumar Jangid
                  </h4>
                  <span className="text-xs font-semibold text-[#C83E24] block">
                    Leadership & Craft Heritage
                  </span>
                  <p className="text-xs text-[#6B655B] leading-relaxed pt-1">
                    Guided by the experience and leadership of Mr. Rajesh Kumar Jangid, our family business represents a strong connection to traditional furniture craftsmanship and manufacturing values.
                  </p>
                </div>
              </div>

              {/* Leader 2: Mr. Manan Jangid */}
              <div className="p-5 rounded-2xl bg-white border border-[#E6DCB9] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C83E24]/20 text-[#C83E24] flex items-center justify-center font-bold shrink-0 mt-1">
                  <UserCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-['Cinzel'] text-[#1C1917]">
                    Mr. Manan Jangid
                  </h4>
                  <span className="text-xs font-semibold text-[#C83E24] block">
                    Founder & Director
                  </span>
                  <p className="text-xs text-[#6B655B] leading-relaxed pt-1">
                    Leading the business with a modern and progressive approach—combining traditional craftsmanship with contemporary design, product development, and global market requirements.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Quote & Legacy Card */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E6DCB9] shadow-2xl relative space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C59B27]">
              <Award size={18} />
              Heritage Quote
            </div>

            <blockquote className="text-lg sm:text-xl font-semibold font-['Cinzel'] text-[#1C1917] leading-relaxed border-l-4 border-[#C83E24] pl-4 italic">
              "At KEVAY INTERNATIONAL, we are not simply building furniture. We are building a legacy of craftsmanship—shaped by experience, driven by innovation, and created for the future."
            </blockquote>

            <div className="pt-4 border-t border-[#E6DCB9] space-y-2 text-xs text-[#6B655B]">
              <p>
                Together, we bring experience, innovation, and personal commitment to every stage of our work. As a family-run business, we believe that strong relationships, attention to detail, and pride in craftsmanship are the foundations of long-term success.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
