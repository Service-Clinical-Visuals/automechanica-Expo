"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const BatteryFinder = () => {
  return (
    <section className="w-full bg-white min-[3500px]:py-[120px] relative overflow-hidden">
      <div className="custom-container min-[1440px]:py-2 flex flex-col min-[1440px]:grid min-[1440px]:grid-cols-12 gap-6 min-[1440px]:gap-10 items-center w-full">
        
        {/* Mobile Title (Hidden on Desktop) */}
        <div className="order-1  min-[1440px]:hidden w-full flex flex-col gap-4" data-aos="fade-right">
          <div className="flex items-center gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Battery Finder
            </Typography>
            <div className="h-0.5 bg-primary w-12 sm:w-24 shrink-0"></div>
          </div>
        </div>

        {/* Image */}
        <div className="order-2 min-[1440px]:order-2 min-[1440px]:col-span-6 w-full flex items-center justify-center h-full" data-aos="fade-left">
          <img
            src="/moto/confinas/section3.png"
            alt="Battery Finder"
            className="w-full h-auto object-contain max-h-[500px] min-[1440px]:max-h-[600px]"
          />
        </div>

        {/* Content (Text + Button) */}
        <div className="order-3 min-[1440px]:order-1 min-[1440px]:col-span-6 w-full flex flex-col gap-6" data-aos="fade-right">
          
          {/* Desktop Title (Hidden on Mobile) */}
          <div className="hidden min-[1440px]:flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="dark" className="font-bold leading-tight">
                Battery Finder
              </Typography>
              <div className="h-0.5 bg-primary w-12 sm:w-24 shrink-0"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Finding the right battery has never been easier. FULBAT's intelligent Battery Finder helps you quickly identify the ideal battery for your vehicle, equipment, or industrial application by matching specifications with precision. Whether you require a solution for motorcycles, passenger cars, commercial vehicles, marine equipment, agricultural machinery, golf carts, utility vehicles, or renewable energy systems, our advanced search tool delivers fast and accurate recommendations tailored to your needs.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              Designed with both professionals and everyday users in mind, the Battery Finder simplifies the selection process while ensuring compatibility, reliability, and optimal performance. By combining FULBAT's extensive product portfolio with smart search technology, users can confidently choose batteries that meet the highest standards of quality, safety, and long-term durability. Experience a faster, smarter way to power your applications with batteries engineered for dependable performance in every environment.
            </Typography>
          </div>

          <div className="mt-2 self-start" data-aos="fade-up" data-aos-delay="100">
             <Button text="Find Your Battery" href="#finder" showIcon={false} variant="secondary" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BatteryFinder;
