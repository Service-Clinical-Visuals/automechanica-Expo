"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    // <section className="w-full pt-24 md:pt-28 pb-8 flex flex-col">
    //   <div className="custom-container">
    //     <div
    //       className="relative overflow-hidden w-full h-[85vh] min-h-[500px] xl:h-auto xl:aspect-[16/8] rounded-[20px] md:rounded-[24px]  shadow-xl"
    //       data-aos="zoom-in"
    //       data-aos-delay="100"
    //     >
    //       <div className="absolute inset-0 w-full h-full ">
    //         <DynamicVideoPlayer
    //           type="banner"
    //           className="w-full h-full object-cover "
    //         />
         
    //       </div>

    //       <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-24">
    //         <div className="max-w-4xl" data-aos="fade-up" data-aos-delay="200">
    //           <h1 className="aldrich-font font-normal text-white banner-title leading-[1.15] mb-4 md:mb-5 tracking-wide drop-shadow-lg">
    //             High Performance for Your Engine
    //           </h1>
    //           <p className="akshar-font font-normal text-white section-text leading-relaxed max-w-2xl drop-shadow-md text-opacity-90">
    //             The high-performance engine oils from JB Germanoil
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
             <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-24">
             <div className="max-w-4xl" data-aos="fade-up" data-aos-delay="200">
               <h1 className="aldrich-font font-normal text-white banner-title leading-[1.15] mb-4 md:mb-5 tracking-wide drop-shadow-lg">
                 High Performance for Your Engine
               </h1>
               <p className="akshar-font font-normal text-white section-text leading-relaxed max-w-2xl drop-shadow-md text-opacity-90">
                 The high-performance engine oils from JB Germanoil
               </p>
             </div>
          </div>
            </div>
          </div>
        </section>
  );
}
