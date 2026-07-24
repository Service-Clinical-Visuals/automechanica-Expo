import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const CheckIcon = () => (
  <div className="w-6 h-6 rounded-full bg-[#F8AC1A] flex items-center justify-center shrink-0 mt-1">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L5 9L13 1" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function PremiumBrake() {
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
              Premium Brake Pad Solutions
            </h2>
            <p className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2">
              Kale Balata Otomotiv San. ve Tic. A.Ş. manufactures premium brake pads engineered to deliver outstanding braking performance, enhanced safety, and long-lasting durability. Produced with advanced technology and high-quality friction materials, our brake pads meet demanding international standards for a wide range of passenger and commercial vehicles.
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
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 mt-12 items-center">
          
          {/* Left Side: Video/Image */}
          <div className="xl:col-span-8 w-full aspect-video   relative rounded-xl overflow-hidden shadow-lg" data-aos="fade-right">
             <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Side: Features */}
          <div className="xl:col-span-4 flex flex-col justify-between gap-6" data-aos="fade-left">
            
            {/* Feature 1 */}
            <div className="bg-[#181818] rounded-xl p-4 md:p-4 flex flex-col justify-center hover:bg-[#1f1f1f] transition-colors border border-white/5 flex-1">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div className="flex flex-col gap-2">
                  <h4 className="oswald-font text-white card-title font-semibold tracking-wide">Superior Braking Performance</h4>
                  <p className="oswald-font text-white header-link font-normal leading-relaxed tracking-wide">
                    Delivers reliable, responsive stopping power for enhanced safety across diverse driving conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#181818] rounded-xl p-4 md:p-4 flex flex-col justify-center hover:bg-[#1f1f1f] transition-colors border border-white/5 flex-1">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div className="flex flex-col gap-2">
                  <h4 className="oswald-font text-white card-title font-semibold tracking-wide">Advanced Friction Materials</h4>
                  <p className="oswald-font text-white header-link font-normal leading-relaxed tracking-wide">
                    Engineered with premium compounds to ensure stable, consistent braking and reduced wear.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#181818] rounded-xl p-4 md:p-4 flex flex-col justify-center hover:bg-[#1f1f1f] transition-colors border border-white/5 flex-1">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div className="flex flex-col gap-2">
                 <h4 className="oswald-font text-white card-title font-semibold tracking-wide">Reduced Noise & Vibration</h4>
                 <p className="oswald-font text-white header-link font-normal leading-relaxed tracking-wide">
                    Precision-designed to minimize brake noise, vibration, and harshness for greater driving comfort.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
