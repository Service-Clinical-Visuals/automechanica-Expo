"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Emission = () => {
  return (
    <section id="customised" className="w-full py-16  overflow-hidden bg-primary text-white">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">
        
        {/* Top Grid: Video & Text Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* Left Column: Video */}
          <div className="w-full xl:col-span-7 flex flex-col order-2 xl:order-1" data-aos="fade-right">
            <div className="w-full aspect-video overflow-hidden shadow-2xl relative rounded-xl">
               <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full xl:col-span-5 flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">
            <div className="flex flex-col gap-3 mb-2">
              <Typography variant="h1" className="font-bold leading-tight text-white">
                Customised Precision Built Around You
              </Typography>
              <div className=" h-1 w-[70%] rounded-full bg-[#F47621]"></div>
            </div>

            <Typography variant="p" className="leading-relaxed text-white text-sm xl:text-base">
              Motive Components' Bespoke Programme delivers tailor-made engine component solutions designed to meet specific customer requirements and specialised applications. From initial concepts and CAD drawings to physical samples and final production, their experienced engineering team works closely with customers to develop precision-built components. Each part is carefully engineered to exact specifications, ensuring reliable performance, accurate fitment, and long-lasting durability across a wide range of petrol, diesel, gas, LPG, and alternative-fuel engines.
            </Typography>

            <div className="mt-4 flex flex-col gap-5">
              <Typography variant="h3" className="font-bold text-white mb-2">
                Key Features :
              </Typography>
              
              <div className="flex gap-4 items-start">
                 <div className="w-3 h-3 rounded-full bg-[#F47621] shrink-0 mt-1.5"></div>
                 <Typography variant="p" className="text-white leading-relaxed text-sm xl:text-base">
                   Customised engine components developed according to customer specifications, drawings, samples, or ideas.
                 </Typography>
              </div>
              
              <div className="flex gap-4 items-start">
                 <div className="w-3 h-3 rounded-full bg-[#F47621] shrink-0 mt-1.5"></div>
                 <Typography variant="p" className="text-white leading-relaxed text-sm xl:text-base">
                   Precision-engineered parts manufactured using advanced technology and quality materials for reliable performance and durability.
                 </Typography>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Content Area */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pl-6 pt-6 " data-aos="fade-up">
           {/* Crosshair accents */}
           <div className="absolute top-0 left-0 w-1 rounded-full h-[120%] bg-[#F47621] -translate-y-4"></div>
           <div className="absolute top-0 left-0 h-1 rounded-full w-[25%] bg-[#F47621] -translate-x-4"></div>
           
           <Typography variant="p" className="text-white leading-relaxed text-sm xl:text-base max-w-4xl">
             Each bespoke component is manufactured using advanced CNC technology, premium materials, and precise engineering processes to deliver exceptional performance, accurate fitment, and long-lasting durability for demanding engine applications.
           </Typography>
           
           <div className="shrink-0 md:ml-auto flex justify-end w-full md:w-auto mt-4 md:mt-0">
              <Button text="Explore" href="#customised" className="!py-2.5 !px-8" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Emission;
