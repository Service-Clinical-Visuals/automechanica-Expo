import React from 'react';
import Button from './Button';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';

export default function MaximumPerformance() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="custom-container">
        
        {/* Top Part: Video and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-start">
          
          {/* Left: Video */}
          <div className="order-2 lg:order-1 lg:col-span-8 lg:row-span-2 xl:row-span-1 2xl:row-span-2 w-full aspect-[16/10] rounded-sm overflow-hidden shadow-md" data-aos="fade-right">
             <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          {/* Right Top: Title & Content */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col xl:self-center 2xl:self-start" data-aos="fade-left">
            <h2 className="teko-font font-semibold text-[#333333] section-title mb-4 tracking-wide ">
              Engineered For Maximum Performance
            </h2>
            
            <hr className="border-t border-gray-200 mb-6 w-full" />
            
            <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed lg:mb-0 xl:mb-0 2xl:mb-0 mb-8">
              At AMB Oils UAB, every engine oil is carefully formulated to meet the evolving demands of modern engines. Combining innovative lubricant technology with rigorous quality control, our products provide exceptional protection, improved efficiency, and reliable performance, ensuring engines operate smoothly and efficiently throughout extended service intervals.
            </p>
          </div>

          {/* Right Bottom (on lg/2xl) / Full Width Bottom (on xl): Bullet Points & Button */}
          <div className="order-3 lg:col-span-4 lg:col-start-9 xl:col-span-12 xl:col-start-1 2xl:col-span-4 2xl:col-start-9 flex flex-col" data-aos="fade-up">
            <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-1 gap-5 xl:gap-8 2xl:gap-5 mb-10 lg:mt-6 xl:mt-2 2xl:mt-6">
              
              {/* List Item 1 */}
              <div className="flex items-start gap-3">
                <svg className="w-[20px] h-[20px] text-[#C99843] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                  Premium Base Oil Technology – Manufactured using carefully selected base oils for consistent lubrication and long-lasting protection.
                </p>
              </div>

              {/* List Item 2 */}
              <div className="flex items-start gap-3">
                <svg className="w-[20px] h-[20px] text-[#C99843] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                  Advanced Additive System – Protects critical engine components against oxidation, corrosion, and excessive wear under heavy loads.
                </p>
              </div>

              {/* List Item 3 */}
              <div className="flex items-start gap-3">
                <svg className="w-[20px] h-[20px] text-[#C99843] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                  Reliable All-Season Performance – Delivers dependable lubrication and stable performance in both extreme heat and cold conditions.
                </p>
              </div>

            </div>

            <div className="flex xl:justify-center 2xl:justify-start">
              <Button href="#" variant="withArrow">
                Explore Product
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 mb-12 w-full" />

        {/* Bottom Part: Text and Circle Button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8" data-aos="fade-up">
          <div className="max-w-7xl">
            <h3 className="teko-font font-semibold text-[#333333] section-text1 mb-3 tracking-wide leading-tight">
              Advanced Lubrication Technology
            </h3>
            <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed ">
              At AMB Oils UAB, every engine oil is engineered with advanced lubricant technology and premium base oils to provide exceptional engine protection, improved efficiency, and long-lasting reliability. Designed to meet the demands of modern engines, our formulations help reduce wear, maintain engine cleanliness, and deliver consistent performance in every driving condition.
            </p>
          </div>
          
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <a href="#" className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C99843] flex items-center justify-center hover:bg-[#b08436] transition-colors group shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
