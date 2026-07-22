"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Legacy = () => {
  return (
    <section id="legacy" className="w-full py-16 bg-[#FFFFFF] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 items-start">
        
        {/* Content (Heading + Text + Button) */}
        {/* Mobile/Tablet: Order 1, Desktop: Col 1-5, Row 1-2 */}
        <div className="flex flex-col mt-4 xl:mt-7 gap-6 order-1 xl:col-start-1 xl:col-span-5 xl:row-start-1 xl:row-span-2 w-full" data-aos="fade-right">
          
          <Typography variant="h1" color="dark" className="font-bold leading-tight">
            A Legacy of Excellence and Growth
          </Typography>
          <hr className="h-1 border-[#F47621] rounded-full bg-[#F47621] w-[78%]" />

          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Since 1981, Motive Components has been a trusted supplier of premium engine components, delivering OE-quality products backed by exceptional customer support. With a global manufacturing and distribution network, we provide reliable solutions for partners across the automotive aftermarket.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              Over four decades, we have grown from a local engine parts distributor into an internationally recognised business. Continuous expansion, strategic investments, and increased warehousing capacity have enabled us to better serve customers worldwide. Our continued growth is driven by a commitment to quality, innovation, and customer satisfaction.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              With a focus on quality and innovation, we deliver trusted engine components through advanced manufacturing and efficient distribution.
            </Typography>
          </div>
          
          <div className="w-full mt-2" data-aos="fade-right" data-aos-delay="100">
             <Button text="Learn More" href="#about" />
          </div>
        </div>

        {/* Image */}
        {/* Mobile/Tablet: Order 2, Desktop: Col 6-12, Row 1 */}
        <div className="w-full order-2 xl:col-start-6 xl:col-span-7 xl:row-start-1 h-full" data-aos="fade-left">
          <img
            src="/moto/motive-components/section2.png"
            alt="Motive Components Facility"
            className="w-full rounded-2xl object-cover h-full min-h-[300px] shadow-lg"
          />
        </div>

        {/* Cards */}
        {/* Mobile/Tablet: Order 3, Desktop: Col 1-12, Row 3 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 order-3 xl:col-start-1 xl:col-span-12 xl:row-start-3 mt-3" data-aos="fade-up" data-aos-delay="100">
          
          {/* Card 1 */}
          <div className="flex items-center w-full">
             <div className="z-10 w-24 h-28 xl:w-[120px] xl:h-[150px] bg-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-5">
               <img src="/moto/motive-components/vector1.png" alt="Product Range" className="w-[80%] h-[80%] object-contain filter brightness-0 invert" />
             </div>
             <div className="flex-1 bg-[#FFFFFF] rounded-xl shadow-[0_0px_30px_rgba(0,0,0,0.08)] border border-gray-50 py-5 xl:py-6 pl-12 xl:pl-14 pr-4 -ml-8 z-0 flex flex-col justify-center">
                <Typography variant="h3" color="dark" className="font-bold leading-tight mb-1">
                  Product Range
                </Typography>
                <Typography variant="p" color="muted" className="text-sm xl:text-[15px]">
                  Engine components for every application.
                </Typography>
             </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center w-full">
             <div className="z-10 w-24 h-28 xl:w-[120px] xl:h-[150px] bg-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-5">
               <img src="/moto/motive-components/vector2.png" alt="Quality Assurance" className="w-[80%] h-[80%] object-contain filter brightness-0 invert" />
             </div>
             <div className="flex-1 bg-white rounded-xl shadow-[0_0px_30px_rgba(0,0,0,0.08)] border border-gray-50 py-5 xl:py-6 pl-12 xl:pl-14 pr-4 -ml-8 z-0 flex flex-col justify-center">
                <Typography variant="h3" color="dark" className="font-bold leading-tight mb-1">
                  Quality Assurance
                </Typography>
                <Typography variant="p" color="muted" className="text-sm xl:text-[15px]">
                  OE-quality, built to last.
                </Typography>
             </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center w-full">
             <div className="z-10 w-24 h-28 xl:w-[120px] xl:h-[150px] bg-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-5">
               <img src="/moto/motive-components/vector3.png" alt="Customer Care" className="w-[80%] h-[80%] object-contain filter brightness-0 invert" />
             </div>
             <div className="flex-1 bg-white rounded-xl shadow-[0_0px_30px_rgba(0,0,0,0.08)] border border-gray-50 py-5 xl:py-6 pl-12 xl:pl-14 pr-4 -ml-8 z-0 flex flex-col justify-center">
                <Typography variant="h3" color="dark" className="font-bold leading-tight mb-1">
                  Customer Care
                </Typography>
                <Typography variant="p" color="muted" className="text-sm xl:text-[15px]">
                  Dedicated support for our global partners.
                </Typography>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Legacy;
