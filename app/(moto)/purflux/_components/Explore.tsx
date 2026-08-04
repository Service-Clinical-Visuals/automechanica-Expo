"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Explore = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">
        
        {/* Content (Mobile: Order 1, Desktop: Col 1-6) */}
        <div className="flex flex-col gap-6 order-1 xl:order-none xl:col-span-6 w-full" data-aos="fade-right">
          
          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Explore the Online Catalogue
            </Typography>
            
            <Typography variant="p" color="dark" className="leading-relaxed font-bold italic opacity-90">
              Find the right filtration solution in seconds with Purflux's continuously updated digital catalogue.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              Access the complete range of oil, air, fuel, diesel, and cabin air filters for passenger cars and commercial vehicles. Search by vehicle manufacturer, filter type, or part number to quickly identify the correct product. Updated weekly, the catalogue includes the latest product additions, replacement references, and comprehensive filter specifications.
            </Typography>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button text="View Catalogue" href="#" showIcon={false} />
            <Button text="Download Guide" href="#" variant="outline" showIcon={false} />
          </div>

        </div>

        {/* Image (Mobile: Order 2, Desktop: Col 7-12) */}
        <div className="w-full order-2 xl:order-none xl:col-span-6" data-aos="fade-left">
          <div className="w-full rounded-sm overflow-hidden shadow-sm">
            <img
              src="/moto/purflux/section3.png"
              alt="Purflux Catalogue"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Explore;
