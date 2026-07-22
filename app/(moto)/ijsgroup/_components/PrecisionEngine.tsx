import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PrecisionEngine() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#2F9CCC] to-[#004D73] py-16 md:py-24">
      <div className="custom-container">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6" data-aos="fade-down">
          <h2 className="oswald-font font-semibold section-title text-white ">
            Precision Engine Components
          </h2>
          <Button href="#" variant="primary">
            Explore Products
          </Button>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/70 mb-12" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: 360 Video Space */}
          <div data-aos="fade-right" className="relative w-full aspect-video overflow-hidden xl:col-span-7">
            <DynamicVideoPlayer 
              type="360" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left" className="flex flex-col justify-center xl:col-span-5">
            
            <h3 className="oswald-font font-semibold section-title text-white mb-8">
              Innovative Solutions for <span className="relative inline-block">Engine Excellence<span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white"></span></span>
            </h3>
            
            <p className="sora-font section-text text-white mb-6 leading-relaxed">
              IJS Group Automotive delivers a comprehensive range of precision-engineered engine components, including camshafts, cylinder heads, valves, and tappets. Manufactured using advanced technology and strict quality standards, every component is designed to provide reliable performance, durability, and precise engine operation.
            </p>

            {/* Features block - visible on mobile and 2XL+ (hidden on XL to 2XL) */}
            <div className="flex flex-col gap-8 xl:hidden 2xl:flex">
              {/* Feature 1 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/moto/ijsgroup/poly1.png" alt="" className="w-10 h-10" />
                  <h4 className="sora-font font-semibold text-white section-text">
                    Precision Camshafts
                  </h4>
                </div>
                <p className="sora-font section-text text-white pl-6 font-normal leading-relaxed">
                  Engineered for accurate valve timing, delivering smooth engine performance, improved efficiency, and enhanced durability.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/moto/ijsgroup/poly1.png" alt="" className="w-10 h-10" />
                  <h4 className="sora-font font-semibold text-white section-text">
                    High-Quality Cylinder Heads
                  </h4>
                </div>
               <p className="sora-font section-text text-white pl-6 font-normal leading-relaxed">
                  Designed for optimal airflow and combustion efficiency, ensuring reliable power output and long-lasting engine performance.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Features block - ONLY visible on XL to 2XL (1440px range) placed below content */}
        <div className="hidden xl:grid 2xl:hidden grid-cols-2 gap-10 mt-12 w-full">
          {/* Feature 1 */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-2">
              <img src="/moto/ijsgroup/poly1.png" alt="" className="w-10 h-10" />
              <h4 className="sora-font font-semibold text-white section-text">
                Precision Camshafts
              </h4>
            </div>
            <p className="sora-font section-text text-white pl-6 font-normal leading-relaxed xl:max-w-xl">
              Engineered for accurate valve timing, delivering smooth engine performance, improved efficiency, and enhanced durability.
            </p>
          </div>

          {/* Feature 2 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-2">
              <img src="/moto/ijsgroup/poly1.png" alt="" className="w-10 h-10" />
              <h4 className="sora-font font-semibold text-white section-text">
                High-Quality Cylinder Heads
              </h4>
            </div>
           <p className="sora-font section-text text-white pl-6 font-normal leading-relaxed xl:max-w-xl">
              Designed for optimal airflow and combustion efficiency, ensuring reliable power output and long-lasting engine performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
