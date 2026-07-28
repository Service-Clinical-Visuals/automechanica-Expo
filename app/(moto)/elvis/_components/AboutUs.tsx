"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  const highlights = [
    "Over 85 Years of Trusted Expertise in the Independent Automotive Aftermarket",
    "Proud Danish Heritage with a Strong and Expanding Global Presence",
    "OEM-Quality Gasket and Sealing Solutions Engineered for Lasting Performance",
    "Continuously Expanding Product Portfolio to Meet Evolving Market Demands",
    "Serving Customers and Distribution Partners Across Global Aftermarket Markets"
  ];

  return (
    <section id="about" className="w-full py-16 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-6">
        
        {/* Top Box */}
        <div 
          className="w-full bg-[#222222] border border-white/5 rounded-3xl p-8 2xl:p-12 flex flex-col 2xl:flex-row gap-8 2xl:gap-16 justify-between items-start 2xl:items-center"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-4 2xl:w-3/5">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Engineering Reliable Sealing Solutions Since 1938
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed text-sm lg:text-base">
              With more than 85 years of industry expertise, Elwis Royal is a trusted Danish manufacturer specializing in OEM-quality gaskets and sealing solutions for the independent automotive aftermarket. From a family-owned business to a globally recognized brand, we deliver precision-engineered products that meet the highest standards of quality, durability, and performance.
            </Typography>
          </div>
          
          <div className="flex flex-col gap-4 items-start 2xl:items-end 2xl:w-2/5 2xl:text-right">
            <Typography variant="h4" color="white" className="font-semibold leading-snug">
              OEM-Quality Gaskets. Danish<br className="hidden 2xl:block"/> Expertise. Global Reach.
            </Typography>
            <Button text="Learn More" href="#about" showIcon={true} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col 2xl:flex-row gap-6">
          
          {/* Bottom Left Box - Key Highlights */}
          <div 
            className="w-full 2xl:w-1/3 bg-[#222222] border border-white/5 rounded-3xl p-8 2xl:p-12 flex flex-col gap-8 order-1 2xl:order-1"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <Typography variant="h2" color="white" className="font-semibold">
              Key Highlights
            </Typography>
            <ul className="flex flex-col gap-6">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-[#C21217] rounded-full w-5 h-5 flex items-center justify-center text-black">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <Typography variant="p" color="white" className="leading-tight">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Right Box - Image */}
          <div 
            className="w-full 2xl:w-2/3 order-2 2xl:order-2"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/moto/elvis/section2.jpg"
              alt="About Elwis Royal"
              className="w-full object-cover rounded-3xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[552px] min-[2500px]:h-[750px] min-[3800px]:h-[1104px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
