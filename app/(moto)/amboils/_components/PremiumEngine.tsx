import React from 'react';
import Button from './Button';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';

export default function PremiumEngine() {
  return (
    <section className="w-full bg-[#241F21] py-16 lg:py-24 overflow-hidden">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10" data-aos="fade-up">
          <div className="max-w-6xl">
            <h2 className="teko-font font-semibold text-[#ffffff] section-title mb-4 tracking-wide ">
              Premium Engine Oil Solutions
            </h2>
            <p className="oswald-font font-normal text-white section-text leading-relaxed">
              Explore AMB Oils UAB Engine Oil from every angle and discover the quality, innovation, and performance behind every bottle, engineered for maximum protection, superior efficiency, exceptional durability, and reliable performance in every journey.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 lg:mt-0">
            <Button href="#" variant="withArrow">
              View Specifications
            </Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/40 mb-12 w-full" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 360 Video Left (Spans 8 columns on xl, 9 on 2xl) */}
          <div className="xl:col-span-8 2xl:col-span-9 w-full aspect-video overflow-hidden" data-aos="fade-right">
             <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>

          {/* Key Features Right (Spans 4 columns on xl, 3 on 2xl) */}
          <div className="xl:col-span-4 2xl:col-span-3 flex flex-col justify-center " data-aos="fade-left">
            <h3 className="teko-font font-bold text-white section-text1 mb-6 tracking-wide ">
              Key Features
            </h3>
            
            <div className="flex flex-col gap-4">
              
              {/* Feature 1 */}
              <div className="border border-white/80 rounded-2xl p-5 flex items-start gap-4 transition-colors hover:border-[#C99843]/50 hover:bg-white/5">
                <svg className="w-[24px] h-[24px] text-[#C99843] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-white section-text  leading-relaxed">
                  Superior Engine Protection – Reduces wear and extends engine life.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border border-white/80 rounded-2xl p-5 flex items-start gap-4 transition-colors hover:border-[#C99843]/50 hover:bg-white/5">
                <svg className="w-[24px] h-[24px] text-[#C99843] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-white section-text  leading-relaxed">
                  Excellent Thermal Stability – Performs reliably in extreme temperatures.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border border-white/80 rounded-2xl p-5 flex items-start gap-4 transition-colors hover:border-[#C99843]/50 hover:bg-white/5">
                <svg className="w-[24px] h-[24px] text-[#C99843] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-white section-text  leading-relaxed">
                  Enhanced Fuel Efficiency – Helps optimize engine performance and economy.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="border border-white/80 rounded-2xl p-5 flex items-start gap-4 transition-colors hover:border-[#C99843]/50 hover:bg-white/5">
                <svg className="w-[24px] h-[24px] text-[#C99843] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-white section-text  leading-relaxed">
                  Deposit & Sludge Control – Keeps engines cleaner for longer service life.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
