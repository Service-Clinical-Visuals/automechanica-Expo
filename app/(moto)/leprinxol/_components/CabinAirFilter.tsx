import React from 'react';
import Button from './Button';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Wrench } from 'lucide-react';

export default function CabinAirFilter() {
  return (
    <section className="py-16 md:py-24 bg-[#0D3374] text-white bg-[url('/moto/leprinxol/bg.png')] bg-center bg-cover">
      <div className="custom-container">
        {/* Title Section */}
       
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left: Text Content */}
          <div data-aos="fade-right" className="xl:col-span-5 flex flex-col xl:justify-center 2xl:justify-start gap-5 text-[#ffffff] ">
            <div className="flex flex-col ">
              <h3 className="section-title text-white font-bold">
                Premium Engine Oil Performance
              </h3>
              <span className="block w-45 h-[2px] bg-[#ffffff]/80" />
            </div>
            <p className=" !section-text sora-font font-normal text-[#ffffff] leading-[1.8]">
              The portfolio includes both standard lubricants and specialised products for particularly demanding automotive and industrial applications. In addition to classic mineral oil-based variants, sustainable solutions are increasingly being developed, including biodegradable lubricants based on renewable raw materials and high-performance synthetic products.
            </p>

            <div className="flex flex-col gap-6 xl:hidden 2xl:flex">
              {/* Feature 1 */}
              <div className="flex flex-col gap-2">
                <h4 className="section-title-2 text-white font-semibold sora-font">
                  Advanced Engine Protection
                </h4>
                <p className="text-[#ffffff] header-sublink sora-font font-normal leading-relaxed">
                 Provides a durable lubricating film that minimizes friction and protects critical engine components from wear, ensuring reliable long-term performance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-2">
                <h4 className="section-title-2 text-white font-semibold sora-font">
                  Superior Thermal Stability
                </h4>
                <p className="text-[#ffffff] header-sublink sora-font font-normal leading-relaxed">
                  Maintains consistent viscosity under high temperatures, helping prevent oil breakdown and ensuring optimal engine performance in demanding conditions.
                </p>
              </div>
            </div>

            <div className="mt-2 xl:hidden 2xl:block">
              <Button href="#" variant="outline-white" size="large" className="font-small">
            Explore Engine Oils
          </Button>
            </div>
          </div>
          
          {/* Right: Video Section */}
          <div data-aos="fade-left" className="xl:col-span-7 w-full relative aspect-video flex items-center justify-center rounded-3xl shadow-lg overflow-hidden mt-8 xl:mt-0 ">
             
                      
             {/* Dynamic Video overlayed on top if present */}
             <DynamicVideoPlayer 
                type="360"
                className="absolute inset-0 w-full h-full object-cover z-10"
             />
            
            
          </div>
          
          {/* Full Width Features & Button specifically for XL screens (1280px to 1535px, includes 1440px) */}
          <div className="hidden xl:flex 2xl:hidden flex-col lg:col-span-12 gap-8 mt-6" data-aos="fade-up">
            <div className="flex flex-row justify-between w-full gap-10">
              {/* Feature 1 */}
              <div className="flex flex-col gap-2 w-1/2">
                <h4 className="!card-title text-white font-semibold">
                  Reliable OEM-Fit Performance
                </h4>
                <p className="text-[#ffffff] section-text sora-font">
                  It helps maintain consistent airflow while reducing dust, allergens, and unpleasant
                  odors. Its durable construction and OEM-fit design ensure long-lasting performance,
                  making it a dependable choice for comfortable, clean, and healthy driving in all
                  conditions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-2 w-1/2">
                <h4 className="!card-title text-white font-semibold">
                  Advanced Particle &amp; Odor Control
                </h4>
                <p className="text-[#ffffff] section-text sora-font">
                  High-efficiency filtration captures dust, pollen, soot, and other airborne particles,
                  while activated carbon variants help minimize unpleasant odors and harmful gases for
                  a cleaner cabin environment.
                </p>
              </div>
            </div>

            <div className="mt-2 flex justify-start">
              <Button href="#" variant="solid-white">
                Explore Products
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
