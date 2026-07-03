"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Specialist() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden" id="company">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-1 gap-8 xl:gap-12">

        {/* Top Content: Heading and Main Paragraph */}
        {/* Mobile: Order 1, Desktop: natural flow top */}
        <div className="flex flex-col items-center text-center max-w-[82%] mx-auto space-y-6 order-1 xl:order-none" data-aos="fade-up">
          <Typography variant="h2" weight="bold" color="dark">
            Car Parts Specialist
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed">
            ABS is family owned and operated since 1978 and a true global car parts specialist when it comes to creating value through quality control, sourcing, marketing, stocking and distributing brake parts, steering and suspension parts and wheel bearing kits. The company has over 45 years of experience within the European automotive aftermarket. Check out our storytelling page for some historical highlights.
          </Typography>
        </div>

        {/* Images Grid */}
        {/* Mobile: Order 3, Desktop: natural flow middle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full order-3 xl:order-none" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm shadow-sm group">
            <img
              src="/moto/abs-allbrakes/section2.png"
              alt="ABS Building Exterior"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm shadow-sm group">
            <img
              src="/moto/abs-allbrakes/section3.png"
              alt="ABS Driven By Expertise"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Bottom Content: Secondary Paragraph and Button */}
        {/* Mobile: Split into order 2 (text) and order 4 (button). Desktop: Bottom row aligned */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 xl:gap-12 w-full order-2 xl:order-none contents xl:flex">

          <div className="w-full xl:w-2/3 order-2 xl:order-none" data-aos="fade-right" data-aos-delay="300">
            <Typography variant="p" color="dark" className="leading-relaxed text-left">
              With nearly five decades of experience, ABS serves 156 global markets and supports 1,376+ active customers through quality, innovation, reliability, exceptional service, and lasting partnerships.
            </Typography>
          </div>

          <div className="w-full xl:w-auto flex justify-start xl:justify-end order-4 xl:order-none" data-aos="fade-left" data-aos-delay="400">
            <Button text="Get To Know Us" href="#about" showIcon={false} />
          </div>

        </div>

      </div>
    </section>
  );
}
