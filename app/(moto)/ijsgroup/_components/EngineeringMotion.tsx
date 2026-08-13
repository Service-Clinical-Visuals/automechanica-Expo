import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EngineeringMotion() {
  return (
    <section className="relative w-full ">
      
      {/* Desktop Absolute Video Wrapper matching the exact grid alignment */}
      <div className="hidden xl:grid xl:grid-cols-12 gap-6 lg:gap-8 absolute inset-0 custom-container pointer-events-none z-20">
        <div className="xl:col-span-5"></div> {/* Empty left column */}
        <div className="xl:col-span-7 flex items-center h-full pointer-events-auto" data-aos="fade-left">
          <div className="w-full aspect-video shadow-2xl overflow-hidden relative group">
                       <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Top Blue Section */}
      <div className="w-full bg-gradient-to-r from-[#2F9CCC] to-[#004D73]">
        <div className="custom-container pt-16 pb-12 lg:pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Top Left Content */}
            <div className="xl:col-span-5 text-white flex flex-col justify-end mt-6" data-aos="fade-right">
              <h2 className="oswald-font font-semibold section-title text-white mb-8">
                Precision Engineering <span className="relative inline-block">in Motion<span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span></span>
              </h2>
              <p className="sora-font section-text text-white leading-relaxed ">
                Experience the craftsmanship behind IJS Group Automotive's precision-engineered components through our manufacturing process. From raw material selection to final quality inspection.
              </p>
            </div>
            
          
            
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Video (Hidden on Desktop) */}
      <div className="w-full bg-[#f9f9f9] xl:hidden">
        <div className="custom-container pt-8">
          <div className="w-full aspect-video shadow-lg overflow-hidden relative">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Bottom White Section */}
      <div className="w-full bg-[#f9f9f9] ">
        <div className="custom-container pt-6 lg:pt-10 pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Bottom Left Content */}
            <div className="xl:col-span-5" data-aos="fade-right" data-aos-delay="100">
              <div className="flex flex-col gap-6 mb-10 text-[#555555]">
                <div className="flex items-start gap-4">
                  <img src="/moto/ijsgroup/poly2.png" alt="" className="w-10 h-10" />
                  <p className="sora-font section-text font-normal leading-relaxed text-[#484848]">
                    Precision machining ensures dimensional accuracy and consistent product quality.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <img src="/moto/ijsgroup/poly2.png" alt="" className="w-10 h-10" />
                  <p className="sora-font section-text font-normal leading-relaxed text-[#484848]">
                    Every component undergoes comprehensive testing to meet OE-quality standards.
                  </p>
                </div>
              </div>
              <Button href="#">
                Explore Our Product
              </Button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
