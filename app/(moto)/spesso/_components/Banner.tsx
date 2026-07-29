import React from 'react';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
   

     <section className="w-full pt-24 md:pt-28 pb-8 flex flex-col">
              <div className="custom-container">
                {/* Banner Container */}
                <div
                  className="relative overflow-hidden w-full h-[85vh] min-h-[500px] xl:h-auto xl:aspect-[16/8] rounded-[20px] md:rounded-[24px]  shadow-xl"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  {/* Background Video */}
                  <div className="absolute inset-0 w-full h-full">
                    <DynamicVideoPlayer
                      type="banner"
                      className="w-full h-full object-cover"
                    />
                  </div>
        
        
                  {/* Content */}
                 <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-10 md:pb-14 lg:pb-16">
            <div className="max-w-4xl" data-aos="fade-up" data-aos-delay="200">
              <h1 className="anton-font font-normal text-white banner-title leading-[1.1] mb-5 tracking-wide drop-shadow-lg">
                Engineering Trusted Gasket Solutions Since 1926
              </h1>
              <p className="overpass-font text-white section-text leading-relaxed max-w-5xl drop-shadow-md text-opacity-90">
                Delivering premium flat gaskets and gasket sets for OEM and aftermarket applications with nearly a century of innovation, precision manufacturing, and trusted quality.
              </p>
            </div>
          </div>
                </div>
              </div>
            </section>
  );
}
