"use client";

import React from "react";
import Container from "./Container";
import HexagonButton from "./HexagonButton";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Efficiency = () => {
  const cards = [
    {
      title: "Smart Carbon Reduction",
      desc: "Innovative lubricant formulations designed to help lower CO2 emissions while maintaining optimal engine and equipment performance."
    },
    {
      title: "Efficiency Through Innovation",
      desc: "Advanced friction-control technology helps improve operational efficiency, reduce energy loss, and optimize fuel consumption."
    },
    {
      title: "Future-Ready Lubrication",
      desc: "Engineered to meet evolving environmental standards and the growing demand for sustainable mobility solutions."
    },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] relative" id="efficiency">
      <Container>

        {/* Top Split Layout */}
        <div className="flex flex-col 2xl:flex-row gap-12 2xl:gap-16 items-start mb-20">

          {/* Left: Video Placeholder */}
          <div className="w-full 2xl:w-1/2 flex items-center justify-center" data-aos="fade-right" data-aos-duration="1000">
            {/* Checkerboard background placeholder */}
            <div
              className="w-full aspect-video flex items-center justify-center shadow-lg"
            >

              <DynamicVideoPlayer type="short-1" className="aspect-video" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full 2xl:w-1/2 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1000">
            <img
              src="/moto/UTB/heading5.png"
              alt="Fleet Efficiency"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain mb-2 object-left"
            />

            <Typography variant="h3" color="white" weight="bold" className="italic mb-4 mt-2">
              Sustainable Solutions in Every Drop
            </Typography>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-32 h-0.5 bg-white"></div>
              <Typography variant="h4" weight="normal" color="secondary" className="italic text-secondary ">
                Fuel Efficiency Redefined
              </Typography>
            </div>

            <div className="space-y-5 mb-8">
              <Typography variant="body" color="white" className="leading-relaxed opacity-90 block">
                These next-generation lubricant solutions are designed to deliver reliable protection, enhanced efficiency, and long-term sustainability, helping businesses and consumers meet their operational and environmental goals.
              </Typography>
            </div>

            <div>
              <HexagonButton
                text="Explore Product"
                href="#efficiency"
                bgColor="bg-white"
                textColor="text-primary"
              />
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-0.5 bg-white/50 mb-12"></div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#333333] p-8 md:p-10 rounded-md shadow-xl flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={idx * 150}>
              {/* Hexagon Icon */}
              <div
                className="bg-secondary flex items-center justify-center mb-8"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  width: "60px",
                  height: "60px"
                }}
              >
                <img src="/moto/UTB/settings.png" alt="Icon" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>

              <Typography variant="h4" color="white" weight="bold" className="italic mb-4 ">
                {card.title}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 leading-relaxed ">
                {card.desc}
              </Typography>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Efficiency;
