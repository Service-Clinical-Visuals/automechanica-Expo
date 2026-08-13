"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[2100px]:py-20 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-6 items-center xl:items-start">

        {/* Image (Mobile: Order 4, Desktop: Col 1-6, Row 1-3) */}
        <div
          className="w-full order-2 xl:order-none xl:col-span-6 xl:row-span-3 flex justify-start h-full"
          data-aos="fade-right"
        >
          <img
            src="/moto/lpr-srl/section2.png"
            alt="Factory"
            className="w-full h-auto max-w-[820px] rounded-xl object-cover shadow-sm min-[2100px]:max-w-[1400px] min-[3800px]:max-w-[1800px]"
          />
        </div>

        {/* Heading (Mobile: Order 1, Desktop: Col 7-12, Row 1) */}
        <div className="w-full order-1 xl:order-none xl:col-start-7 xl:col-span-6 flex flex-col gap-2 mt-2 xl:mt-8" data-aos="fade-left">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            A Legacy of Braking Innovation
          </Typography>
        </div>

        {/* Body Text (Mobile: Order 3, Desktop: Col 7-12, Row 2) */}
        <div className="w-full order-3 xl:order-none xl:col-start-7 xl:col-span-6 flex flex-col gap-5 mt-2" data-aos="fade-left" data-aos-delay="100">
          <Typography variant="p" color="dark" className="leading-relaxed opacity-90">
            Founded in Brescia in 1952, LPR began its journey with precision machining expertise, producing high-quality brake hydraulic components for original equipment manufacturers. Over the decades, the company evolved through continuous investment in technology, advanced manufacturing, and engineering excellence.
          </Typography>

          <Typography variant="p" color="dark" className="leading-relaxed opacity-90">
            In 1977, LPR was established in Piacenza with a strong focus on brake and clutch hydraulic systems. Under the leadership of Luciano Arici, the company expanded its capabilities, strengthened its global presence, and became recognized for quality, innovation, and reliable braking solutions.
          </Typography>

          <Typography variant="p" color="dark" className="leading-relaxed opacity-90">
            LPR offers a complete range of aftermarket braking components, including brake pads, shoes, discs, drums, and hydraulic systems. With extensive industry experience and a commitment to continuous improvement, LPR continues to deliver advanced braking solutions trusted by customers worldwide.
          </Typography>
        </div>

        {/* Button (Mobile: Order 4, Desktop: Col 7-12, Row 3) */}
        <div className="w-full order-4 xl:order-none xl:col-start-7 xl:col-span-6 mt-4 sm:mt-6 mb-4 xl:mb-0" data-aos="fade-up" data-aos-delay="200">
          <Button text="Know About us" href="#about" showIcon={false} />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
