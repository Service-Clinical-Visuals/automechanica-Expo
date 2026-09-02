"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3200px]:py-[120px] bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center">

        {/* Content (Heading + Text + Button) */}
        {/* Mobile: Order 1, Desktop: Col 7-12 */}
        <div className="flex flex-col gap-6 order-2  xl:col-span-6 w-full" data-aos="fade-left">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="primary" className="font-bold">
              About Baltic Filters
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Advanced Filtration Solutions Since 1997
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              JSC Baltic Filter is a leading manufacturer of automotive and industrial filters, offering over 2,500 product types for vehicles, machinery, and specialized equipment. With modern production facilities, advanced technologies, and high-quality raw materials, the company ensures reliable performance, efficiency, and long-lasting durability across global markets.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Backed by strong industry experience and continuous technological development, the company focuses on delivering innovative filtration solutions that meet the evolving needs of modern engines and industrial systems. Committed to international quality standards, customer trust, and sustainable growth, Baltic Filter supplies high-performance products to more than 50 countries worldwide.
            </Typography>
          </div>

          <div className="w-full mt-2" data-aos="fade-left" data-aos-delay="100">
            <Button text="Learn More" variant="secondary" href="#about" />
          </div>
        </div>

        {/* Image */}
        {/* Mobile: Order 1 (Top), Desktop: Col 1-6 (Left) */}
        <div className="w-full order-1 xl:col-span-6 flex justify-center xl:justify-start" data-aos="fade-right">
          <img
            src="/moto/baltic/section2.jpg"
            alt="Baltic Filters Facility"
            className="w-full h-auto object-cover aspect-[930/524] rounded-lg shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
