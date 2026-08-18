"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center ">

        {/* Image (Mobile: Order 4, Desktop: Col 1-6) */}
        <div className="w-full order-4 xl:order-none xl:col-span-6" data-aos="fade-right">
          <img
            src="/moto/wai/section2.png"
            alt="WAI Service"
            className="w-full rounded-2xl object-cover aspect-[819/700] shadow-lg"
          />
        </div>

        {/* Content (Mobile: Order 1,2,3, Desktop: Col 7-12) */}
        <div className="flex flex-col gap-6 order-1 xl:order-none xl:col-span-6 w-full pt-4 xl:pt-0" data-aos="fade-left">

          {/* Heading Group */}
          <div className="flex flex-col gap-2 order-1 xl:order-none">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              The Power of WAI
            </Typography>
          </div>

          {/* Body Text */}
          <div className="flex flex-col gap-4 order-2 xl:order-none">
            <Typography variant="p" color="muted" className="leading-relaxed">
              WAI Global is a leading manufacturer and supplier of premium aftermarket automotive solutions, delivering OE-quality products trusted by customers worldwide. Since 1978, the company has built extensive expertise in rotating electrical systems, engine management components, small motors, and advanced vehicle electronics. By combining global engineering capabilities, state-of-the-art manufacturing processes, and a strong distribution network, WAI Global develops innovative solutions designed to meet the evolving needs of the automotive industry. Its comprehensive product portfolio supports passenger vehicles, commercial vehicles, agricultural machinery, industrial equipment, marine applications, and powersports markets with reliable performance, durability, and exceptional quality.
            </Typography>
          </div>

          {/* Button */}
          <div className="order-3 xl:order-none w-fit pt-2" data-aos="fade-left" data-aos-delay="100">
            <Button text="Know About Us" href="#about" showIcon={false} />
          </div>

          {/* Cards (Mobile: Order 5, Desktop: Under Content) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 order-5 xl:order-none mt-4 xl:mt-6" data-aos="fade-up" data-aos-delay="200">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white border border-gray-300 shadow-sm p-4 sm:p-5 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src="/moto/wai/icon1.png" alt="Since 1978" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h4" color="dark" className="font-bold">
                Since 1978
              </Typography>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white border border-gray-300 shadow-sm p-4 sm:p-5 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src="/moto/wai/icon2.png" alt="OE-Quality Engineering" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h4" color="dark" className="font-bold">
                OE-Quality Engineering
              </Typography>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white border border-gray-300 shadow-sm p-4 sm:p-5 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src="/moto/wai/icon3.png" alt="Global Coverage" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h4" color="dark" className="font-bold">
                Global Coverage
              </Typography>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
