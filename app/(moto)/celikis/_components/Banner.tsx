"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    // <section className="relative w-full h-screen  overflow-hidden flex flex-col justify-center pt-32">
    //   <div className="absolute inset-0 z-0">
    //     <DynamicVideoPlayer
    //       type="banner"
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />
       
    //   </div>

    //   <div className="custom-container relative z-10 pb-20  lg:pb-0">
    //     <div className="max-w-2xl text-left" data-aos="fade-up" data-aos-duration="1000">
    //       <h1 className="banner-title mb-3 leading-tight font-bold text-white">
    //         Precision Engineering for Industry
    //       </h1>
    //       <p className="banner-text mb-8 max-w-xl font-normal text-white">
    //         Delivering precision gear solutions with reliability.
    //       </p>
    //       <Button 
    //         href="#" 
    //         variant="primary" 
    //         hasArrow
    //       >
    //         Explore Products
    //       </Button>
    //     </div>
    //   </div>
    // </section>
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0">
            <DynamicVideoPlayer
              type="banner" 
              className="absolute inset-0 w-full h-full object-cover "
            />
           </div>
    
          {/* Content Overlay */}
          <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
            <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
               <h1 className="banner-title mb-3 leading-tight font-bold text-white">
            Precision Engineering for Industry
          </h1>
          <p className="banner-text mb-8 max-w-xl font-normal text-white">
            Delivering precision gear solutions with reliability.
          </p>
              <Button 
            href="#" 
            variant="primary" 
            hasArrow
          >
            Explore Products
          </Button>
            </div>
          </div>
        </section>
  );
}
