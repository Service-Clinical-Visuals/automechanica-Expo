"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-32 items-center">
        
        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-1 xl:col-span-6 xl:row-start-1 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-4 w-full" data-aos="fade-right">
            <div className="inline-flex flex-col self-start">
              <span className="w-1/2 h-[2px] bg-primary mb-1 self-start min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
              <Typography variant="span" color="primary" className="font-bold tracking-wide">
                About Celik
              </Typography>
              <span className="w-1/2 h-[2px] bg-primary mt-1 self-end min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Celik - Precision Exhaust Systems & Bending Solutions
            </Typography>
          </div>

          {/* Body and Button - Mobile Order 3 */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-right">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Founded in 1989 by Latif Çelik, ÇELİK Egzoz Sanayi ve Ticaret A.Ş. has grown from a small operation in Avcılar to a modern manufacturing facility in the Bağyurdu Organized Industrial Zone, Izmir. Initially focused on front and rear exhaust pipes, the company has expanded its expertise to produce complete exhaust systems, specializing in high-performance solutions made from premium 304 and 316 stainless steel.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                With strong capabilities in pipe bending and shaping, Çelik designs its own machinery and delivers both standard and performance exhaust systems under the "ÇELİK" and "STEEL" brands. The company offers turnkey solutions tailored to customer needs, supported by design licenses for original products and a commitment to quality through TÜV CERT ISO 9001:2015 certification.
              </Typography>
            </div>
            
            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
               <Button text="Learn More" href="#about" showIcon={false} />
            </div>
          </div>
        </div>

        {/* Image - Mobile Order 2, Desktop Right */}
        <div className="order-2 xl:col-start-7 xl:col-span-6 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <img
            src="/moto/celik/section2.jpg"
            alt="Celik Factory Facility"
            className="w-full h-auto object-contain xl:object-cover rounded-md min-[2100px]:rounded-xl min-[3800px]:rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
