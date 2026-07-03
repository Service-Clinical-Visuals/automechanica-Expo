"use client";

import React from "react";
import Typography from "./Typography";

export default function Partner() {
  return (
    <section className="relative w-full py-16 md:py-18 bg-white">
      <div className="custom-container flex flex-col items-center">
        {/* Top Header Section */}
        <div className="w-full flex flex-col text-center mb-10 md:mb-16" data-aos="fade-up">
          <Typography variant="h2" color="dark" weight="bold" className="font-oswald tracking-tight mb-6">
            Your Trusted Aftermarket Partner
          </Typography>
          <Typography variant="p" weight="normal" color="dark" className="font-lato max-w-full lg:max-w-[85%] xl:max-w-[80%] mx-auto leading-relaxed">
            MEYLE makes the independent aftermarket better - with strong parts and smart solutions for cars and vans. We do this in the same way as our founder: partnership is the key to success. That's why we work closely with partners to make the driver's world a better place. We ensure top quality in Hamburg, from development to dispatch. Together with dealers and workshops in around 120 countries, we ensure that drivers can count on MEYLE. And we not only supply high-quality parts, but also the necessary information in market-relevant databases such as TecDoc. For the right parts in the right place at the right time.
          </Typography>
        </div>

        {/* Main Image */}
        <div className="w-full mx-auto" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/moto/meyle/section2.png"
            alt="Meyle Headquarters"
            className="w-full h-auto object-cover rounded-[32px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
