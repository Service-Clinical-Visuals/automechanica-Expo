"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8  items-start">
        
        {/* Mobile: Content is top (order-1), Desktop: Content is Right (col-span-7) */}
        <div className="flex flex-col gap-5 order-1 xl:order-2 xl:col-start-6 xl:col-span-7 w-full" data-aos="fade-left">
          
          {/* Boxed Title Block */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-secondary"></div>
            <Typography variant="h6" color="secondary" className="uppercase font-semibold tracking-wider">
              ABOUT COMPANY
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            A Legacy of Quality and Innovation
          </Typography>

          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Established in 1923, FRECCIA has built a strong and enduring presence in the global automotive aftermarket, earning recognition as a premium brand trusted by garages and professionals worldwide. Backed by decades of experience in the original equipment (OE) sector, the company is renowned for delivering products that meet the highest standards of precision, durability, and consistent performance.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              Driven by a commitment to engineering excellence and continuous improvement, FRECCIA invests in advanced technologies, rigorous quality control processes, and ongoing product development. This ensures that every component is designed to perform reliably under demanding conditions while meeting the evolving needs of modern engines and vehicles.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              FRECCIA continuously adapts to industry changes by offering innovative solutions and services that enhance efficiency, accessibility, and customer experience across global markets. Its strong distribution network and customer-focused approach enable the brand to maintain long-term partnerships and deliver value at every level.
            </Typography>
          </div>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            {[
              "A comprehensive and continuously expanding product range",
              "Fast, flexible, and reliable logistics operations",
              "Advanced electronic catalogs aligned with industry standards",
              "Smart, user-friendly stock integration solutions"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                <Typography variant="p" color="muted" className="leading-relaxed text-sm">
                  {text}
                </Typography>
              </div>
            ))}
          </div>

          <div className=" mb-4" data-aos="fade-left" data-aos-delay="100">
            <Button text="Know More" href="#about" />
          </div>

          {/* Bottom Icons Section (Inside the right column) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full pt-1" data-aos="fade-up">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <img src="/moto/freccia/icon1.png" alt="Icon" className="w-10 h-10 xl:w-12 xl:h-12 object-contain shrink-0" />
              <div className="flex flex-col">
                <Typography variant="h2" color="dark" className="font-bold text-2xl xl:text-[2rem]">35+</Typography>
                <Typography variant="h6" color="dark" className="uppercase font-medium text-[10px] xl:text-xs tracking-wider leading-tight">Years of<br/>Excellence</Typography>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <img src="/moto/freccia/icon2.png" alt="Icon" className="w-10 h-10 xl:w-12 xl:h-12 object-contain shrink-0" />
              <div className="flex flex-col">
                <Typography variant="h2" color="dark" className="font-bold text-2xl xl:text-[2rem]">80+</Typography>
                <Typography variant="h6" color="dark" className="uppercase font-medium text-[10px] xl:text-xs tracking-wider leading-tight">Countries<br/>Worldwide</Typography>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <img src="/moto/freccia/icon3.png" alt="Icon" className="w-10 h-10 xl:w-12 xl:h-12 object-contain shrink-0" />
              <div className="flex flex-col">
                <Typography variant="h2" color="dark" className="font-bold text-2xl xl:text-[2rem]">5K+</Typography>
                <Typography variant="h6" color="dark" className="uppercase font-medium text-[10px] xl:text-xs tracking-wider leading-tight">Products<br/>In Range</Typography>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <img src="/moto/freccia/icon4.png" alt="Icon" className="w-10 h-10 xl:w-12 xl:h-12 object-contain shrink-0" />
              <div className="flex flex-col">
                <Typography variant="h2" color="dark" className="font-bold text-2xl xl:text-[2rem]">100%</Typography>
                <Typography variant="h6" color="dark" className="uppercase font-medium text-[10px] xl:text-xs tracking-wider leading-tight">Quality<br/>Assurance</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Image is bottom (order-2), Desktop: Image is Left (col-span-5) */}
        <div className="w-full order-2 xl:order-1 xl:col-start-1 xl:col-span-5" data-aos="fade-right">
          <div className="w-full mx-auto xl:mx-0 aspect-[655/813]">
            <img
              src="/moto/freccia/section2.png"
              alt="Freccia Logistics and Operations"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
