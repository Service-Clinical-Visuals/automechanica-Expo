import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Solutions() {
  return (
    <section 
      className="w-full py-16 md:py-24 relative bg-[var(--color-primary)] text-white bg-cover bg-center overflow-hidden rounded-4xl" 
      style={{ backgroundImage: "url('/moto/liqui-moly/bg.png')" }}
    >
      {/* Container */}
      <div className="custom-container relative z-10">
        
        {/* Title */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="section-title font-semibold text-white mb-2 inline-block relative">
            Complete Solutions for Every Vehicle
            <div className="absolute bottom-0 left-0 w-full flex items-center gap-1">
              <div className="h-[3px] flex-1 bg-white"></div>
              <div className="h-[3px] w-[3px] bg-white"></div>
              <div className="h-[3px] w-[3px] bg-white"></div>
              <div className="h-[3px] w-[3px] bg-white"></div>
              <div className="h-[3px] w-[3px] bg-white"></div>
            </div>
          </h2>
        </div>

        {/* Top: Video and Main Paragraph */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-12 md:mb-16">
          
          {/* Left: 360 Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden relative shadow-2xl flex items-center justify-center " data-aos="fade-right">
             <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-8" data-aos="fade-left">
            <p className="section-text text-white leading-relaxed font-normal">
              <span className="font-bold text-white">LIQUI MOLY</span> offers a comprehensive range of high-performance automotive products designed to enhance vehicle efficiency, protection, and reliability. Our portfolio includes premium motor oils, engine additives, transmission fluids, maintenance products, and professional workshop solutions engineered for modern vehicles. Developed with innovation and precision, every product delivers dependable performance, long-lasting durability, and trusted quality for drivers and automotive professionals worldwide. Every solution is designed to keep vehicles running smoothly, efficiently, and with lasting confidence.
            </p>
            <div className="hidden xl:block">
              <Button variant="secondary" className="px-5 py-2 rounded-md font-semibold shadow-lg" showArrow={true}>
                Explore Products
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" data-aos="fade-up">
          {/* Item 1 */}
          <div className="flex flex-col xl:flex-row items-start gap-4">
            <img src="/moto/liqui-moly/setting.png" alt="Setting" className="w-8 h-8 mt-1 object-contain flex-shrink-0" />
            <p className="section-text text-white font-normal">
              <span className="font-bold text-white">LIQUI MOLY</span> delivers high-performance products engineered to improve vehicle efficiency, protection, and reliability through innovative technology and precision development.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col xl:flex-row items-start gap-4">
            <img src="/moto/liqui-moly/shield.png" alt="Shield" className="w-8 h-8 mt-1 object-contain flex-shrink-0" />
              <p className="section-text text-white font-normal">
              Our premium solutions reduce wear, enhance performance, and extend component life, ensuring dependable operation for drivers and automotive professionals worldwide.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col xl:flex-row items-start gap-4">
            <img src="/moto/liqui-moly/tool.png" alt="Tool" className="w-8 h-8 mt-1 object-contain flex-shrink-0" />
              <p className="section-text text-white font-normal">
              Our products support regular vehicle care by improving efficiency, maintaining optimal performance, and providing long-term protection for essential automotive components.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center xl:hidden">
          <Button variant="secondary" className="px-5 py-2 rounded-md font-semibold shadow-lg" showArrow={true}>
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
