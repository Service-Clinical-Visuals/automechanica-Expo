"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full py-16 bg-transparent overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12 items-center">

        {/* Header Block: Title and Text centered */}
        <div className="flex flex-col items-center text-center xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-4">
            About PETRONAS Lubricants International
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed">
            PETRONAS Lubricants International (PLI) is the global lubricants manufacturing and marketing arm of PETRONAS, Malaysia's dynamic global energy group. Established in 2008, PLI manufactures and markets a full range of high-quality automotive and industrial lubricant products in over 100 markets internationally. Headquartered in Kuala Lumpur, PLI also has offices around the world including Turin, Belo Horizonte, Beijing, and Chicago
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full md:w-[42.3%] aspect-[677/455] rounded-3xl overflow-hidden shadow-md">
            <img
              src="/moto/petronas/about1.png"
              alt="PETRONAS Facility 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[33.3%] aspect-[533/455] rounded-3xl overflow-hidden shadow-md">
            <img
              src="/moto/petronas/about2.png"
              alt="PETRONAS Facility 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[24.3%] aspect-[390/455] rounded-3xl overflow-hidden shadow-md">
            <img
              src="/moto/petronas/about3.png"
              alt="PETRONAS Facility 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 w-full mt-2" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full lg:max-w-[75%] text-left">
            <Typography variant="p" color="white" className="leading-relaxed">
              PLI is the technical resource behind PETRONAS' partnership with the Mercedes-AMG PETRONAS Formula One Team, responsible for the design, development, and delivery of the Fluid Technology Solutions™, which includes customised lubricants, fuels and transmission fluids to power the Silver Arrows. We are a progressive energy and solutions partner, enriching lives for a sustainable future. Our commitment remains to conduct and grow our business in ways that contribute positively to society and the environment.
            </Typography>
          </div>
          <div className="shrink-0 self-start lg:self-end">
            <Button text="Learn More About Us" href="#" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
