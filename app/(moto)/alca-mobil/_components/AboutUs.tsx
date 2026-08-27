"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-10 xl:py-16 min-[3800px]:pt-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10  items-center">
        
        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-7 xl:col-span-6 xl:row-start-1 xl:gap-8">
          
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-2 w-full" data-aos="fade-left">
            <div className="inline-flex flex-col self-start">
              <Typography variant="span" color="secondary" className="font-bold tracking-wide">
                About Alca Mobil
              </Typography>
              <span className="w-1/2 h-[2px] bg-secondary self-end mt-1"></span>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight mt-1">
              Celik Exhaust Systems and Innovative Bending Technology Solutions
            </Typography>
          </div>

          {/* Body and Button - Mobile Order 3 */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Alca mobil logistics + services GmbH is a leading automotive service partner specializing in the import and export of wiper blades, accessories, spare parts, and tools. Established in Berlin, this family-owned company relocated its headquarters to Storkow (Brandenburg) in 1993, strategically positioned along the A12 motorway—one of Europe's key transport routes for transcontinental freight movement.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                With a strong logistics network and years of industry expertise, the company ensures efficient supply chain management, timely delivery, and reliable distribution across international markets. Its strategic location enables seamless connectivity, supporting fast and flexible operations tailored to customer needs.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                Focused on quality, innovation, and customer satisfaction, Alca mobil logistics continues to strengthen its position as a trusted partner in the automotive aftermarket, delivering dependable solutions and long-term value to clients worldwide.
              </Typography>
            </div>
            
            <div className="pt-2">
               <Button text="Discover Our Expertise" href="#about" />
            </div>
          </div>
        </div>

        {/* Image - Mobile Order 2, Desktop Left */}
        <div className="order-2 xl:col-start-1 xl:col-span-6 xl:row-start-1 w-full h-full flex items-center justify-center" data-aos="fade-right">
          <img
            src="/moto/alca-mobil/section2.png"
            alt="Alca Mobil Facilities"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
