"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Solutions = () => {
  const items = [
    { title: "Sustainable Performance & Protection" },
    { title: "CO2 Emission Reduction" },
    { title: "Renewable Raw Material Solutions" },
    { title: "Fuel-Saving Lubricant Technology" },
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]" id="solutions">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-8">

          {/* Left Title */}
          <div className="space-y-4" data-aos="fade-right" data-aos-duration="1000">
            <Typography variant="h2" color="dark" weight="semibold" className="italic">
              Future-Ready Lubrication Solutions
            </Typography>
            <div className="flex items-center gap-4">
              <div className="w-[20%] rounded h-1 bg-secondary"></div>
              <Typography variant="h4" color="primary" className="italic">
                A Closer Look at Our Engine Oils
              </Typography>
            </div>
          </div>

          {/* Right Title (Image) */}
          <div className="xl:text-right" data-aos="fade-left" data-aos-duration="1000">
            <img
              src="/moto/UTB/heading2.png"
              alt="360° Experience"
              className="h-16 md:h-20 lg:h-22 w-auto object-contain object-right"
            />
          </div>

        </div>

        {/* Content Row */}
        <div className="flex flex-col 2xl:flex-row gap-8 2xl:gap-8 items-start">

          {/* Left: 360 Video Placeholder */}
          <div className="w-full 2xl:w-1/2 relative" data-aos="fade-up" data-aos-duration="1000">
            {/* Checkerboard background placeholder */}
            <div
              className="w-full  aspect-video  rounded flex items-center justify-center shadow-lg"           >
              <DynamicVideoPlayer type="360" />
            </div>
          </div>

          {/* Right: Content & Features */}
          <div className="w-full 2xl:w-1/2 flex flex-col justify-center">
            <div className="space-y-4 mb-10 tracking-wide " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <Typography variant="body" color="body">
                UTB Oils is committed to driving a more sustainable future through the development of
                advanced CO2-reducing lubricant solutions. By combining innovative technology with
                environmentally responsible practices, the company creates products that help improve fuel
                efficiency, reduce emissions, and support the growing demand for sustainable mobility across
                automotive and industrial sectors.
              </Typography>
              <Typography variant="body" color="body">
                A key focus of UTB Oils is the use of fuel-saving lubricants and renewable raw materials that
                contribute to lower environmental impact without compromising performance.
              </Typography>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 ">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center group cursor-pointer hover:scale-[1.02] transition-transform" data-aos="fade-up" data-aos-delay={idx * 150}>
                  {/* Hexagon Box */}
                  <div
                    className="bg-secondary flex items-center justify-center z-20 shrink-0 transition-colors group-hover:bg-secondary-hover shadow-lg"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      width: "75px",
                      height: "80px",
                      marginRight: "-28px"
                    }}
                  >
                    <img src="/moto/UTB/settings.png" alt="Settings" className="w-7 h-7 md:h-10 md:w-10 object-contain brightness-0 invert ml-[-2px]" />
                  </div>
                  {/* Text Box */}
                  <div className="bg-primary text-white flex items-center p-3 pl-8 pr-4 py-2 h-[65px] w-full rounded-r-md z-10 shadow-md">
                    <span className="font-medium text-lg leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Solutions;
