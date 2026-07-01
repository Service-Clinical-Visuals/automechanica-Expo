import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
          </div>

      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-3xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl" data-aos="fade-up">
          <h1 className="text-white font-normal leading-tight mb-8 oswald banner-title">
            The resulting findings and recommendations are documented in a consulting report.
          </h1>
          
          <Link 
            href="#products" 
            className="inline-block border border-white hover:bg-white hover:text-black text-white px-8 py-2.5 rounded-lg transition-all duration-300 oswald font-semibold btn-text"
          >
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}
