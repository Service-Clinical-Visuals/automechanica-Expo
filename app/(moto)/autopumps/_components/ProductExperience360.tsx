import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductExperience360() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#037CAF] to-[#0B274A]">
      <div className="custom-container px-6 xl:px-16">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center max-w-[1500px] mx-auto mb-12 xl:mb-16">
           <h2 className="section-title text-[#ffffff] mb-4">
            360° Product Experience
          </h2>
          <p className="section-text text-white leading-relaxed max-w-5xl mx-auto">
            Experience Autopumps UK engine components with our immersive 360° interactive product view. Rotate, zoom, and explore every component from every angle to understand its design and engineering excellence. Examine the precision-machined details, premium materials, and OE-quality craftsmanship behind every product. The 360° experience offers a closer look at the performance and reliability of every Autopumps UK component, helping you make informed decisions with confidence.
          </p>
        </div>

        {/* Video Layout */}
        <div className="w-full max-w-7xl mx-auto" data-aos="fade-up">
           <div className="aspect-video  w-full overflow-hidden   flex items-center justify-center">
             <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
           </div>
        </div>
        
      </div>
    </section>
  );
}
