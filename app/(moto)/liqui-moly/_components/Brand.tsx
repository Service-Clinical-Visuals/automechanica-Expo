import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Fuel, Globe, Trophy } from "lucide-react";

export default function Brand() {
  return (
    <section 
      className="w-full relative bg-[#F4F6F9] bg-cover bg-center pt-16 md:pt-24 pb-20 md:pb-32" 
      style={{ backgroundImage: "url('/moto/liqui-moly/bg1.png')" }}
    >
      <div className="custom-container relative z-10">
        
        {/* Top 2 columns */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-15 md:mb-25 xl:mb-30">
          
          {/* Left: Content */}
          <div className="flex flex-col" data-aos="fade-right">
            <div className="text-left mb-6 w-full max-w-6xl " data-aos="fade-right">
            <h2 className="section-title font-semibold text-[var(--color-primary)] mb-2 inline-block relative">
              A Brand Driven by Passion and Performance
              <div className="absolute bottom-0 left-0 w-full flex items-center gap-1">
              <div className="h-[3px] flex-1 bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
            </div>
            </h2>
            </div>
            
            <div >
              <p className="section-text text-[var(--color-third)]  leading-[2.2] font-normal tracking-wide">
                Decades of automotive expertise, innovation, and advanced technology define <span className="font-bold text-[#111827]">LIQUI MOLY's</span> approach to creating high-quality solutions that keep vehicles performing at their best. Every product is developed with precision and tested to deliver exceptional protection, efficiency, and reliability. From everyday drivers to professional workshops, <span className="font-bold text-[#111827]">LIQUI MOLY</span> continues to set standards in automotive performance through trusted quality, continuous improvement, and engineering excellence.
              </p>
              
              <p className="section-text text-[var(--color-third)]  leading-[2.2] font-normal tracking-wide mt-6">
                The commitment goes beyond products, focusing on delivering reliable solutions that support drivers, workshops, and automotive professionals worldwide. Through innovation, quality, and expertise, the brand continues to drive mobility forward with confidence and exceptional performance.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="secondary" className="px-6 py-2 " showArrow={true}>
                Explore
              </Button>
            </div>
          </div>
          
          {/* Right: Video */}
          <div className="w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden relative shadow-lg  flex items-center justify-center" data-aos="fade-left">
             <DynamicVideoPlayer type="short" className="absolute inset-0 w-full h-full object-cover" />
                       </div>
          
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-md p-6 md:p-8 pl-32 md:pl-36 relative mt-10 md:mt-0 mb-10 xl:mb-0 flex items-center min-h-[140px]" data-aos="fade-up" data-aos-delay="0">
            <div className="absolute -top-6 left-6 w-25 h-25 bg-[#3267A1] rounded-md flex items-center justify-center shadow-lg">
              <img src="/moto/liqui-moly/blog1.png" alt="" className="w-15 h-15 object-contain" />
            </div>
            <div>
              <h3 className="card-title1 font-bold text-[#111827] mb-1">Full range</h3>
              <p className="section-text text-[var(--color-third)]">Over <span className="font-bold text-[#111827]">4,000 quality</span> products from one source</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-md p-6 md:p-8 pl-32 md:pl-36 relative mt-10 md:mt-0 mb-10 xl:mb-0 flex items-center min-h-[140px]" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute -top-6 left-6 w-25 h-25 bg-[#3267A1] rounded-md flex items-center justify-center shadow-lg">
              <img src="/moto/liqui-moly/blog2.png" alt="" className="w-15 h-15 object-contain" />
            </div>
            <div>
              <h3 className="card-title1 font-bold text-[#111827] mb-1">Global brand</h3>
              <p className="section-text text-[var(--color-third)]">Available and trusted in <span className="font-bold text-[#111827]">150 countries</span></p>
            </div>
          </div>

          {/* Card 3 */}
          
           <div className="bg-white rounded-md shadow-md p-6 md:p-8 pl-32 md:pl-36 relative mt-10 md:mt-0  flex items-center min-h-[140px]" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute -top-6 left-6 w-25 h-25 bg-[#3267A1] rounded-md flex items-center justify-center shadow-lg">
              <img src="/moto/liqui-moly/blog3.png" alt="" className="w-15 h-15 object-contain" />
            </div>
            <div>
              <h3 className="card-title1 font-bold text-[#111827] mb-1">Best Brand</h3>
              <p className="section-text text-[var(--color-third)]">Multiple award winner in readers' polls</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
