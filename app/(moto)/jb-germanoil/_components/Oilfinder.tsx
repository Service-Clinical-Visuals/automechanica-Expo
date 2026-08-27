"use client";
import React from "react";
import Button from "./Button";
import { Car, Truck, Bus, Tractor } from "lucide-react";

export default function Oilfinder() {
  return (
    <section className="relative w-full py-24 md:py-32  flex items-center  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/moto/jb-germanoil/bg.jpg" 
          alt="JB Germanoil Oilfinder" 
          className="w-full h-full object-cover "
        />
      </div>

      <div className="custom-container px-8 md:px-12 lg:px-28 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="max-w-xl flex flex-col items-start" data-aos="fade-right">
          <h2 className="aldrich-font banner-title1 text-white mb-2 tracking-wide font-normal drop-shadow-md">
            JB Germanoil Oilfinder
          </h2>
          <p className="akshar-font card-title  text-white mb-8 drop-shadow-sm font-light">
            Your quick path to the perfect oil
          </p>
          <Button href="#" iconType="arrowUpRight">
            Find The Right Oil
          </Button>
        </div>

        {/* Right Icons */}
        <div className="flex flex-wrap items-end justify-center md:justify-end gap-8 md:gap-10 lg:gap-12" data-aos="fade-left">
          <img src="/moto/jb-germanoil/imgs.png" alt="Oil Finder" />
        </div>
      </div>
    </section>
  );
}
