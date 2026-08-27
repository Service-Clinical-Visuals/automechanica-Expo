"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3500px]:py-[120px] bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-4 min-[1440px]:gap-6">
        
        {/* Top Section (Content + Image) */}
        <div className="flex flex-col min-[1440px]:grid min-[1440px]:grid-cols-12 gap-10 items-start min-[3500px]:items-center w-full">
          
          {/* Content (Heading + Text + Button) */}
          {/* Mobile: Order 1, Desktop: Col 1-6 */}
          <div className="flex flex-col gap-6 order-1 min-[1440px]:col-start-1 min-[1440px]:col-span-6 w-full" data-aos="fade-right">
            
            {/* Heading Group */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Typography variant="h2" color="dark" className="font-bold leading-tight">
                  The FULBAT Difference
                </Typography>
                <div className="h-0.5 bg-primary w-24 shrink-0"></div>
              </div>
              <Typography variant="h5" color="dark" className="italic !font-normal">
                Powering Innovation with Reliable Battery Solutions
              </Typography>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Established in 2005, FULBAT is a French-based battery specialist and trusted partner in both OEM and replacement markets. With extensive technical expertise and industry experience, we develop innovative energy solutions that meet the evolving demands of customers across automotive, industrial, and motive power applications.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                Our comprehensive portfolio includes Starter Batteries, Industrial Batteries, Motive Power Batteries, and Custom Battery Packs, delivering reliable, high-performance solutions tailored to diverse technical and operational requirements. Supported by a strong global distribution network, FULBAT products are recognized worldwide for their quality, durability, and dependable performance.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                Manufactured using advanced production processes and certified to ISO 9001, ISO 14001, and IATF 16949 standards, every FULBAT battery is engineered to meet the highest industry benchmarks for safety, efficiency, and long-term reliability.
              </Typography>
            </div>

            <div className="mt-2" data-aos="fade-up" data-aos-delay="100">
               <Button text="Learn More" href="#about" showIcon={false} />
            </div>
          </div>

          {/* Image */}
          {/* Mobile: Order 2, Desktop: Col 7-12 */}
          <div className="w-full order-2 min-[1440px]:col-start-7 min-[1440px]:col-span-6 h-full" data-aos="fade-left">
            <img
              src="/moto/confinas/section2.png"
              alt="FULBAT Difference"
              className="w-full h-auto object-cover rounded shadow-md"
            />
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="w-full flex flex-col gap-0 w-full mt-2" data-aos="fade-up" data-aos-delay="200">
          
          {/* Top Green Divider Line */}
          <div className="w-[68%] mx-auto h-1 rounded-full bg-primary mb-6"></div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 min-[1440px]:grid-cols-3 gap-6 w-full">
            
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white border border-primary p-6 shadow-sm">
               <div className="w-24 h-24 min-[2100px]:w-32 min-[2100px]:h-32 min-[3800px]:w-48 min-[3800px]:h-48 shrink-0 flex items-center justify-center">
                 <img src="/moto/confinas/icon1.png" alt="Reliable Service" className="w-full h-full object-contain" />
               </div>
               <div className="flex flex-col gap-2">
                  <Typography variant="h4" color="dark" className="font-bold leading-tight">
                    Reliable Service & Logistics
                  </Typography>
                  <Typography variant="span" color="muted" className="leading-relaxed">
                    A 3,000 m² warehouse in Belgium ensures extensive stock, 24-48 hour delivery, and professional customer support.
                  </Typography>
               </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white border border-primary p-6 shadow-sm">
               <div className="w-24 h-24 min-[2100px]:w-32 min-[2100px]:h-32 min-[3800px]:w-48 min-[3800px]:h-48 shrink-0 flex items-center justify-center">
                 <img src="/moto/confinas/icon2.png" alt="Excellence" className="w-full h-full object-contain" />
               </div>
               <div className="flex flex-col gap-2">
                  <Typography variant="h4" color="dark" className="font-bold leading-tight">
                    Excellence in Every Battery
                  </Typography>
                  <Typography variant="span" color="muted" className="leading-relaxed">
                    Rigorous quality control, ISO-certified manufacturing, and battery charging before dispatch.
                  </Typography>
               </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white border border-primary p-6 shadow-sm">
               <div className="w-24 h-24 min-[2100px]:w-32 min-[2100px]:h-32 min-[3800px]:w-48 min-[3800px]:h-48 shrink-0 flex items-center justify-center">
                 <img src="/moto/confinas/icon3.png" alt="Experience" className="w-full h-full object-contain" />
               </div>
               <div className="flex flex-col gap-2">
                  <Typography variant="h4" color="dark" className="font-bold leading-tight">
                    Professional Experience
                  </Typography>
                  <Typography variant="span" color="muted" className="leading-relaxed">
                    Over 10 years of industry expertise, trusted by OEMs, and supported by a strong global distributor network.
                  </Typography>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
