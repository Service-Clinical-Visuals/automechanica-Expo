import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20">
          <div className="max-w-6xl text-left" data-aos="fade-right" data-aos-delay="200">
        
          <h2 className="text-[24px] sm:text-2xl md:text-3xl lg:text-4xl font-semibold heading text-white mb-4 md:mb-6 lg:mb-8 tracking-wide leading-snug">
            Long-Term Development At The Service Of<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Satisfaction And Performance
          </h2>
          
          <Link 
            href="#" 
            className="inline-block border-2 border-[#FF131C] bg-transparent text-white px-6 py-2 font-semibold text-lg md:text-xl paragraph hover:bg-[#FF131C] transition-all duration-300"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
