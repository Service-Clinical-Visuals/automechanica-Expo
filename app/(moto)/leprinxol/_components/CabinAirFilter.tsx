import React from 'react';
import Button from './Button';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Wrench } from 'lucide-react';

export default function CabinAirFilter() {
  return (
    <section className="py-16 md:py-24 bg-[#0D3374] text-white">
      <div className="custom-container">
        {/* Title Section */}
        {/* <div className="flex flex-col items-center text-center mb-6" data-aos="fade-down">
          <div className="flex items-center gap-3">
            <img src="/moto/mistral/Polygon.png" alt="" className="w-7 h-7 object-contain" />
            <h2 className="section-title text-[#ffffff] font-medium tracking-wide">
              Andrea Campi Mistral – Cabin Air Filter
            </h2>
          </div>
        </div> */}
        
        {/* Divider */}
        {/* <div className="w-full h-[1px] bg-white/20 mb-12"></div> */}
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Left: Text Content */}
          <div data-aos="fade-right" className="xl:col-span-5 flex flex-col gap-5 text-[#ffffff] section-text lato-font">
            <div className="flex flex-col gap-1">
              <h3 className="section-title text-white font-bold">
                Premium Cabin Air Filtration
              </h3>
              <span className="block w-14 h-[3px] bg-[#0D99FF]" />
            </div>

            <p>
              Our Air Filter is engineered to deliver clean, fresh air inside your vehicle by effectively
              capturing dust, pollen, soot, and other airborne contaminants. Designed to meet OEM
              quality standards, it ensures a precise fit and reliable performance across a wide range
              of passenger vehicles. Available in both standard and activated carbon variants, the filter
              enhances cabin comfort, protects the HVAC system, and helps create a healthier driving
              environment for every journey.
            </p>

            <div className="flex flex-col gap-6 xl:hidden 2xl:flex">
              {/* Feature 1 */}
              <div className="flex flex-col gap-2">
                <h4 className="card-title text-white font-semibold">
                  Reliable OEM-Fit Performance
                </h4>
                <p className="text-[#ffffff] section-text lato-font">
                  It helps maintain consistent airflow while reducing dust, allergens, and unpleasant
                  odors. Its durable construction and OEM-fit design ensure long-lasting performance,
                  making it a dependable choice for comfortable, clean, and healthy driving in all
                  conditions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-2">
                <h4 className="card-title text-white font-semibold">
                  Advanced Particle &amp; Odor Control
                </h4>
                <p className="text-[#ffffff] section-text lato-font">
                  High-efficiency filtration captures dust, pollen, soot, and other airborne particles,
                  while activated carbon variants help minimize unpleasant odors and harmful gases for
                  a cleaner cabin environment.
                </p>
              </div>
            </div>

            <div className="mt-2 xl:hidden 2xl:block">
              <Button href="#" variant="solid-white">
                Explore Products
              </Button>
            </div>
          </div>
          
          {/* Right: Video Section */}
          <div data-aos="fade-left" className="xl:col-span-7 w-full relative aspect-video flex items-center justify-center bg-white shadow-lg overflow-hidden mt-8 xl:mt-0">
             
                      
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
                <h4 className="card-title text-white font-semibold">
                  Reliable OEM-Fit Performance
                </h4>
                <p className="text-[#ffffff] section-text lato-font">
                  It helps maintain consistent airflow while reducing dust, allergens, and unpleasant
                  odors. Its durable construction and OEM-fit design ensure long-lasting performance,
                  making it a dependable choice for comfortable, clean, and healthy driving in all
                  conditions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-2 w-1/2">
                <h4 className="card-title text-white font-semibold">
                  Advanced Particle &amp; Odor Control
                </h4>
                <p className="text-[#ffffff] section-text lato-font">
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
