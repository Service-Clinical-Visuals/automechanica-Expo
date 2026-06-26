import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner" // Assuming video mapping in VideoProvider
          className="absolute inset-0 w-full h-full object-cover "
        />
       
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10">
        <div className="max-w-3xl text-left mb-40" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold chakra-petch !text-white mb-6 leading-[1.3] drop-shadow-lg tracking-wide ">
            Trusted Belgian-made lubricants for automotive, industrial, and agricultural sectors.
          </h1>
        </div>
      </div>
    </section>
  );
}
