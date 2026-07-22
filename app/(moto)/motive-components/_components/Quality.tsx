"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Quality = () => {
  return (
    <section id="quality" className="w-full py-16  bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-16 ">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10  items-center">
          
          {/* Top Left: Text */}
          <div className="flex flex-col gap-6 order-2 xl:order-1" data-aos="fade-right">
             <div className="flex flex-col gap-2">
               <Typography variant="h1" color="dark" className="font-bold leading-tight">
                 Quality you can rely on
               </Typography>
               <div className="h-1 w-[40%] rounded-full bg-[#F47621]"></div>
             </div>

             <div className="flex flex-col gap-4">
                <Typography variant="p" color="muted" className="leading-relaxed">
                  At Motive Components, quality is integrated into every stage of the supply chain, from precision manufacturing to advanced inspection processes. Through globally recognised manufacturing partnerships and strict quality control measures, each component is engineered to meet OE-level standards, ensuring reliable performance, accuracy, and durability across a wide range of engine applications.
                </Typography>
                
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Every component undergoes rigorous testing and inspection using advanced metrology equipment to ensure precise dimensions, superior quality, and dependable performance before reaching customers.
                </Typography>
             </div>

             <div className="mt-2">
               <Button text="Learn more" href="#quality" className="!py-2.5 !px-6" />
             </div>
          </div>

          {/* Top Right: Image */}
          <div className="order-1 xl:order-2 w-full relative mt-6 xl:mt-8" data-aos="fade-left">
             <div className="absolute -top-10 right-0 w-[90%]  h-full bg-secondary rounded-[1.25rem] z-0"></div>
             <img src="/moto/motive-components/section4.png" alt="Precision Metrology Inspection" className="relative z-10 w-full h-auto rounded-[1.25rem] shadow-xl object-cover" />
          </div> 

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16  items-center">
          
          {/* Bottom Left: Image */}
          <div className="w-full relative mb-6 xl:mb-8" data-aos="fade-right">
             <div className="absolute -bottom-12 left-0 w-[85%] h-full bg-secondary rounded-[1.25rem] z-0"></div>
             <img src="/moto/motive-components/section5.png" alt="Advanced Manufacturing Process" className="relative z-10 w-full h-auto rounded-[1.25rem] shadow-xl object-cover" />
          </div>

          {/* Bottom Right: Text and Badges */}
          <div className="flex flex-col gap-8" data-aos="fade-left">
             
             <div className="flex flex-col gap-3">
                <div className="h-1 w-[35%] rounded-full bg-[#F47621]"></div>
                <Typography variant="p" color="muted" className="leading-relaxed mt-2">
                  All components are manufactured through globally recognised facilities certified to ISO 9001:2015, IATF 16949, and TS16949 standards, following strict quality systems throughout production. From raw materials to final inspection, each component is carefully monitored to meet OE-level specifications. With advanced UK-based inspection and metrology processes, Motive Components ensures precise fit, consistent performance, and long-term reliability across various engine applications
                </Typography>
             </div>

             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                
                {/* Badge 1 */}
                <div className="flex flex-col items-center justify-start gap-4">
                   <img src="/moto/motive-components/icon1.png" alt="IATF 16949:2016" className="w-32 xl:w-full h-auto object-contain" />
                   <div className="flex flex-col items-center">
                      <Typography variant="p" color="dark" className="!font-bold ">IATF 16949:2016</Typography>
                      <Typography variant="p" color="muted" className="">International Automotive<br/>Task Force Certified</Typography>
                   </div>
                </div>

                {/* Badge 2 */}
                <div className="flex flex-col items-center justify-start gap-4">
                   <img src="/moto/motive-components/icon2.png" alt="ISO/TS 1649:2009" className="w-32 xl:w-full h-auto object-contain" />
                   <div className="flex flex-col items-center">
                      <Typography variant="p" color="dark" className="!font-bold ">ISO/TS 1649:2009</Typography>
                      <Typography variant="p" color="muted" className="">Automotive Quality<br/>Management System</Typography>
                   </div>
                </div>

                {/* Badge 3 */}
                <div className="flex flex-col items-center justify-start gap-4">
                   <img src="/moto/motive-components/icon3.png" alt="ISO 9001:2015" className="w-32 xl:w-full h-auto object-contain" />
                   <div className="flex flex-col items-center">
                      <Typography variant="p" color="dark" className="!font-bold ">ISO 9001:2015</Typography>
                      <Typography variant="p" color="muted" className="">Quality Management<br/>System Certified</Typography>
                   </div>
                </div>

             </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Quality;
