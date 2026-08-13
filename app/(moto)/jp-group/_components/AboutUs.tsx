"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-8 min-[3800px]:gap-12 items-center">

        {/* Image (Mobile: Order 3, Desktop: Left Column) */}
        <div className="w-full order-3 lg:order-1 lg:col-span-7 h-full flex justify-center lg:justify-start" data-aos="fade-right">
          <img
            src="/moto/jp-group/section2.png"
            alt="JP Group Warehouse"
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Content (Mobile: Order 1 & 2, Desktop: Right Column) */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 lg:col-span-5 w-full" data-aos="fade-left">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="primary" className="font-bold">
              About J.P Group
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Leading in Aftermarket Autoparts
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Based in Viborg, Denmark, JP Group a/s has been a 100% family-owned company since the founding in 1975. Today JP Group is one of the world's leading companies on the aftermarket - producing and selling high-quality spare parts and accessories for European and Asian cars to customers all over the world. Our product range covers more than 25,000 item numbers which all follow OE quality standards. Moreover, we are one of the preferred suppliers and manufacturer of exclusive spare parts and accessories for classic cars from VAG and Porsche.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              Main focus is always towards future development and to be as close to our customers as possible. We constantly monitor the European vehicle fleet to ensure that our product range match both now and tomorrow.
            </Typography>
          </div>

          <div className="mt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Know More" variant="primary" href="#about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
