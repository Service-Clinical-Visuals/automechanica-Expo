import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

const CertificateIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#F8AC1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16">
    <rect x="3" y="4" width="18" height="14" rx="1" />
    <circle cx="16" cy="14" r="2" />
    <path d="M15 15.5l-1.5 3.5l2.5-1l2.5 1l-1.5-3.5" />
    <line x1="7" y1="8" x2="17" y2="8" />
    <line x1="7" y1="12" x2="11" y2="12" />
  </svg>
);

const RibbonSealIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#F8AC1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16">
    <circle cx="12" cy="9" r="6" />
    <path d="M9 13.5l-2.5 7.5l5.5-2l5.5 2l-2.5-7.5" />
    <path d="M10 9l1.5 1.5L14 7" />
  </svg>
);

export default function CertifiedQuality() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-[#2f2f2f]">
      <div className="custom-container relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Watermark */}
        <div className="relative pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Background Watermark Text */}
          <div 
            className="absolute top-0 md:top-[-20px] left-0 kalebalatatext font-normal whitespace-nowrap anton-font pointer-events-none select-none leading-none"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
              color: 'transparent',
              zIndex: -1,
              marginLeft: '-1%'
            }}
          >
            Kale Balata
          </div>

          <div className="flex flex-col gap-4 max-w-4xl relative z-10 mt-8 sm:mt-10 md:mt-12 lg:mt-18" data-aos="fade-up">
            <h2 className="anton-font text-white section-title fonr-normal leading-tight tracking-wide">
              Certified Quality. Proven Performance.
            </h2>
            <p className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2">
              Kale Balata Otomotiv San. ve Tic. A.Ş. manufactures premium brake linings certified to ECE R90 and EAC standards. Backed by advanced production technology, modern R&D capabilities, and decades of manufacturing expertise, we deliver reliable braking solutions for global markets through both our own brand and private label production.
            </p>
          </div>
          
          <button 
          className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-white/39 hover:bg-[#FA9603] flex items-center justify-center transition-colors shrink-0 group relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ArrowUpRight className="text-[#050404] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={28} />
        </button>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 mt-12 items-center">
          
          {/* Left Side: Image */}
          <div className="w-full relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg" data-aos="fade-right">
             <img 
               src="/moto/kalebalata/c1.png" 
               alt="Certified Quality Vehicle" 
               className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
          </div>

          {/* Right Side: Badges & Text */}
          <div className="flex flex-col gap-8" data-aos="fade-left">
            
            {/* Top Row: 3 Badges */}
            <div className="grid grid-cols-3 gap-4">
              
              {/* Badge 1 */}
              <div className="bg-[#181818] border border-white/5 rounded-3xl p-8 flex items-center justify-center aspect-square shadow-sm hover:bg-[#1f1f1f] transition-colors">
                <img src="/moto/kalebalata/c2.png" alt="Badge 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Badge 2 */}
              <div className="bg-[#181818] border border-white/5 rounded-3xl p-8 flex items-center justify-center aspect-square shadow-sm hover:bg-[#1f1f1f] transition-colors">
                <img src="/moto/kalebalata/c3.png" alt="Badge 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Badge 3 */}
             <div className="bg-[#181818] border border-white/5 rounded-3xl p-8 flex items-center justify-center aspect-square shadow-sm hover:bg-[#1f1f1f] transition-colors">
                <img src="/moto/kalebalata/c4.png" alt="Badge 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

            </div>

            {/* Two Paragraphs */}
            <div className="flex flex-col gap-5 text-white/70 oswald-font text-sm md:text-[15px] lg:text-base leading-relaxed tracking-wide">
              <p className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2">
                Kale Balata A.Ş. was established in 1976 in Istanbul Maslak for the production of disc and drum brake linings, and increased its capacity by moving to a 16,000 m² facility in Kocaeli Gebze in 1992.
              </p>
              <p className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2">
                Producing brake linings in full compliance with ECE R90 and EAC standards, the company combines advanced manufacturing technology, modern production facilities, and a strong R&D infrastructure to deliver high-performance, reliable braking solutions. Serving customers across global markets, we offer both our own trusted brand and flexible private label manufacturing, ensuring consistent quality, superior safety, and products that meet the evolving demands of the international automotive industry.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 inline-block">
              <Button text="View Certifications" />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
